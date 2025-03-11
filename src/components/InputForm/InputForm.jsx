import React, { useState } from 'react';
import style from './styles.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
const InputForm = ({ label, type, isRequired = false, ...props }) => {
    const isPassword = type === 'password';

    const [showPass, setShowPass] = useState(false);
    const isShowPass = type === 'password' && showPass ? 'text' : type;
    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const isError =
        props.formik.touched[props.id] && props.formik.errors[props.id];
    const messError = props.formik.errors[props.id];
    return (
        <div className={style.container}>
            <div className={style.labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={style.boxInput}>
                <input
                    type={isShowPass}
                    {...props}
                    onBlur={props.formik.handleBlur}
                    onChange={props.formik.handleChange}
                    value={props.formik.values[props.id]}
                />
                {isPassword && (
                    <div className={style.password} onClick={handleShowPass}>
                        {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                )}
                {isError && <div className={style.error}>{messError}</div>}
            </div>
        </div>
    );
};

export default InputForm;
