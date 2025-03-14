import React, { useState } from 'react';
import style from './styles.module.scss';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const InputForm = ({ label, type, isRequired = false, formik, id, ...props }) => {
    const [showPass, setShowPass] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPass ? 'text' : type;

    const isError = formik?.touched?.[id] && formik?.errors?.[id];
    const messError = formik?.errors?.[id];

    return (
        <div className={style.container}>
            <label htmlFor={id} className={style.labelInput}>
                {label} {isRequired && <span>*</span>}
            </label>
            <div className={style.boxInput}>
                <input
                    id={id}
                    type={inputType}
                    onBlur={formik?.handleBlur}
                    onChange={formik?.handleChange}
                    value={formik?.values?.[id] || ''}
                    {...props}
                />
                {isPassword && (
                    <div className={style.password} onClick={() => setShowPass(!showPass)}>
                        {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                )}
            </div>
            {isError && <div className={style.error}>{messError}</div>}
        </div>
    );
};

export default InputForm;
