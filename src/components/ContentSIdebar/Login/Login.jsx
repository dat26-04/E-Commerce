import React, { useContext, useState } from 'react';
import style from './styles.module.scss';
import InputForm from '@components/InputForm/InputForm';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/Toast';
import { register } from '@/apis/authService';
import { signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/Sidebar';
import { StoreContext } from '@/contexts/StoreProvider';
const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const {setIsOpen, handleGetListProduct} = useContext(SidebarContext); 
    const {setUserId} = useContext(StoreContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: isRegister
                ? Yup.string()
                      .required('Confirm Password is required')
                      .oneOf([Yup.ref('password')], 'Password not match')
                : Yup.string()
        }),
        onSubmit: async (values) => {
            console.log(JSON.parse(JSON.stringify(values)));

            const { email: username, password } = values;

            if(isLoading) return;
            setIsLoading(true);
            if (isRegister) {
                
                await register(username, password)
                    .then((res) => {
                        console.log(res);
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error(error.response.data.message);
                        setIsLoading(false);
                    });
            }

            if(!isRegister) {
                await signIn(username, password)
                .then((res) => {
                    // console.log(res);
                    const {id, token, refreshToken} = res.data;
                    toast.success("Sign In Successfully");
                    setUserId(id);
                    Cookies.set('token', token);
                    Cookies.set('refreshToken', refreshToken);
                    Cookies.set('userId', id);
                    setIsLoading(false);
                    setIsOpen(false);
                    handleGetListProduct(id, "cart")
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Sign In Failed");
                    setIsLoading(false);
                }); 
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(prev => !prev);
        // console.log("isRegister trước:", isRegister); // Giá trị cũ
        formik.resetForm();
    };
    

    // useEffect(() => {

    // }, [])
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
                    content={isLoading ? "LOADING....":isRegister ? 'Register' : 'Login'}
                    type='submit'
                    // onClick={() => toast.success('Success Login')}
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
