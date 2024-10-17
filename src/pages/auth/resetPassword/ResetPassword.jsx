/* eslint-disable */
import React from 'react'

import './ResetPassword.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const ResetPassword = () => {
  return (
 <div className="ResetPasswordcontent">
    <Formik>
      <Form>
        <h1>Đổi Mật Khẩu</h1>
        <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Tên Đăng Nhập</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Mật Khẩu Mới</label>
              <Field type="password" id="newPassword" name="newPassword" />
              <ErrorMessage name="newPassword" component="div" className="error" />
            </div>
            <button type="submit">Đổi Mật Khẩu</button>
      </Form>
    </Formik>
  </div>
 )
 }

export default ResetPassword;