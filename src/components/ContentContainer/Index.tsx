
import React from 'react';


interface Props {
    children: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col flex-grow items-center f-full w-full overflow-y-auto'>
            {children}
        </div>
    );
};

export default ContentContainer;