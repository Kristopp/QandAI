//Create react input component with typescript 
import React from 'react';
import Icon from '../Icon';
import InputIcon from '/public/icons/input_icon.png';


interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//TODO save message to database using TRPC 

const Input: React.FC<Props> = ({ type, placeholder, value,  onChange }) => {
    return (
        <div className='flex sticky items-end inset-x-0 bottom-0 py-1 min-h-[100px]'>
            <div className='bottom-0'>
            <Icon icon={InputIcon}/>
            </div>
            <input
                className='w-full mx-2 bg-transparent text-white border-b border-mint-dark focus:mint-light/100 outline-none'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
