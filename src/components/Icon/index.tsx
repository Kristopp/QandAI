//This component is for handeling icons in the app use typescript and next/image to render the icons

import React from 'react';
import Image, { StaticImageData } from 'next/image';


interface Props {
    icon: StaticImageData;
    size?: '16' |'24px' ;
    color?: string;
}

const Icon: React.FC<Props> = ({ icon, size }) => {
    return (
        <div className={`h-[24px] w-[24px] relative`}>
            <Image
                src={icon}
                alt="Picture of the author"
                fill
            />

        </div>
    );

};

export default Icon;