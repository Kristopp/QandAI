import React, { useEffect, ButtonHTMLAttributes } from 'react';
import Message from '../Message';
import Icon from '../Icon';
import userDefault from '/public/icons/user_default.png';
import Divider from '../Divider';
import Upvote from '../Upvote';


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

    return (
        <div className='flex flex-grow flex-col min-h-[160px] w-full md: max-w-[860px] text-white my-3'>
            <div className='flex flex-row items-center justify-start my-2'>

                <Icon icon={userDefault} size={'24px'} />
                <p className='ml-4 text-base md:text-xl' >{name}</p>
            </div>
            <Divider />
            {/* Content section */}
            <div className='flex min-h-[50px]'>

                <span className='my-2 text-sm md:text-xl '>{content}</span>
            </div>
            <Divider />
            {/* Vote action + count  */}
            <div className='flex flex-row justify-between items-center my-2'>
                <div className='flex flex-row items-center'>
                <span className='mr-4'>vote for this question:</span><Upvote postId={postId} userId={userId} />

                </div>
                <div>
                    <p className='text-sm md:text-lg'><span className='mx-2 text-sm'>voted</span>{voteCount}</p>
                </div>
            </div>
            {/* TODO: add loading component here */}

        </div>
    );
};

export default Content;