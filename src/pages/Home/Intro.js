import React from 'react';

function Intro() {
    return (

        <div className='flex'>
            <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 sm:h-[120vh]'>
                <h1 className='text-white'> Hi , I am</h1>
                <h1 className=' text-7xl sm:text-3xl text-secondary font-semibold'>
                    Jibon Roy
                </h1>
                <h1 className='text-6xl sm:text-3xl  text-white font-semibold'>
                    I build things for the web
                </h1>
                <p className='text-white w-1/2'>
                    I am Fullstack Web Developer. Currently I am working as a
                    React Developer in Bangladesh. Also sharing my knowledge to the students that
                    I have gained in my carrier through  online teaching across the world.
                </p>
                <button className=' rounded-md  border border-tertiary text-white px-10 py-5'>Get Started</button>
            </div>
            <div className='flex flex-col pl-10 pt-9 pag-5 w-1/2'>

            </div>
        </div >
    )
}

export default Intro