import React, { useRef } from 'react';
import noise from '../assets/noise.jpg'
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars, OrthographicCamera, PerspectiveCamera, OrbitControls, useTexture, softShadows, MeshWobbleMaterial, MeshRefractionMaterial } from '@react-three/drei'


const Background3D = () => {
    const SpinningMesh = ({ position, args }) => {
        const mesh = useRef(null);
        const textures = useTexture(noise)
        useFrame(() => (mesh.current.rotation.Z += 0.001));
        return (
            <mesh position={position} ref={mesh} >
                <torusKnotGeometry attach='geometry' args={args} />
                <MeshWobbleMaterial attach='material' metalness={0} roughness={1} color='ORANGE' speed={0.8} factor={0.2} />
            </mesh>
        )
    }

    return (
        <Canvas class='w-full h-full'>
            <PerspectiveCamera makeDefault fov={5} position={[0, 0, 50]} />
            <fog attach="fog" args={["BLACK", 15, 80]} />
            <directionalLight
                position={[10, 0, 0]}
                intensity={0.8}
            />
            <ambientLight intensity={2} color='red' />
            <pointLight position={[0, 0, 0]} intensity={1} color='green' />
            <pointLight position={[2, 7, 12]} intensity={0.1} color='yellow' />
            <pointLight position={[5, -20, 12]} intensity={0.1} color='red' />
            <pointLight position={[5, 10, 12]} intensity={10} color='blue' />
            <SpinningMesh position={[20, 0, -10]} args={[20, 2.5, 700, 20]} />
        </Canvas>
    )
}

export default Background3D