import React, { useContext } from 'react';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import style from '../styles.module.scss';
// import cls from 'classnames';
import { OurShopContext } from '@/contexts/OurshopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
const Filter = () => {
    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);
    // console.log(showOptions, sortOptions)
    const getValueSelect = (value, type) => {
        console.log(value, type);

        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleShowGrid = (type) => {
        console.log(type);
        setIsShowGrid(type==="grid")
    };
    return (
        <>
            <div className={style.containerFilter}>
                <div className={style.left}>
                    {/* <select className={cls(style.select, style.sort)}>
                        <option value='1'>1</option>
                         <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select> */}
                    <SelectBox
                        options={sortOptions}
                        getValue={getValueSelect}
                        type='sort'
                    />
                    <div className={style.boxIcon}>
                        <TfiLayoutGrid4Alt
                            style={{
                                fontSize: '20px',
                                marginRight: '10px',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleShowGrid('grid')}
                        />
                        <CiBoxList
                            style={{ fontSize: '20px', cursor: 'pointer' }}
                            onClick={() => handleShowGrid('list')}
                        />
                    </div>
                </div>
                <div className={style.left}>
                    <div>Show</div>
                    {/* <select className={cls(style.select, style.show)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select> */}
                    <SelectBox
                        options={showOptions}
                        getValue={getValueSelect}
                        type='show'
                    />
                </div>
            </div>
        </>
    );
};

export default Filter;
