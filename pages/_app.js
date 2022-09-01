import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext';
import { toast , Toaster} from 'react-hot-toast';
// require('dotenv').config()

// import {ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
function MyApp({ Component, pageProps }) {
  return (
   
    <StateContext>
       <Toaster/>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </StateContext>
  
  )
}

export default MyApp
