
import Pagenotfound from 'pages/404'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes, Route, Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Login from 'pages/login'
import Register from 'pages/register'
import ProtectedRoute, { ProtectedRouteProps } from 'utils/protected'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from 'pages/home/home'
import DetailProduct from 'pages/detailproduct/detailproduct'
import ManageProduct from 'pages/admin/product/manageproduct'
import Blog from 'pages/admin/blog'
import Blogshow from 'pages/blog'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN9b74cLgH5_pgPlwgDaCz1JxcUMddNBM",
  authDomain: "khang-ad7e6.firebaseapp.com",
  projectId: "khang-ad7e6",
  storageBucket: "khang-ad7e6.appspot.com",
  messagingSenderId: "1036500718591",
  appId: "1:1036500718591:web:0848dc346926708a840dca",
  measurementId: "G-09TF4TBX3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: localStorage.getItem('token'),
    authenticationPath: '/login'
  }

  return (
    <Fragment>
      <ToastContainer />
      <Routes>
      <Route path='blog' element={<Blogshow />}/>
      <Route path='admin' element={<ManageProduct />}/>
      <Route path='admin/blog' element={<Blog />}/>
        <Route path='admin/contacts'/>
        <Route path='' element={<Home />} />
        <Route path='product/detail/:id' element={<DetailProduct />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </Fragment>
  )
}

export default App
