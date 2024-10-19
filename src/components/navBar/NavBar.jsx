/* eslint-disable */
import React from 'react'

import './NavBar.css';
import hinhnen from '../../assets/images/hinhnen.jpg'
const NavBar = () => {
  return (
    <div className='main'>

      <div className='navBar'>
        <div className="navBar-user">
          <div className="user-avt">
            <img src={hinhnen} alt="" />
          </div>
          <div className="user-name">
            Phạm Duy Đức
          </div>
        </div>

        <hr/>

        <div className="navBar-menu">
          <div className="navBar-menu-item">
            <p><i className="fa-solid fa-chart-pie"></i>Tổng quan</p>
          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i class="fa-solid fa-clipboard"></i>Xuất - nhập với NCC</p>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>
            </div>

          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i class="fa-solid fa-clipboard"></i>Xuất - nhập với nội bộ</p>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Lệnh xuất kho</p>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>

              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right"></i>Nhập kho</p>
                </div>
                <p className="sub-menu-item">Lệnh nhập kho</p>
                <p className="sub-menu-item">Phiếu nhập kho</p>
              </div>
            </div>
            
          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i class="fa-solid fa-clipboard"></i>Xuất - nhập với NVBH</p>
              <div className="sub-menu">
                <div className="sub-menu-item"> 
                  <p><i className="fa-solid fa-chevron-right"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>

              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right"></i>Nhập kho</p>
                </div>
                <p className="sub-menu-item">Phiếu nhập kho</p>
              </div>
            </div>
            </div>
            

          <div className="navBar-menu-item">
            <p><i className="fa-solid fa-chart-simple"></i>Quản lý kiểm kê</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default NavBar;