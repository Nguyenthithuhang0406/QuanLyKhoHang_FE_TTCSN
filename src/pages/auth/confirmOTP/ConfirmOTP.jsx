import React from 'react';
import './ConfirmOTP.css';
import emailIcon from './image5.png';
const ConfirmOTP = () => {
    return (
        <div className="container">
            <div className="otp-content">
                <img src={emailIcon} alt="Email Icon" className="email-icon"/>
                <p className="text">Mã OTP gồm 6 chữ số đã được gửi đến bạn qua email ..... </p>
                <input type="text" placeholder="######" className="otp-input" maxLength={6}/> <br/>
                <a className="resent-OTP" href="">Gửi lại OTP</a>
                <button className="submit-button">Tiếp</button>
            </div>
        </div>
    );
};

export default ConfirmOTP;