//This component is for handeling icons in the app use typescript and next/image to render the icons

import React from 'react';
import Image, { StaticImageData } from 'next/image';


interface Props {
    icon: StaticImageData;
    size?: number;
    color?: string;
}

const Icon: React.FC<Props> = ({ icon, size = 24 }) => {
    return (
            <Image
                src={icon}
                alt="Picture of the author"
                height={size}
                width={size}
                style={{ objectFit: 'contain' }}
            />
    );

};

export default Icon;