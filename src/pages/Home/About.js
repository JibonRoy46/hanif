import React from 'react';
import SectionTitle from '../../components/sectionTitle';

function About() {
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='w-[70vh] sm:w-full '>
                    <lottie-player src="https://lottie.host/9ae9f1f9-e511-472f-971e-a32650db4071/GyGBOjJZJ0.json" 
                     background="transparent" 
                     speed="1" 
                     mode="normal"></lottie-player>
                </div>
                <div className='flex flex-col pl-20 pt-9 pag-5 w-1/2 sm:w-full '>
                    <p className='text-white'>
                        Hello! My name is Jibon Roy . I enjoy creating things that live on
                        the internet. My internet in web development started back in 2022
                        when I decided to try editing custom Tumblr themes - turns out
                        hacking together a custom reblog button taught me a lot about HTML & CSS
                    </p>
                    <br />
                    <p className='text-white '>
                        Fast-forward to today, and I've had the privilege of working at an
                        advertising agency, a start-up, a huge corproation, and a
                        student-led design studio. My main focus these days is building
                        accessible, inclusive pruducts and digital experiences at
                        Upstatement for a veriety of clients. I also recently launched a
                        coures that covers every thing you need to build a web app with the
                        Spotify API using Node & ReactAbout. Here are a few technologies I've
                        been working with recently.
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are a few technologies I've been working with recently:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div className=' rounded-lg  border border-tertiary py-3 px-10'>
                            <h1 className=' text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About