/* eslint-disable */
import React from 'react'

import './Login.css';
import { Field, Form, Formik } from 'formik';
import hinhnen from '../../../assets/images/hinhnen.jpg'

const Login = () => {

  return (
    <div>
      <Formik>
        <Form>
          <div className='login-container'>
            <div className='login-left'>
              <img src={hinhnen} alt="" />
            </div>
            <div className='login-right'>
              <div className='login-h1'>
                Đăng nhập vào tài khoản
              </div>

              <div className='login-un'>
                <label htmlFor="userName" className='login-label'>Tên đăng nhập: </label>
                <Field name='userName' className='login-input' type='text'/>
              </div>

              <div className='login-pw'>
                <label htmlFor="password" className='login-label' >Mật khẩu: </label>
                <Field name='password' className='login-input' />
              </div>

              <div className='login-s3'>
                <div className='rememberPW'>
                  <input type="checkbox" name='recomendPassword' id='login-radio'/>
                  <label htmlFor="recomendPassword" className='login-label'>Ghi nhớ tôi</label>
                </div>

                <div className='forgetPW'>
                  <a href="#">Quên mật khẩu?</a>
                </div>
              </div>

              <div className='login-btn'>
                  <button type="submit" id='loginBTN'>Đăng nhập</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;