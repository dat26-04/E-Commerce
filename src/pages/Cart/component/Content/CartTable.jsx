import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './Content.scss';
import SelectBox from '@pages/OurShop/components/SelectBox';

const CartTable = ({listData}) => {
    console.log(listData)
    const [cartItems, setCartItems] = useState(listData);

    const removeItem = (id) => {
        setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
    };
    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '3' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];
    const getValueSelect = (value, type) => {
        console.log(value, type);
    };
    useEffect(() => {
        setCartItems(listData);
    }, [listData])
    return (
        <div className='cart-container'>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.userId}>
                            <td className='product'>
                                <img src={item.images[0]} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <span>Size: {item.size}</span>
                                </div>
                                <FaTrash
                                    className='delete-icon'
                                    onClick={() => removeItem(item.userId)}
                                />
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOptions}
                                    getValue={getValueSelect}
                                    type='sort'
                                    defaultValue={item.quantity}
                                />
                            </td>
                            <td>${(item.total * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='clear'>CLEAR SHOPPING CART</div>
        </div>
    );
};

export default CartTable;
