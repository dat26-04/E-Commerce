import React from 'react'
import style from '../../styles.module.scss';

const Stepss = () => {
  return (
    <div>
        <div className={style.stepss}>
            <div className={style.numstep}>1</div>
            <div className={style.textStep}>SHOPPING CART</div>
        </div>
        <div>
            <div>2</div>
            <div>CHECKOUT</div>
        </div>
        <div>
            <div>3</div>
            <div>ORDER STATUS</div>
        </div>
    </div>
  )
}

export default Stepss