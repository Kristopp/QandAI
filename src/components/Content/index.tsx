import React, { useEffect, ButtonHTMLAttributes } from 'react';
import Message from '../Message';
import Icon from '../Icon';
import userDefault from '/public/icons/user_default.png';
import Divider from '../Divider';


//THIS COMPONENT NEEDS ALL USER INPUTS FROM DATABASE AND DISPLAY THEM

//This component only takes in messages and displays them 

//This should be stateful and fetch messages from database using TRPC

//Maybe add Colapse feature for better reading other comments

interface Props {
    postId: string;
    name: string;
    userId: string;
    createdAt: Date;
    content: string;
    voteCount: number;
}


const Content: React.FC<Props> = ({ postId, name, userId, createdAt, content, voteCount }) => {

    //Create a upvote button onClick handler that calls the upvote mutation
    const handleUpvote = async (e: ButtonHTMLAttributes<HTMLButtonElement>) => {
        await console.log('empty')
    };


    return (
        <div className='flex flex-grow flex-col min-h-[160px] w-full md: max-w-[860px] text-white my-3'>
            <div className='flex flex-row items-center justify-start my-2'>

                <Icon  icon={userDefault} size={'24px'} />
                <p className='ml-4' >{name}</p>
            </div>
            <Divider />
            {/* Content section */}
            <div className='flex min-h-[50px]'>

            <span className='my-2'>{content}</span>
            </div>
            <Divider />
            {/* Action section */}
            <div className='flex flex-row justify-between my-2'>
            <button type='button' onClick={() => handleUpvote}>Upvote</button>
            <p><span className='mx-2'>score</span>{voteCount}</p>

            </div>
            {/* Message needs logic and DB*/}
            {/* TODO: add loading component here */}

        </div>
    );
};

export default Content;