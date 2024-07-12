import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-16 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href='https://www.linkedin.com/in/jibon-roy-36786a2b4/'>
                        <i class='ri-linkedin-box-line text-xl text-gray-300'></i>
                    </a>
                    <a href='https://www.facebook.com/JibonRoy46'>
                        <i class='ri-facebook-circle-line text-xl text-gray-300'></i>
                    </a>
                    <a href='https://mail.google.com/mail/u/0/#inbox'>
                        <i class='ri-mail-line text-xl  text-gray-300'></i>
                    </a>
                    <a href='https://www.instagram.com/jibonroy9320/?next=%2F'>
                        <i class='ri-instagram-line text-xl text-gray-300'></i>
                    </a>
                    <a href='https://github.com/JibonRoy46'>
                        <i class='ri-github-line text-xl text-gray-300'></i>
                    </a>
                </div>

                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

                </div>
            </div>
        </div>
    )
}

export default LeftSider