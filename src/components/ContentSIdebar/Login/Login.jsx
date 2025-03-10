import React from 'react'
import style from './styles.module.scss';
import InputForm from '@components/InputForm/InputForm';
import Button from '@components/Button/Button';
const Login = () => {
  return (
    <>
        <div className={style.container}>
            Sign in
            <div className={style.box}>
            <InputForm label="Email" type="text" isRequired/>
            <InputForm label="Password" type="password" isRequired/>
            </div>

            <div className={style.remember}>
                <input type="checkbox"/>
                <span>Remember me</span>
            </div>

            <Button content={"Login"}/>
            <div className={style.LostPass}>Lost your pass?</div>
        </div>
    </>
  )
}

export default Login