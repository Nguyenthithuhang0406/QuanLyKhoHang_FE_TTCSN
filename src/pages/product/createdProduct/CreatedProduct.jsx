/* eslint-disable */
import React from 'react'

import './CreatedProduct.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const CreatedProduct = () => {

  return (

    <div className="createProduct-container"> 
    <Header className="header-cP"/>
    <NavBar/>
      <div className="createProduct-form">
        <div className="createProduct-title">Thêm hàng hóa</div>
        <div className="main-form">
          <div className="productID-row">
            <label htmlFor="productID" className="createProduct-lbl">Mã hàng</label>
            <input name="productID" className="createProduct-txt" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatedProduct;