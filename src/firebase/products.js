import { collection, getDocs } from "firebase/firestore";
import { db } from "./index";


export const getProducts = async (coll )=> {
    const productsCollectionRef = collection(db, `/H&M/2gtjhBbGyiqc9G8efUge/${coll}`);
    const data = await getDocs(productsCollectionRef);
   return await (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
 
   
}
