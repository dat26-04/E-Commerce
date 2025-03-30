import React from 'react';
import style from '../../styles.module.scss';
import Stepss from '@pages/Cart/component/Steps/Stepss';

const Steps = () => {
    const dataStep = [
        { data: 1, content: 'Shopping Cart' },
        { data: 2, content: 'Check Out' },
        { data: 3, content: 'Order Status' }
    ];
    return (
        <div className={style.containerForSteps}>
            <div className={style.step}>
                {dataStep.map((item, index) => {
                    return (
                        <>
                            <Stepss
                                key={item.data}
                                number={item.data}
                                content={item.content}
                                isDisabled={index !== 0}
                            />
                            {index !== dataStep.length - 1 && (
                                <div className={style.line} key={item.data}/>
                            )}
                        </>
                    );
                })}
            </div>
            {/* <Stepss number="1" content="Shopping Cart"/> */}
        </div>
    );
};

export default Steps;
