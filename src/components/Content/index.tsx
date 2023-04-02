//Create new React component and export it as default use typescript 

import React from 'react';
import Message from '../Message';

interface Props {
    user: string;
}

//This component only takes in messages and displays them 

//This should be stateful and fetch messages from database using TRPC

//This should be scrollable container that holds all the message 


const Content: React.FC<Props> = ({user}) => {
    return (
        <div className='flex flex-grow border h-200' >
            {/* user name  */}
            <p>{user}</p>
            {/* Upvote count needs logic and DB*/}
            {/* Message needs logic and DB*/}
            <Message message='DEMO message'/>
        </div>
    );
};

export default Content;