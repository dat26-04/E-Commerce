import React, { useState } from 'react';
import style from './styles.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
const InputForm = ({ label, type, isRequired = false }) => {
    const isPassword = type === 'password';

    const [showPass, setShowPass] = useState(false);
    const isShowPass = type === 'password' && showPass ? 'text' : type;
    const handleShowPass = () => {
        setShowPass(!showPass);
    };
    return (
        <div className={style.container}>
            <div className={style.labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={style.boxInput}>
                <input type={isShowPass} />
                {isPassword && (
                    <div className={style.password} onClick={handleShowPass}>
                        {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputForm;
