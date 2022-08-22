import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/userContext';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SignIn from './pages/Sign In/signIn';
import CreateAccount from './pages/Create Account/createaccount';
import Editaccount from './pages/My Account/subdetails/editaccount';
import ChangePassword from './pages/My Account/subdetails/updatePassword';
import Submyacc from './pages/My Account/subdetails/submyacc';
import Basket from './pages/basketPage/basket';
import Fav from './pages/favPage/fav';
import Men from './pages/men/men';
import MenDetails from './pages/men/menDetails';
import Women from './pages/women/women';
import WomenDetails from './pages/women/womenDetails';
import Kids from './pages/kids/kids';
import KidsDetails from './pages/kids/kidsDetails';
import Myaccount from './pages/My Account/myaccount';



function App() {

  return (
    <>
      <Router>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/createaccount" element={<CreateAccount />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/myaccount" element={<Myaccount />} >
              <Route path="account" element={<Submyacc />} />
              <Route path="changepassword" element={<ChangePassword />} />
              <Route path="editaccount" element={<Editaccount />} />
            </Route>
            <Route exact path="/fav" element={<Fav />} />
            <Route exact path="/basket" element={<Basket />} />
            <Route exact path="/men" element={<Men />} />
            <Route path="/men/:id" element={<MenDetails />} />
            <Route path="/women" element={<Women />} />
            <Route path="/women/:id" element={<WomenDetails />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/kids/:id" element={<KidsDetails />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
