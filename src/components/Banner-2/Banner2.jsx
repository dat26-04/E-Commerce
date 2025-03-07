
import Button from '@components/Button/Button';
import style from './styles.module.scss';

const Banner2 = () => {
  return (
    <div className={style.container}>
        <p className={style.title}>The classics make a comeback</p>
        <div className={style.button}>
            <Button content={"Buy Now"} />
        </div>
    </div>
  )
}

export default Banner2