/* eslint-disable */
import React from 'react'

import './Login.css';
import { Field, Form, Formik } from 'formik';
import hinhnen from '../../../assets/images/hinhnen.jpg'
import Header from '@/components/header/Header';

const Login = () => {

  return (
    <>
      <Header />
      <div className='login-body'>
        <div className='login-contain'>
          <div className='login-left'>
            <img src={hinhnen} alt="" className='login-image' />
          </div>
          <div className='login-right'>
            <Formik>
              <Form>
                <div className='login-h1'>
                  Đăng nhập vào tài khoản
                </div>

                <div className='login-group'>
                  <label htmlFor="userName" className='login-label'>Tên đăng nhập: </label>
                  <Field name='userName' className='login-input' type='text' />
                </div>

                <div className='login-group'>
                  <label htmlFor="password" className='login-label' >Mật khẩu: </label>
                  <Field name='password' className='login-input' />
                </div>

                <div className='login-s3'>
                  <div className='rememberPW'>
                    <input type="checkbox" name='recomendPassword' id='login-radio' />
                    <label htmlFor="recomendPassword" className='login-label'>Ghi nhớ tôi</label>
                  </div>

                  <div className='forgetPW'>
                    <p href="#" className='foget-text'>Quên mật khẩu?</p>
                  </div>
                </div>

                <div className='login-btn'>
                  <button type="submit" id='loginBTN'>Đăng nhập</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;