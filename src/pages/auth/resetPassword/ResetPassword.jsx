/* eslint-disable */
import React from 'react'

import './ResetPassword.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Header from '@/components/header/Header';

const ResetPassword = () => {
  return (
    <>
      <Header />

      <div className='resetPasswordBody'>
        <div className="ResetPasswordcontent">
          <Formik>
            <Form>
              <h1 className='reset-name'>Đổi Mật Khẩu</h1>
              <div className="reset-form-group">
                <label htmlFor="email" className='reset-label'>Email</label>
                <Field type="email" id="email" name="email" className='reset-input'/>
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="reset-form-group">
                <label htmlFor="username" className='reset-label'>Tên Đăng Nhập</label>
                <Field type="text" id="username" name="username" className='reset-input' />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="reset-form-group">
                <label htmlFor="newPassword" className='reset-label'>Mật Khẩu Mới</label>
                <Field type="password" id="newPassword" name="newPassword" className='reset-input' />
                <ErrorMessage name="newPassword" component="div" className="error" />
              </div>
              <button type="submit" className='reset-btn'>Đổi Mật Khẩu</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;