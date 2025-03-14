import React, { useContext, useState } from 'react';
import style from './styles.module.scss';
import InputForm from '@components/InputForm/InputForm';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/Toast';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: ''
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: Yup.string().when('password', {
                is: () => isRegister,
                then: (schema) =>
                    schema
                        .required('Confirm Password is required')
                        .oneOf([Yup.ref('password')], 'Password not match')
            })
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={style.container}>
            <div>{isRegister ? 'Sign up' : 'Sign in'}</div>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.box}>
                    <InputForm
                        id='email'
                        label='Email'
                        type='text'
                        isRequired
                        formik={formik}
                    />
                    <InputForm
                        id='password'
                        label='Password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                    {isRegister && (
                        <InputForm
                            id='confirmpassword'
                            label='Confirm Password'
                            type='password'
                            isRequired
                            formik={formik}
                        />
                    )}
                </div>
                {!isRegister && (
                    <div className={style.remember}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <Button
                    content={isRegister ? 'Register' : 'Login'}
                    type='submit'
                    onClick={() => toast.success("Success Login")}
                />
                <Button
                    content={
                        isRegister
                            ? 'Already have an account'
                            : "Don't have an account"
                    }
                    type='button'
                    onClick={handleToggle}
                />
            </form>
            {!isRegister && (
                <div className={style.LostPass}>Lost your pass?</div>
            )}
        </div>
    );
};

export default Login;
