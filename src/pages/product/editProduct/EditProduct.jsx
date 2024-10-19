import React from 'react';
import './EditProduct.css';

const EditProduct = () => {
  return (
    <div className="main-container">
      <div className="breadcrumb">
        <a href="#">Quản lý danh mục hàng hóa</a>
        <span>&gt;</span>
        <span>Cập nhật thông tin hàng hóa</span>
      </div>

      <div className="content-container">
        <div className="title-bar">
          Cập nhật thông tin hàng hóa
        </div>

        <div className="form-container">
          <div className="form-group">
            <label className="form-label">Mã hàng</label>
            <input 
              type="text" 
              value="123gbk"
              className="form-input"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tên hàng</label>
            <input 
              type="text" 
              value="Iphone 13 pro max"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Nhóm hàng</label>
            <input 
              type="text" 
              value="Điện thoại"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Hình ảnh</label>
            <div className="image-section">
              <div className="image-preview">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Product" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-upload">
                <div className="text-center">
                  <svg className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span>Chọn ảnh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Đơn vị</label>
            <input 
              type="text" 
              value="Chiếc/cái"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mô tả hàng hóa</label>
            <div className="description-fields">
              <div className="description-field">
                <label>Thông số máy</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Nhập thông số máy"
                />
              </div>

              <div className="description-field">
                <label>Màu sắc</label>
                <input 
                  type="text"
                  className="form-input"
                  defaultValue="Xanh, hồng, vàng, tím"
                />
              </div>

              <div className="description-field">
                <label>Ngày sản xuất</label>
                <input 
                  type="date"
                  className="form-input"
                />
              </div>

              <div className="description-field">
                <label>Thời hạn bảo hành</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Nhập thời hạn bảo hành"
                />
              </div>

              <div className="description-field">
                <label>Quà tặng kèm</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Nhập quà tặng kèm"
                />
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="save-btn">Lưu</button>
            <button className="cancel-btn">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;