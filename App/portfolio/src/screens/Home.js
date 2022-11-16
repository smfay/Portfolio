import React, { useRef } from 'react';


const Home = () => {

    return (
        <>
            <div className='text-left p-1'>
                <h2 id='card' className='rounded my-3 p-2'>W O R K S :</h2>
                <section className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 auto-rows-max'>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='m-2'>
                            <h2 className='text-xl font-medium'>Development</h2>
                            <p className=''>A 2D physics controller built for a personal project. By animating this procedurally, it gains context awareness that wouldn't be possible when animating manually. </p>
                        </header>
                        <section id='card' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <video width='400' height='400' disablePictureInPicture playsInline autoPlay loop muted src='https://smfay.github.io/portfolio/videos/Game.webm' className='object-cover grow'>
                            </video>
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='p-2'>
                            <h2 className='text-xl font-medium'>Matter</h2>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </header>
                        <section id='card' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <img src='https://smfay.github.io/portfolio/images/matter.png' alt="matter" className='object-cover grow' />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home