import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSpring, useTrail, useSpringRef, useChain, useTransition, animated } from 'react-spring';
import Background3D from '../components/Background3D';

const Layout = () => {
    const props = useSpring({
        from: {
            translateX: 200,
            opacity: 0,
        },
        to: {
            translateX: 0,
            opacity: 1,
        },
        delay: 1000,
        config: {
            precision: 0.0001,
            bounce: 1,
            tension: 60,
        },
    })

    return (
        <>
            <nav class="fixed z-50 p-5">
                <section class="text-white/50">
                    <ul class="flex flex-col md:flex-row md:space-x-16 w-full" >
                        <li class='py-1 text-left p-0 hover:px-1 hover:text-white transition-all ease-in-out duration-200' ><Link to="/info">I N F O</Link></li>
                        <li class='py-1 text-left p-0 hover:px-1 hover:text-white transition-all ease-in-out duration-200' ><Link to="/">H O M E</Link></li>
                        <li class='py-1 text-left p-0 hover:px-1 hover:text-white transition-all ease-in-out duration-200' ><Link to="/works">W O R K S</Link></li>
                        <li class='py-1 text-left p-0 hover:px-1 hover:text-white transition-all ease-in-out duration-200' ><Link to="/gallery">G A L L E R Y</Link></li>
                        <li class='py-1 text-left p-0 hover:px-1 hover:text-white transition-all ease-in-out duration-200' ><Link to="/contact">C O N T A C T</Link></li>
                    </ul>
                </section>
                <section class='text-white/50 col-span-full w-full h-full flex flex-col content start overflow-hidden'>
                    <animated.h1 style={props} class='w-1/2 py-1 text-white font-medium text-5xl md:text-6xl' >Sean|Fay</animated.h1>
                    <ul>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>multi-diciplinary/</animated.li>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>UI/UX designer/</animated.li>
                        <animated.li style={props} class='py-1 text-white/75 text-xs md:text-sm'>web developer/</animated.li>
                    </ul>
                </section>
            </nav>
            <Background3D />
            <Outlet />
        </>
    )
}

export default Layout