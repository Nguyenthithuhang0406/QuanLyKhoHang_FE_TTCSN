/* eslint-disable */
import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import ConfirmOTP from './pages/auth/confirmOTP/ConfirmOTP';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';
import ForgetPassword from './pages/auth/forgetPassword/ForgetPassword';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import CreatedProduct from './pages/product/createdProduct/CreatedProduct';
import EditProduct from './pages/product/editProduct/EditProduct';
import ListProduct from './pages/product/listProduct/ListProduct';
import ConfirmDeleteProduct from './components/confirmDeleteProduct/ConfirmDeleteProduct';
import Header from './components/header/Header';
import Information from './pages/auth/information/Information';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/confirm-OTP',
      element: <ConfirmOTP />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/header',
      element:<Header/>,
    },
    {
      path: '/forgot-password',
      element: <ForgetPassword/>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/information',
      element: <Information/>
    },
    {
      path: '/createdProduct',
      element: <CreatedProduct />,
    },
    {
      path: '/editProduct',
      element: <EditProduct />,
    },
    {
      path: '/listProduct',
      element: <ListProduct />,
    },
    {
      path: '/confirmDeleteProduct',
      element: <ConfirmDeleteProduct />,
    }
  ]);
  return (
    <>
      {routes}
    </>
  )
}

export default App;