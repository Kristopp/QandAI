//Create react input component with typescript 
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { api } from '~/utils/api';
import Icon from '../Icon';
import InputIcon from '/public/icons/input_icon.png';


interface Props {
    type: string;
    placeholder: string;
}
//TODO: make inputt seciont accordion or some kind of interactive component

//TODO save message to database using TRPC 

//Input also needs userId and user

const Input: React.FC<Props> = ({ type, placeholder }) => {
    const [content, setInput] = useState<{ content: string }>({ content: '' });

    //User id is passed in the backend
    const createUserInput = api.postHandler.createUserInput.useMutation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput({ content: event.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        console.log('test', content)
        await createUserInput.mutateAsync(content).then((res) => {
            console.log('res', res);
        setInput({ content: '' });
    });
    };
    return (
        <div className='flex sticky bg-background-cards bg-opacity-100 items-end inset-x-0 border border-mint-light rounded bottom-0 px-2 pb-2 mb-2'>
            <div className='bottom-2'>
                <Icon icon={InputIcon} />
            </div>
            <form className='w-full flex items-end' onSubmit={handleSubmit}>
                <input
                    className='w-full bg-transparent mx-2 text-white focus:mint-light/100 outline-none'
                    type={type}
                    placeholder={placeholder}
                    value={content.content}
                    onChange={handleChange}
                />
                <button type="submit" className='w-20 h-9 text-mint-dark hover:text-black hover:bg-mint-main'>Ask</button>
            </form>
        </div>
    );
};

export default Input;
