import React from 'react';

function Header() {
    return (
        <div className='p-5 bg-primary flex justify-between sm:flex-col'>
            <h1 className='text-secondary text-4xl sm:text-1xl font-semibold hover:text-white sm:px-1'>Jibon</h1>
            <div className=' flex flex-row sm:text-1xl text-tertiary pr-5  sm:flex sm:flex-col'>
                <a href='/' className=' rounded-lg py-3 px-4 hover:text-white'>Home</a>
                <a href='#About' className=' rounded-lg py-3 px-4 hover:text-white'>About</a>
                <a href='#Expreiences' className=' rounded-lg py-3 px-4 hover:text-white'>Expreiences</a>
                <a href='#Projects' className=' rounded-lg py-3 px-4 hover:text-white'>Projects</a>
                <a href='#Contact' className=' rounded-lg py-3 px-4 hover:text-white'>Contact</a>

                {/* <a href=''>
                    <h1 className='text-white text-2xl font-semibold'>Jibon</h1>
                </a>
                <a href=''>
                    <h1 className='text-white text-2xl font-semibold'>Jibon</h1>
                </a>
                <a href=''>
                    <h1 className='text-white text-2xl font-semibold'>Jibon</h1>
                </a>
                <a href=''>
                    <h1 className='text-white text-2xl font-semibold'>Jibon</h1>
                </a> */}
            </div>
        </div>
    )
}

export default Header 