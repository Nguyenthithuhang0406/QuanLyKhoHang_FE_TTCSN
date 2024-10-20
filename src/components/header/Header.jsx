/* eslint-disable */
import React from 'react'

import './Header.css';
import { logout } from '@/api/userAPI/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      toast.success('Đăng xuất thành công');
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('Đăng xuất thất bại');
    }
  };

  return (
    <div className="header">
      <p className="ten"><i className="fa-solid fa-star-half-stroke"></i>Công Ty ABC</p>
      <div className="icon">
      <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-right-to-bracket" onClick={handleLogout} style={{ "cursor": "pointer" }}></i>
      </div>
    </div>
  )
}

export default Header;