import MainLayout from '@components/Layout/MainLayout'

import style from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
const PopularProduct = ({data}) => {
  return (
    <MainLayout>
        <div className={style.container}>
          {data && data.map((item) => (
            <ProductItem
            key={item._id}
            src={item.images?.[0]}
            prevsrc={item.images?.[1]}
            name={item.name}
            price={item.price}
            details={item}

        />
          ))}
        </div>
    </MainLayout>
  )
}

export default PopularProduct