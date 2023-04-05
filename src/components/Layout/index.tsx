//Create a layout component that wraps the page component and provides the layout
// import react function types
import React, { FunctionComponent } from 'react';

interface Props {
    children: React.ReactNode;
}


export default function Layout({ children }: Props): JSX.Element {
    return (
        <>
            <div className=' bg-background-primary'>
                <main className='flex flex-col flex-grow container min-h-screen mx-auto sm:min-w-340 md:max-w-1600 bg-background-section '>{children}</main>
            </div>
        </>
    )
}