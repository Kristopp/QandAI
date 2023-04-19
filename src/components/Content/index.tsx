import React, { useEffect, ButtonHTMLAttributes } from 'react';
import Message from '../Message';
import Icon from '../Icon';
import userDefault from '/public/icons/user_default.png';


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


const Content: React.FC<Props> = ({postId, name, userId,  createdAt, content, voteCount  }) => {
 
    //Create a upvote button onClick handler that calls the upvote mutation
    const handleUpvote = async (e: ButtonHTMLAttributes<HTMLButtonElement>) => {
       
    };


    return (
        <div className='flex flex-grow border max-h-[160px] w-full md: max-w-[860px] text-white my-3'>
            {/* user name  */}
            <Icon icon={userDefault} size={'24px'} />
            <p>{name}</p>
            <span>{content}</span>
            {/* Upvote count needs logic and DB*/}
            <p>{voteCount}</p>
            {/* Message needs logic and DB*/}
            {/* TODO: add loading component here */}
           
            {/* Upvote button */}
            <button type='button' onClick={() => handleUpvote }>Upvote</button>
        </div>
    );
};

export default Content;