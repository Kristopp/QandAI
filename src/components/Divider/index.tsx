//this will be simple ui component for adding a line to seperate content

import React from 'react';

const Divider: React.FC = () => {
    return (
        <div className='border-b border-gray-300 w-full h-[2px]' />
    );
};

export default Divider;