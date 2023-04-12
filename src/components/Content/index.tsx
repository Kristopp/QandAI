import React, { useEffect } from 'react';
import Message from '../Message';
import Icon from '../Icon';
import userDefault from '/public/icons/user_default.png';
import { RouterInputs, RouterOutputs, api } from '~/utils/api';

interface Props {
    name: string | undefined | null;
    userId: string;
}

//This component only takes in messages and displays them 

//This should be stateful and fetch messages from database using TRPC

//Maybe add Colapse feature for better reading other comments

const Content: React.FC<Props> = ({ name, userId }) => {
    //Use TRPC inputRouters getUser to fetch messages from database

    const { data } = api.inputHandler.getUsersLatestInput.useQuery({ userId: userId });

    return (
        <div className='flex flex-grow border max-h-[160px] md:w-[800px] text-white'>
            {/* user name  */}
            <Icon icon={userDefault} size={'24px'} />
            <p>{name}</p>
            {/* Upvote count needs logic and DB*/}
            {/* Message needs logic and DB*/}
            {/* TODO: add loading component here */}
            {data?.latestMessage?.content && <Message message={data.latestMessage.content} />}
        </div>
    );
};

export default Content;