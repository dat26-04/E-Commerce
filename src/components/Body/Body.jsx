import MainLayout from "@components/Layout/MainLayout"
import style from "./styles.module.scss"

const Body = () => {
  return (
    <MainLayout>
        <div className={style.container}>
            <div className={style.headline}></div>
            <div className={style.containerMiddleBox}>
                <p className={style.des}>dont miss super coupon</p>
                <p className={style.title}>Our best products</p>
            </div>
            <div className={style.headline}></div>
        </div>
    </MainLayout>
  )
}

export default Body