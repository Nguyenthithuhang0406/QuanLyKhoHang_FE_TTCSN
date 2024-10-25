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
      <div className="createProduct">
        <div className="createProduct-nav">
          <p className='create-link'>Quản lý danh mục hàng hóa</p>
          <p className='create-link'>Thêm hàng hóa </p>
        </div>

        <div className="createProduct-form">
          <div className="createProductForm-title">Thêm hàng hóa</div>
          <div className="main-form">
            <div className="productInfor-row">
              <label htmlFor="productID" className="createProduct-lbl">Mã hàng</label>
              <input type="text" name="productID" className="createProduc-textbox"/>
            </div>

            <div className="productInfor-row">
              <label htmlFor="productName" className="createProduct-lbl">Tên hàng</label>
              <input type="text" name="productName" className="createProduc-textbox"/>
            </div>

            <div className="productInfor-row">
              <label htmlFor="productGroup" className="createProduct-lbl">Nhóm hàng</label>
              <input type="text" name="productGroup" className="createProduc-textbox"/>
            </div>

            <div className="productInfor-column">
              <label htmlFor="productImg" className="createProduct-lbl">Hình ảnh</label>
              <input type="file" name="productImg" className="createProduc-img "/>
            </div>

            <div className="productInfor-column">
              <label htmlFor="productUnit" className="createProduct-lbl">Đơn vị tính</label>
              <input type="text" name="productUnit" className="createProduc-textbox"/>
            </div>

            <div className="productInfor-column">
              <label htmlFor="productDescribe" className="createProduct-lbl">Mô tả hàng hóa</label>
              <textarea name="productDescribe" className="createProduc-textbox bigTextbox" rows="10" cols="50" placeholder="Viết mô tả ở đây..."></textarea>
            </div>

            <div className="productInfor-row-btn">
              <button className="save-btn btn">Lưu</button>
              <button className="cancel-btn btn">Hủy</button>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatedProduct;