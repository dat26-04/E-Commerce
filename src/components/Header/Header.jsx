import BoxIcon from "./BoxIcon/BoxIcon"
import { dataBoxIcon, dataMenu } from "./BoxIcon/constants"
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div>
      <div>
        <div className={styles.containerIcon}>
          {
            dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href}/>
            })  
          }
        </div>
        <div className={styles.containerMenu}>
            {
              dataMenu.slice(0, 3).map((item) => {
                return <Menu content={item.content} href={item.href}/>
              })
            }
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Header