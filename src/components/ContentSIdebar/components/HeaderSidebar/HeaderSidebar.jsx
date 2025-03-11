import React from 'react'
import style from './styles.module.scss';

const HeaderSidebar = ({icon , title }) => {
  return (
    <div className={style.container}>
        {icon}
        <div>{title}</div>
    </div>
  )
}

export default HeaderSidebar