import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSpring, useTrail, useSprings, useChain, useTransition, animated } from 'react-spring';
import Background3D from '../components/Background3D';
import Home from './Home'

const Layout = () => {
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
            <div id='foreground' className='flex flex-wrap content-center justify-center mx-2 md:mx-32'>
                <nav class="z-50 p-5 ">
                    <section class=' col-span-full w-full h-full flex flex-col content start'>
                        <animated.h1 style={props} class='w-1/2 py-1 font-medium text-6xl md:text-8xl' >Sean|Fay</animated.h1>
                        <ul>
                            <animated.li style={props} class='py-1 text-xs md:text-sm'>multi-diciplinary/</animated.li>
                            <animated.li style={props} class='py-1 text-xs md:text-sm'>UI/UX designer/</animated.li>
                            <animated.li style={props} class='py-1 text-xs md:text-sm'>web developer/</animated.li>
                        </ul>
                    </section>
                </nav>
                <Home className='z-50' />
                {/* <div class="fixed -z-50 left-0 top-0 flex w-screen h-48 fixed overflow-hidden">
                <Background3D />
            </div> */}
            </div>
        </>
    )
}

export default Layout