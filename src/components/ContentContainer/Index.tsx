
import React from 'react';


interface Props {
    children: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col flex-grow items-center border f-full w-full'>
            {children}
        </div>
    );
};

export default ContentContainer;