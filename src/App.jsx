/* eslint-disable */
import React from 'react'
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Information from './pages/auth/information/Information';
import CreatedAgency from './pages/agency/createdAgency/CreatedAgency';
import InforAgency from './pages/agency/inforAgency/InforAgency';
import ListAgency from './pages/agency/listAgency/ListAgency';
import InforProduct from './pages/product/inforProduct/InforProduct';
import ListImportSlip from './pages/importSlip/listImportSlip/ListImportSlip';
import CreatedImportSlip from './pages/importSlip/createdImportSlip/CreatedImportSlip';
import InforImportSlip from './pages/importSlip/inforImportSlip/InforImportSlip';
import ListExportSlip from './pages/exportSlip/listExportSlip/ListExportSlip';
import CreatedExportSlip from './pages/exportSlip/createdExportSlip/CreatedExportSlip';
import InforExportSlip from './pages/exportSlip/inforExportSlip/InforExportSlip';
import DLFromLocal from './components/downloadProduct/downloadProductFromLocal/DLFromLocal';
import DLFromExcel from './components/downloadProduct/downloadProductFromExcel/DLFromExcel';
import CreatedInventory from './pages/inventory/createdInventory/CreatedInventory';
import InforInventory from './pages/inventory/inforInventory/InforInventory';
import ListInventory from './pages/inventory/listInventory/ListInventory';

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
      path: '/forgot-password',
      element: <ForgetPassword />,
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
      path: '/information/:userId',
      element: <Information />
    },
    {
      path: '/createdProduct',
      element: <CreatedProduct />,
    },
    {
      path: '/editProduct/:productId',
      element: <EditProduct />,
    },
    {
      path: '/listProduct',
      element: <ListProduct />,
    },
    {
      path: '/infoProduct/:productId',
      element: <InforProduct/>
    },
    {
      path: '/confirmDeleteProduct',
      element: <ConfirmDeleteProduct />,
    },
    {
      path: '/createdAgency',
      element: <CreatedAgency/>
    },
    {
      path: '/inforAgency/:type/:supplyId',
      element: <InforAgency/>
    },
    {
      path: '/listAgency',
      element: <ListAgency/>
    },
    {
      path: '/listImportSlip/:type',
      element: <ListImportSlip/>
    },
    {
      path: '/createdImportSlip/:type',
      element: <CreatedImportSlip/>
    },
    {
      path: '/inforImportSlip/:importSlipId',
      element: <InforImportSlip/>
    },
    {
      path: '/listExportSlip/:type',
      element: <ListExportSlip/>
    },
    {
      path: '/createdExportSlip/:type',
      element: <CreatedExportSlip/>
    },
    {
      path: '/inforExportSlip/:exportSlipId',
      element: <InforExportSlip/>
    },
    {
      path: '/download/local',
      element: <DLFromLocal/>
    },
    {
      path: '/download/excel',
      element: <DLFromExcel/>
    },
    {
      path: '/createdInventory',
      element: <CreatedInventory/>
    },
    {
      path: '/inforInventory',
      element: <InforInventory/>
    },
    {
      path: '/listInventory',
      element: <ListInventory/>
    },
    {
      path: '*',
      element: <div>404: Page not found!</div>
    }
  ]);
  return (
    <>
      <ToastContainer />
      {routes}
    </>
  )
}

export default App;