/* eslint-disable */
import React from 'react'

import './ListProduct.css';
import { Field, Form, Formik } from 'formik';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const ListProduct = () => {
  return (
    <>
    <Header/>
    <NavBar/>
   <div className="ListProductkien">
    <Formik>
      <Form>
      <div className="daulist">
        <div className="left-sec">
          <div className="left">
            <label htmlFor="mhh">Mã hàng hóa</label>
            <Field type="text" id="mhh" name="mhh" />
            <label htmlFor="sD">Từ ngày</label>
            <Field type="date" id="sD" name="sD" />
          </div>
        </div>

        <div className="right-sec">
          <div className="right">
            <label htmlFor="thh">Tên hàng hóa</label>
            <Field type="text" id="thh" name="thh" />
            <label htmlFor="eD">Đến ngày</label>
            <Field type="date" id="eD" name="eD" />
          </div>
        </div>

        <button type="submit" className="timkiem">Tìm kiếm</button>
      </div>
      <button className='addButtonthem'>Thêm hàng hoá</button>
      <div className='listTable'>
          <table className='Listkien'>
            <tr>
              <th>STT</th>
              <th>Tên hàng</th>
              <th>Mã hàng</th>
              <th>Nhóm hàng</th>
              <th>Đơn vị tính</th>
              <th>Đơn giá</th>
              <th className='center'>Thao tác</th>
            </tr>
            <tr>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Điện thoại </td>
              <td>Cái </td>
              <td>30.000.000</td>
              <td className='purple'>
                <span className='pen'><i class="fa-solid fa-pen"></i></span>
                <span className='bin'><i class="fa-solid fa-trash-can"></i></span>
              </td>
            </tr>
          </table>
        </div>
    </Form>
    </Formik>
</div>
</>
  )
}

export default ListProduct;