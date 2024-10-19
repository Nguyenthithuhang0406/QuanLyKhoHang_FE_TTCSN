/* eslint-disable */
import React from 'react';
import './ConfirmOTP.css';
import emailIcon from '@/assets/images/image5.png';
import Header from '@/components/header/Header';
const ConfirmOTP = () => {
    return (
        <>
            <Header />
            <div className='confirmOTP-body'>
                <div className="container">
                    <div className="otp-content">
                        <img src={emailIcon} alt="Email Icon" className="email-icon" />
                        <p className="text">Mã OTP gồm 6 chữ số đã được gửi đến bạn qua email ..... </p>
                        <input type="text" placeholder="######" className="otp-input" maxLength={6} /> <br />
                        <p className="resent-OTP" href="">Gửi lại OTP</p>
                        <button className="submit-button">Tiếp</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmOTP;