/* eslint-disable */
import React from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="form-card">
          <h2 className="form-title">QUÊN MẬT KHẨU</h2>
              <form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Tên đăng nhập</label>
                <input type="text" id="username" name="username" />
              </div>
              <button type="submit" className="submit-btn">Gửi lại mật khẩu</button>
            </form>
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;