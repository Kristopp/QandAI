//This component is for handeling icons in the app use typescript and next/image to render the icons

import React from 'react';
import Image from 'next/image';
import InputIcon from '/public/icons/input_icon.svg';

interface Props {
    name: string;
    size?: number;
    color?: string;
}

const Icon: React.FC<Props> = ({ name, size = 24, color = 'white' }) => {
    return (
        <div className='flex row-auto'>
            <Image
                src={InputIcon}
                alt="Picture of the author"
                height={size}
                width={size}
            />
        </div>
    );

};

export default Icon;