//Create new React component and export it as default use typescript 

import React from 'react';
import Message from '../Message';
import { User } from 'next-auth';


interface Props {
    name: string | null | undefined;
}

//This component only takes in messages and displays them 

//This should be stateful and fetch messages from database using TRPC

//This should be scrollable container that holds all the message 


const Content: React.FC<Props> = ({name}) => {
    //Get session user from next-auth



    return (
        <div className='flex flex-grow border h-200' >
            {/* user name  */}
            <p>{name}</p>
            {/* Upvote count needs logic and DB*/}
            {/* Message needs logic and DB*/}
            <Message message='DEMO message'/>
        </div>
    );
};

export default Content;