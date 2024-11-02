/* eslint-disable */
import React from 'react'

import './NavBar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const user = useSelector(state => state.user);

  const navigate = useNavigate();

  const handleClickProfile = () => {
    const userId = user._id;
    navigate(`/information/${userId}`);
  };

  return (
    <div className='main'>

      <div className='navBar'>
        <div className="navBar-user">
          <div className="user-avt">
            <img src={user.avatar} alt="" onClick={handleClickProfile}/>
          </div>
          <div className="user-name" onClick={handleClickProfile}>
            {user.userName}
          </div>
        </div>

        <hr/>

        <div className="navBar-menu">
          <div className="navBar-menu-item">
            <p><i className="fa-solid fa-chart-pie icon-navbar" ></i>Tổng quan</p>
          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p> <i className="fa-solid fa-clipboard icon-navbar"></i>Xuất - nhập với NCC</p>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>
            </div>

          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i className="fa-solid fa-clipboard icon-navbar"></i>Xuất - nhập với nội bộ</p>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Lệnh xuất kho</p>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>

              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Nhập kho</p>
                </div>
                <p className="sub-menu-item">Lệnh nhập kho</p>
                <p className="sub-menu-item">Phiếu nhập kho</p>
              </div>
            </div>
          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i className="fa-solid fa-clipboard icon-navbar"></i>Xuất - nhập với NVBH</p>
              <div className="sub-menu">
                <div className="sub-menu-item"> 
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Xuất kho</p>
                </div>
                <p className="sub-menu-item">Phiếu xuất kho</p>
              </div>

              <div className="sub-menu">
                <div className="sub-menu-item">
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Nhập kho</p>
                </div>
                <p className="sub-menu-item">Phiếu nhập kho</p>
              </div>
            </div>
          </div>
            

          <div className="navBar-menu-item">
            <p><i className="fa-solid fa-chart-simple icon-navbar"></i>Quản lý kiểm kê</p>
          </div>
          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i className="fa-solid fa-chart-simple icon-navbar"></i>Báo cáo thống kê</p>
              <div className="sub-menu">
                <div className="sub-menu-item"> 
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Báo cáo nhập kho</p>
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Báo cáo tồn kho</p>
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Báo cáo xuất nhập tồn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="navBar-menu-item">
            <div className="menu-item-title">
              <p><i className="fa-solid fa-bars-staggered icon-navbar"></i>Danh mục</p>
              <div className="sub-menu">
                <div className="sub-menu-item"> 
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Nguồn hàng xuất/nhập</p>
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Danh mục hàng hóa</p>
                  <p><i className="fa-solid fa-chevron-right icon-navbar"></i>Hợp đồng</p>
                </div>
              </div>
            </div>
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default NavBar;