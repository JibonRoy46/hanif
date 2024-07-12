import React from 'react';
import SectionTitle from '../../components/sectionTitle';

function Contact() {
    const user = {
        name: " Jibon Roy",
        age: " ",
        gender: " Male",
        email: " jibonroy9320@gmail.com",
        mobile: " 01772033679",
        country: " Bangladesh",
    }
    return (
        <div>
            <SectionTitle title="Say Hello" />
            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-tertiary text-sm'>{"{"}</p>
                    {Object.keys(user).map((key) => (
                        <p className=' ml-5 text-sm'>
                            <span className='text-tertiary'>{key} : </span>
                            <span className='text-tertiary'>{user[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary'>{"}"}</p>
                </div>
                <div className='h-[400px] sm:h-[400px]'>
                    <lottie-player src="https://lottie.host/e5a3936f-0ac7-41db-b59a-37155263ae2c/YqRGDu31fE.json" background="##FFFFFF"
                        speed="1" direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact