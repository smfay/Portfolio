import React, { useRef } from 'react';
import noise from '../assets/noise.jpg'
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars, OrthographicCamera, PerspectiveCamera, OrbitControls, useTexture, softShadows, MeshWobbleMaterial, MeshRefractionMaterial } from '@react-three/drei'


const Background3D = () => {
    const SpinningMesh = ({ position, args }) => {
        const mesh = useRef(null);
        const textures = useTexture(noise)
        // useFrame(() => (mesh.current.rotation.x += 0.001));
        return (
            <mesh position={position} ref={mesh} >
                <torusKnotGeometry attach='geometry' args={args} />
                <MeshWobbleMaterial attach='material' metalness={0} roughness={1} color='rgb(220,220,220)' speed={0.5} factor={0.2} />
            </mesh>
        )
    }

    return (
        <Canvas >
            <PerspectiveCamera makeDefault fov={25} position={[0, 0, 50]} />
            <fog attach="fog" args={["rgb(220,220,220)", 30, 80]} />
            <directionalLight
                position={[10, 0, 0]}
                intensity={0.8}
                color='green'
            />
            <ambientLight intensity={0.2} color='blue' />
            <pointLight position={[0, 0, 0]} intensity={1} color='red' />

            <SpinningMesh position={[0, 0, -10]} args={[20, 3, 700, 20]} />
        </Canvas>
    )
}

export default Background3D