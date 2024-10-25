/* eslint-disable */
import React from 'react'

import './ListProduct.css';
import { Field, Form, Formik } from 'formik';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const ListProduct = () => {
  return (
    <>
    <Header className="listproductheader"/>
    <NavBar/>
   <div className="ListProductkien">
    <Formik>
      <Form>
      <div className="daulist">
        <div className="left-sec">
            <div className="itemleft">
              <label className="mhhlistproduct" htmlFor="mhh">Mã hàng hóa</label>
              <Field className="listproductinput" type="text" id="mhh" name="mhh" />
            </div>
            <div className="itemleft">
              <label className="mhhlistproduct" htmlFor="sD">Từ ngày</label>
              <Field className="listproductinput" type="date" id="sD" name="sD" />
          </div>
        </div>

        <div className="right-sec">
            <div className="itemleft" >
              <label className="mhhlistproduct" htmlFor="thh">Tên hàng hóa</label>
            <Field className="listproductinput" type="text" id="thh" name="thh" />
            </div>
            <div className="itemleft">
              <label className="mhhlistproduct" htmlFor="eD">Đến ngày</label>
            <Field className="listproductinput" type="date" id="eD" name="eD" />
            </div>
        </div>

        <button type="submit" className="tklistproduct">Tìm kiếm</button>
      </div>
      <button className='addButtonthem'>Thêm hàng hoá</button>
      <div className='listTable'>
          <table className='Listkien'>
            <tr className="listtable1">
              <th className="listtable2">STT</th>
              <th className="listtable2">Tên hàng</th>
              <th className="listtable2">Mã hàng</th>
              <th className="listtable2">Nhóm hàng</th>
              <th className="listtable2">Đơn vị tính</th>
              <th className="listtable2">Đơn giá</th>
              <th className='center'>Thao tác</th>
            </tr>
            <tr>
              <td className="listtable3">1</td>
              <td className="listtable3">ĐT Samsung Galaxy </td>
              <td className="listtable3">XXXXX </td>
              <td className="listtable3">Điện thoại </td>
              <td className="listtable3">Cái </td>
              <td className="listtable3">30.000.000</td>
              <td className='purple'>
                <span className='pen'><i className="fa-solid fa-pen"></i></span>
                <span className='bin'><i className="fa-solid fa-trash-can"></i></span>
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