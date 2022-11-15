import React, { useRef } from 'react';


const Home = () => {

    return (
        <>
            <div className='text-justify p-2 md:p-12'>
                <h2>W O R K S</h2>
                <section className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 auto-rows-max'>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-5 rounded'>
                        <header className='m-2'>
                            <h2 className='text-xl font-bold'>GameDev</h2>
                            <p className=''>Concept demonstration of a procedural animation set applied to a physics based character controller. Concept demonstration of a procedural animation set applied to a physics based character controller.Concept demonstration of a procedural animation set applied to a physics based character controller.Concept demonstration of a procedural animation set applied to a physics based character controller.Concept demonstration of a procedural animation set applied to a physics based character controller.</p>
                        </header>
                        <section id='card' className='overflow-hidden flex m-2 rounded'>
                            <video width='500' height='500' disablePictureInPicture playsInline autoPlay loop muted src='https://smfay.github.io/portfolio/videos/Game.webm' className='object-cover grow'>
                            </video>
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-2 rounded'>
                        <header className='p-2'>
                            <h2 className='text-xl font-bold'>Matter</h2>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </header>
                        <section id='card' className='overflow-hidden flex m-2 rounded'>
                            <img src='https://smfay.github.io/portfolio/images/matter.png' alt="matter" className='object-cover grow' />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home