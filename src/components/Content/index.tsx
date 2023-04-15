import React, { useEffect, ButtonHTMLAttributes } from 'react';
import Message from '../Message';
import Icon from '../Icon';
import userDefault from '/public/icons/user_default.png';
import { api } from '~/utils/api';

interface Props {
    name: string | undefined | null;
    userId: string;
}
//THIS COMPONENT NEEDS ALL USER INPUTS FROM DATABASE AND DISPLAY THEM

//This component only takes in messages and displays them 

//This should be stateful and fetch messages from database using TRPC

//Maybe add Colapse feature for better reading other comments


const Content: React.FC<Props> = ({ name, userId }) => {
    //Use TRPC inputRouters getUser to fetch messages from database
    const { data: allPosts, error, isLoading } = api.postHandler.getAllUsersPosts.useQuery();

    console.log('allPosts', allPosts)
    //Create a upvote button onClick handler that calls the upvote mutation
    const handleUpvote = async (e: ButtonHTMLAttributes<HTMLButtonElement>) => {
       
    };


    return (
        <div className='flex flex-grow border max-h-[160px] w-full md: max-w-[860px] text-white my-3'>
            {/* user name  */}
            <Icon icon={userDefault} size={'24px'} />
            <p>{name}</p>
            {/* Upvote count needs logic and DB*/}
            {/* Message needs logic and DB*/}
            {/* TODO: add loading component here */}
           
            {/* Upvote button */}
            <button type='button' onClick={() => handleUpvote }>Upvote</button>
        </div>
    );
};

export default Content;