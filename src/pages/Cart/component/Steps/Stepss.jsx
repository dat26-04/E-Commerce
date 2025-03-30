import React from 'react'
import style from '../../styles.module.scss';
import cls from "classnames";
const Stepss = ({
  number, content, isDisabled
}) => {
  return (
    <div>
        <div className={style.stepss}>
            <div className={cls(style.numstep , {
              [style.isDisabledNumber]: isDisabled
            })}>{number}</div>
            <div className={cls(style.textStep, {
              [style.isDisabled]: isDisabled
            })}>{content}</div>
        </div>
  
    </div>
  )
}

export default Stepss