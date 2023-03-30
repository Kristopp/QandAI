//Create react input component with typescript 
import React from 'react';
import Icon from '../Icon';
import InputIcon from '/public/icons/input_icon.svg';

interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
    return (
        <div className='border b-red'>
            {/* //TODO: Icon component */}
            <Icon name={InputIcon}/>
            <input
                className='bg-transparent text-white border-b border-mint-dark focus:mint-light/100 outline-none'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
