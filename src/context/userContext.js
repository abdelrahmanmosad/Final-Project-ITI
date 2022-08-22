import { createContext, useContext, useState, useEffect } from "react";
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   updateProfile,
   sendPasswordResetEmail,
   signInWithPopup,
   GoogleAuthProvider,
   FacebookAuthProvider,
   updatePassword,
   reauthenticateWithCredential, EmailAuthProvider
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from "firebase/firestore";



const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const addDocByID = async (collName, ID, data) => {
   await setDoc(doc(db, collName, ID), data);
}
export const UserContextProvider = ({ children }) => {

   const [users, setUsers] = useState(undefined);
   const [loading, setLoading] = useState(false);
   const [errors, setError] = useState("");
   const [userInfo, setUserInfo] = useState({});

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, async (res) => {
         if (res) {
            setUsers(res);
         } else {
            setUsers(undefined);
         }
         setError("");
         setLoading(false);
      });
      return unsubscribe;
   }, []);



   const registerUser = async (email, password, name) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((credentials) => {
            console.log(credentials);
            console.log(auth.currentUser.uid);
            const user = credentials.user
            const data = {
               uid: user.uid,
               Name: name,
               Email: email,
               Password: password,
               Orders: [],
               Favs: [],
               mobile: "",
            }
            addDocByID('Users', user.uid, data)
               .then(async () => {
                  await updateProfile(auth.currentUser, {
                     ...users,
                     displayName: name,
                     phoneNumber: '02',
                  });
                  navigate('/home');
               }).catch(error => setError(error.message))
               .finally(() => setLoading(false));
         }).catch((error) => {
            setError(error.message)
         })
   };

   const signInUser = async (email, password) => {

      setLoading(true);


      await signInWithEmailAndPassword(auth, email, password)
         .then(async (res) => {
            console.log(res.user);
            await getDoc(doc(db, "Users", auth.currentUser.uid)).then(res => {
               console.log(res.data());
               setUserInfo(res.data());

            });
         })
         .catch((err) => setError(err.code))
         .finally(() => setLoading(false));
   };

   const signInWithGoogle = () => {
      setLoading(true);
      setError("");
      signInWithPopup(auth, new GoogleAuthProvider())
         .then((res) => {
            console.log(res)
         })
         .catch((err) => setError(err.code))
         .finally(() => setLoading(false));
   };

   const signInWithFacebook = () => {
      setLoading(true);
      setError("");
      signInWithPopup(auth, new FacebookAuthProvider())
         .then((res) => console.log(res))
         .catch((err) => setError(err.code))
         .finally(() => setLoading(false));
   };

   const updatecurrentProfile = async (name, phone) => {

      updateProfile(auth.currentUser, {
         ...users,
         displayName: name,
         phoneNumber: phone,
      }).then(async (res) => {

         await setDoc(doc(db, "Users", auth.currentUser.uid), {
            Name: name,
            mobile: phone,
         }, { merge: true });
         await getDoc(doc(db, "Users", auth.currentUser.uid)).then(res => {
            console.log(res.data());
            setUserInfo(res.data());

         });
      })
         .catch((err) => setError(err.code));
   };

   const changePassword = async (oldPass, newPass) => {
      const user = auth.currentUser;
      const cred = EmailAuthProvider.credential(user.email, oldPass);
      try {
         await reauthenticateWithCredential(user, cred)
         await updatePassword(auth.currentUser, newPass).then(async () => {
            console.log(user);
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
               Password: newPass,
            }, { merge: true });
            setError();
         }).catch((error) => {
            console.log(error.message);
         });

      } catch (e) {
         setError(e.code)
         console.log(e.code, e.message)
      }
   }


   const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
   };


   const logoutUser = () => {
      signOut(auth);
   };





   const contextValue = {
      users,
      loading,
      errors,
      UserContext,
      userInfo,
      setUsers,
      signInUser,
      registerUser,
      logoutUser,
      forgotPassword,
      changePassword,
      signInWithGoogle,
      signInWithFacebook,
      updatecurrentProfile,
   };
   return (
      <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
   )
}