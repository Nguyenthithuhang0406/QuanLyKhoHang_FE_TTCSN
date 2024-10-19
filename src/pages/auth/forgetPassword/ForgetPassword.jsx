/* eslint-disable */
import React from 'react';
import './ForgetPassword.css';
import Header from '@/components/header/Header';
import { Field, Form, Formik } from 'formik';

const ForgetPassword = () => {
  return (
    <div >
      <Header/>
      <Formik>
        <Form>
          <div className="main-content">
            <div className="form-card">
              <h2 className="form-title">QUÊN MẬT KHẨU</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email" className='foget-label'>Email</label>
                  <Field type="email" id="email" name="email" className='foget-input'/>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className='foget-label'>Tên đăng nhập</label>
                  <Field type="text" id="username" name="username" className='foget-input' />
                </div>
                <button type="submit" className="submit-btn">Gửi lại mật khẩu</button>
              </form>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPassword;