//Create a layout component that wraps the page component and provides the layout
// import react function types
import React, { FunctionComponent } from 'react';

interface Props {
    children: React.ReactNode;
}


export default function Layout({ children }: Props): JSX.Element {
    return (
        <>
            <div className='bg-background-primary'>
                <div className='container mx-auto sm:min-w-340 md:max-w-1600 bg-background-section '>
                <main>{children}</main>
                </div>

            </div>
        </>
    )
}