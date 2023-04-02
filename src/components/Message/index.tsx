//Statles React function that takes in message prop from parent component
import React from 'react';

interface Props {
    message: string;
}

const Message: React.FC<Props> = ({message}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Message;