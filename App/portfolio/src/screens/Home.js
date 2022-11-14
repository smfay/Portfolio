import React, { useRef } from 'react';


const Home = () => {

    return (
        <>
            <div className='px-5 flex flex-col w-fit items-center text-justify'>
                <section className='h-32'>
                </section>
                <h2>W O R K S</h2>
                <section className='items-start w-fit justify-center flex-col'>
                    <div className='flex flex-wrap justify-center items-center w-full'>
                        <div className='m-2 rounded-lg flex flex-col md:flex-row justify-start space-x-2 space-y-2'>
                            <header className='w-full md:w-96'>
                                <h2 className='text-xl font-bold'>GameDev</h2>
                                <p className=''>Concept demonstration of a procedural animation set applied to a physics based character controller. </p>
                            </header>
                            <video disablePictureInPicture playsInline autoPlay loop muted src='/videos/Game.webm' className='w-full md:w-96'>
                            </video>
                        </div>
                        <div className='m-2 rounded-lg flex flex-col md:flex-row justify-start space-x-2 space-y-2'>
                            <header className='w-full md:w-96'>
                                <h2 className='text-xl font-bold'>Matter</h2>
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </header>
                            <img src='/images/matter.png' className='w-full md:w-96' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home