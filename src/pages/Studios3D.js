import React from 'react'
import { SpinningMesh } from '../animations/SpinningMesh'
import '../styles/_studios3D.scss'
import { motion } from 'framer-motion'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from 'drei'
import { PageTransition } from '../animations/PageTransition'
import { Link } from 'react-router-dom'

softShadows()

export const Studios3D = ({ transition }) => {
  return (
    <>
      <motion.section exit={{ opacity: 0 }} transition={transition}>
        <PageTransition />
        <section className='three__container'>
          <h2 className='three__container-header'>Work in progress</h2>
          <Link className='three__container-link' to='/studios'>
            Back to studios
          </Link>
          <Canvas
            shadowMap
            colorManagement
            camera={{ position: [-5, 2, 10], fov: 60 }}
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={0.5}
              shadow-mapSize-height={1024}
              shadow-mapSize-width={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.1} />
            <pointLight position={[0, -10, 0]} intensity={0.2} />

            <group>
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
              >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
              </mesh>
              <SpinningMesh
                position={[0, 1, 0]}
                args={[3, 2, 1]}
                color='lightblue'
                speed={2}
              />
              <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
              <SpinningMesh position={[5, 1, -2]} color='pink' speed={6} />
            </group>

            <OrbitControls />
          </Canvas>
        </section>
      </motion.section>
    </>
  )
}
