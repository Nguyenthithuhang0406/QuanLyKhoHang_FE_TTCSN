/* eslint-disable */
import React from 'react';
import './EditProduct.css';
import product from '@/assets/images/product.png';
import icon from '@/assets/images/icon.png';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const EditProduct = () => {
  return (
    <div>
      <Header className="header-editProduct" />
      <NavBar />

      <div className="main-editProduct">
        <div className="body-editProduct">
          <div className="breadcrumb">
            <p className='title-editproduct'>Quản lý danh mục hàng hóa</p>
            <span className='title-editproduct'>&gt;</span>
            <p className='title-editproduct'>Cập nhật thông tin hàng hóa</p>
          </div>
          <div className="content-container">
            <div className="title-bar">
              Cập nhật thông tin hàng hóa
            </div>

            <div className="form-container">
              <div className="form-group-edit-product">
                <label className="form-label">Mã hàng</label>
                <input type="text" value="123gbk" className="form-input" readOnly />
              </div>

              <div className="form-group-edit-product">
                <label className="form-label">Tên hàng</label>
                <input type="text" value="Iphone 13 pro max" className="form-input" />
              </div>

              <div className="form-group-edit-product">
                <label className="form-label">Nhóm hàng</label>
                <input type="text" value="Điện thoại" className="form-input" />
              </div>

              <div className="form-group-edit-product">
                <label className="form-label">Hình ảnh</label>
                <div className="image-section">
                  <div className="image-preview">
                    <img src={product} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="image-upload">
                    <div className="text-center">
                      <img src={icon} alt="Product" style={{ width: '69px', height: '63px' }} /> <br />
                      <span>Chọn ảnh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group-edit-product">
                <label className="form-label">Đơn vị</label>
                <input type="text" value="Chiếc/cái" className="form-input" />
              </div>

              <div className="form-group-edit-product">
                <label className="form-label">Mô tả hàng hóa</label>
                <textarea className='description-editProduct'/>
                {/* <div className="description-fields">
                  <div className="description-field">
                    <label>Thông số máy</label>
                    <input type="text" className="form-input" placeholder="Nhập thông số máy" />
                  </div>

                  <div className="description-field">
                    <label>Màu sắc</label>
                    <input type="text" className="form-input" defaultValue="Xanh, hồng, vàng, tím" />
                  </div>

                  <div className="description-field">
                    <label>Ngày sản xuất</label>
                    <input type="date" className="form-input" />
                  </div>

                  <div className="description-field">
                    <label>Thời hạn bảo hành</label>
                    <input type="text" className="form-input" placeholder="Nhập thời hạn bảo hành" />
                  </div>

                  <div className="description-field">
                    <label>Quà tặng kèm</label>
                    <input type="text" className="form-input" placeholder="Nhập quà tặng kèm" />
                  </div>
                </div> */}
              </div>

              <div className="button-group">
                <button className="save-btn">Lưu</button>
                <button className="cancel-btn">Hủy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EditProduct;