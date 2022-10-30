import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Background3D from './components/Background3D';
import Footer from './components/Footer';

function App() {
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
      <main class='grid grid-flow-col gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 w-full h-full'>
        <section class='text-white/50 col-span-full w-full h-full flex flex-col content start'>
          <p class='py-1 text-left p-0 hover:px-2 hover:text-white transition-all ease-in-out duration-200'>I N F O</p>
          <p class='py-1 text-left p-0 hover:px-2 hover:text-white transition-all ease-in-out duration-200'>W O R K S</p>
          <p class='py-1 text-left p-0 hover:px-2 hover:text-white transition-all ease-in-out duration-200'>G A L L E R Y</p>
          <p class='py-1 text-left p-0 hover:px-2 hover:text-white transition-all ease-in-out duration-200'>C O N T A C T</p>
          <animated.h1 style={props} class='w-1/2 py-1 text-white font-medium text-5xl md:text-6xl' >Sean|Fay</animated.h1>
          <p class='py-1 text-white/75 text-xs md:text-sm' >
            multi-diciplinary/<br />UI/UX designer/<br />web developer/
          </p>
        </section>

        <section class='col-span-full md:col-span-2'>
          <h2></h2>
        </section>
      </main>
      <Background3D />
    </>
  );
}

export default App;
