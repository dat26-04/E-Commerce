import React from 'react';
import style from './styles.module.scss';
import InputForm from '@components/InputForm/InputForm';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: (values) {
          console.log(values)
        }
    });
    return (
        <>
            <div className={style.container}>
                Sign in
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.box}>
                        <InputForm
                            id='email'
                            label='Email'
                            type='text'
                            isRequired
                            formik={formik}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div className={style.error}>{formik.errors.email}</div>
                        )}
                        <InputForm
                            id='password'
                            label='Password'
                            type='password'
                            isRequired
                            formik={formik}
                        />
                        {formik.errors.password && formik.touched.password && (
                          <div className={style.error}>{formik.errors.password}</div>
                        )}
                    </div>
                    <div className={style.remember}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                    <Button content={'Login'} type="submit"/>
                </form>
                <div className={style.LostPass}>Lost your pass?</div>
            </div>
        </>
    );
};

export default Login;
