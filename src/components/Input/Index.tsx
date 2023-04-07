//Create react input component with typescript 
import React, { ChangeEvent, useState } from 'react';
import { RouterInputs, RouterOutputs, api } from '~/utils/api';
import Icon from '../Icon';
import InputIcon from '/public/icons/input_icon.png';
import { UseTRPCMutationResult } from '@trpc/react-query/shared';


interface Props {
    type: string;
    placeholder: string;
}

//TODO save message to database using TRPC 

//Input also needs userId and user

const Input: React.FC<Props> = ({ type, placeholder }) => {
    const [content, setInput] = useState<{ content: string }>({ content: '' });

    //User id is passed in the backend
    const createUserInput = api.inputHandler.createUserInput.useMutation();

    console.log('userInput', createUserInput)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput({ content: event.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('test', content)
        await createUserInput.mutateAsync(content);
        setInput({ content: '' });
    };
    return (
        <div className='flex sticky items-end inset-x-0 bottom-0 py-1 min-h-[100px]'>
            <div className='bottom-0'>
                <Icon icon={InputIcon} />
            </div>
            <form className='className="w-full flex items-end' onSubmit={handleSubmit}>
                <input
                    className='w-full mx-2 bg-transparent text-white border-b border-mint-dark focus:mint-light/100 outline-none'
                    type={type}
                    placeholder={placeholder}
                    value={content.content}
                    onChange={handleChange}
                />
                <button type="submit" className='w-20 h-9 border'>Ask</button>
            </form>
        </div>
    );
};

export default Input;
