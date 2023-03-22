//Create a layout component that wraps the page component and provides the layout
// import react function types
import React, { FunctionComponent } from 'react';

interface Props {
    children: React.ReactNode;
}


export default function Layout({ children }: Props) {
    return (
        <>
            <div className='bg-background-primary'>
                <main>{children}</main>

            </div>
        </>
    )
}