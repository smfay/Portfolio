import React, { useRef } from 'react';


const Home = () => {

    return (
        <>
            <div className='text-left p-1'>
                <header id='card-flat' className='w-full md:w-1/3 rounded p-2 px-5'>
                    <h2 className=''>A B O U T :</h2>
                    <p>Software Developer with 2 years of experience developing web applications and UI/UX design. Familiar with fast paced work environments as well as working as part of a team generating responsive interfaces.</p>
                </header>
                <h2 className='rounded my-3 p-2'>W O R K S :</h2>
                <section className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 auto-rows-max'>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='m-2'>
                            <h2 className='text-2xl'>ROM</h2>
                            <p className=''>This is a procedurally animated 2d player controller that I built for a personal project. All the animations are </p>
                        </header>
                        <section id='' className='overflow-hidden flex m-2 rounded'>
                            <video width='500' height='500' disablePictureInPicture playsInline autoPlay loop muted src='https://smfay.github.io/portfolio/videos/Game.webm' className='object-cover grow'>
                            </video>
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='p-2'>
                            <h2 className='text-2xl'>MATTER</h2>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </header>
                        <section id='' className='overflow-hidden flex m-2 rounded'>
                            <img src='https://smfay.github.io/portfolio/images/matter.png' alt="matter" className='object-cover grow' />
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='p-2'>
                            <h2 className='text-2xl'>Fuck you andy i hate you I HATE YOU</h2>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </header>
                        <section id='' className='overflow-hidden flex m-2 rounded'>
                            <img src='https://smfay.github.io/portfolio/images/andy.jpg' alt="andy" className='object-cover grow' />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home