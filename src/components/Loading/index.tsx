//This should spinning loading icon component with typescript 

import React from 'react';


interface Props {
    size: number;
    color: string;
}

const Loading: React.FC<Props> = ({ size, color }) => {
    return (
        <div>loading</div>
    )
}

export default Loading;
