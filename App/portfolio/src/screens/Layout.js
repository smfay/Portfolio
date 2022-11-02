import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSpring, useTrail, useSprings, useChain, useTransition, animated } from 'react-spring';
import Background3D from '../components/Background3D';

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
            <nav class="fixed z-50 p-5">
                <section class="text-white/50">
                    <ul class="flex flex-col md:flex-row md:space-x-16 w-full" >
                        <animated.li style={props} class='py-1 text-left p-0 hover:text-white' ><Link to="/info">I N F O</Link></animated.li>
                        <animated.li style={props} class='py-1 text-left p-0 hover:text-white' ><Link to="/">H O M E</Link></animated.li>
                        <animated.li style={props} class='py-1 text-left p-0 hover:text-white' ><Link to="/works">W O R K S</Link></animated.li>
                        <animated.li style={props} class='py-1 text-left p-0 hover:text-white' ><Link to="/gallery">G A L L E R Y</Link></animated.li>
                        <animated.li style={props} class='py-1 text-left p-0 hover:text-white' ><Link to="/contact">C O N T A C T</Link></animated.li>
                    </ul>
                </section>
                <section class='text-white/50 col-span-full w-full h-full flex flex-col content start'>
                    <animated.h1 style={props} class='w-1/2 py-1 text-white font-medium text-4xl md:text-6xl' >Sean|Fay</animated.h1>
                    <ul>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>multi-diciplinary/</animated.li>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>UI/UX designer/</animated.li>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>web developer/</animated.li>
                    </ul>
                </section>
            </nav>
            <Outlet />
            <div class="fixed left-0 top-0 flex w-screen h-screen fixed overflow-hidden">
                <Background3D />
            </div>
        </>
    )
}

export default Layout