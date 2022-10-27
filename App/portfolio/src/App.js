import React, { useRef } from 'react';
import './App.scss';
import noise from './assets/noise.jpg'
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars, OrthographicCamera, PerspectiveCamera, OrbitControls, useTexture, softShadows, MeshWobbleMaterial, MeshRefractionMaterial } from '@react-three/drei'

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  const textures = useTexture({
    map: noise,
    displacementMap: noise
  })
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.001));
  return (
    <mesh position={position} ref={mesh} castShadow receiveShadow >
      <torusKnotGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial attach='material' metalness={0} roughness={1} color='ORANGE' speed={1} factor={0.5} />
    </mesh>
  )
}

const MiddleMesh = ({ position, args }) => {
  const mesh = useRef(null);
  const textures = useTexture({
    map: noise,
    displacementMap: noise
  })
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.001));
  return (
    <mesh position={position} ref={mesh} castShadow receiveShadow >
      <diamondGeometry attach='geometry' args={args} />
      <MeshRefractionMaterial color={'orange'} envMap={noise} fresnel={1} abberationStrength={1} />
    </mesh>
  )
}

function App() {
  return (
    <>
      <div id='box'>
        <h1 id='title' >Sean|Fay</h1>
        <p id='subtitle'>
          Multi-diciplinary<br />designer/<br />web developer
        </p>
      </div>



      <Canvas id='render'>
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 50]} />
        <fog attach="fog" args={["BLACK", 15, 80]} />
        <directionalLight
          castShadow
          position={[10, 0, 0]}
          intensity={0.2}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={100}
          shadowCameraLeft={10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={10}
        />
        <ambientLight intensity={3} color='GREEN' />
        <pointLight position={[0, 0, 0]} intensity={1} color='green' />
        <pointLight position={[2, 7, 12]} intensity={0.1} color='yellow' />
        <pointLight position={[5, -20, 12]} intensity={0.1} color='red' />
        <pointLight position={[5, 10, 12]} intensity={10} color='blue' />
        <SpinningMesh position={[0, 0, -10]} args={[20, 1, 800, 50]} />
      </Canvas>
    </>
  );
}

export default App;
