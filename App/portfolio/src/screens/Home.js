import React from 'react';
import { useSpring, animated } from 'react-spring'


const Home = () => {
    const props = useSpring({
        from: {
            scale: 0,
            translateX: 300,
            translateY: 50,
            opacity: 0,
            skewX: -30,
        },
        to: {
            scale: 1,
            translateX: 0,
            translateY: 0,
            opacity: 1,
            skewX: 0,
        },
        delay: 1000,
        config: {
            precision: 0.01,
            bounce: 5,
            tension: 80,
            damping: 10,
        },
    })

    return (
        <>
            <div className='px-5 flex flex-col w-fit items-center text-justify'>
                <section className='h-32'>
                </section>
                <h2>W O R K S</h2>
                <section className='items-start w-fit justify-center flex-col'>
                    <div className='flex flex-wrap justify-center items-center w-full'>
                        <animated.div id='card' style={props} className='m-2 rounded-lg flex flex-col md:flex-row justify-between'>
                            <header className='w-full md:w-96'>
                                <h2 className='text-xl font-bold'>GameDev</h2>
                                <p className=''>Concept demonstration of a procedural animation set applied to a physics based character controller. </p>
                            </header>
                            <video disablePictureInPicture playsInline autoPlay loop muted src='./videos/Game.webm' className='w-full md:w-96'>
                            </video>
                        </animated.div>
                        <animated.div id='card' style={props} className='m-2 rounded-lg flex flex-col md:flex-row justify-between'>'
                            <header className='w-full md:w-96'>
                                <h2 className='text-xl font-bold'>Matter</h2>
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </header>
                            <img src='./images/matter.png' alt="matter" className='w-full md:w-96' />
                        </animated.div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Home