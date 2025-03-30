import React from 'react';
import style from '../styles.module.scss';
const SelectBox = ({ options, getValue, type, defaultValue }) => {
    return (
        <select
            onChange={(e) => getValue(e.target.value, type)}
            className={style.containerSelectBox}
            value={defaultValue}
        >
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectBox;
