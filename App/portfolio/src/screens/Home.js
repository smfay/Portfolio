import React, { useRef } from 'react';


const Home = () => {

    return (
        <>
            <div className='p-1 font-medium'>
                <h2 className='rounded my-3 p-2 text-xl text-center font-regular'>P O R T F O L I O</h2>
                <section className='font-medium p-3 md:p-8 text-black grid gap-8 rounded auto-rows-auto grid-cols-1 md:grid-cols-2'>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='p-2'>
                            <h2 className='font-semibold'>GroupDrive</h2>
                            <h3 className='italic'>January 2020 - to Present</h3>
                            <p id='card-2' className=''>GroupDrive is a car meet app being developed by Selrich Technologies with React Native. I was brought on to design the interface as well as some icons. </p>
                        </header>
                        <section id='card-flat' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <img src='https://smfay.github.io/portfolio/images/groupdrive.png' alt="matter" className='object-cover grow' />
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='m-2'>
                            <h2 className='font-semibold'>Development</h2>
                            <h3 className='italic'>5 Years</h3>
                            <p id='card-2' className=''>This is a 2D physics controller built for a personal project. By animating this procedurally, it gains context awareness that wouldn't be possible when animating manually. </p>
                        </header>
                        <section id='card-flat' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <video width='400' height='400' disablePictureInPicture playsInline autoPlay loop muted src='https://smfay.github.io/portfolio/videos/Game.webm' className='object-cover grow'>
                            </video>
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='p-2'>
                            <h2 className='font-semibold'>Matter</h2>
                            <h3 className='italic'>September 2020 - October 2021</h3>
                            <p id='card-2' className=''>Matter is an underground art zine that completed it's first issue in 2021 I designed many of the page layouts as well as promotional artwork and trading-card schema. The image attatched is a photoscan of the magazine and various merchandise.</p>
                        </header>
                        <section id='card-flat' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <img src='https://smfay.github.io/portfolio/images/matter.png' alt="matter" className='object-cover grow' />
                        </section>
                    </div>
                    <div id='card' className='grid grid-cols-1 md:grid-cols-2 p-1 rounded'>
                        <header className='m-2'>
                            <h2 className='font-semibold'>MatterZone</h2>
                            <h3 className='italic'>September 2022 - to Present</h3>
                            <p id='card-2' className=''>This is an extention of the Matter project that aims to make the zine digital. MatterZone is being developed in React.js and I am a designer as well as a frontend developer.</p>
                        </header>
                        <section id='card-flat' className='overflow-hidden flex m-2 rounded max-h-96'>
                            <video width='400' height='400' disablePictureInPicture playsInline autoPlay loop muted src='https://smfay.github.io/portfolio/videos/matterzone.webm' className='object-cover grow'>
                            </video>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home