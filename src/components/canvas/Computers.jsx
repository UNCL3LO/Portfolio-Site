import { Suspense, useEffect, useState } from "react";
import { Canvas, } from "@react-three/fiber";
import {Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { HemisphereLight, PointLight } from "three";
const Computers = () => {

 
 

  
  return (
 <mesh>
  <hemisphereLight intensity={1} groundColor="blue"/>
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

  <pointLight intensity={2}/>
    <primitive
     
      scale={2}
 
     
    
    />
    </mesh>

  );
};

const ComputerCanvas =() => {
  return(
    <Canvas
frameloop="demand"
    camera={{position:[20,3,5], fov:50}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI /2}
        />
        
        <Computers/>
        
      </Suspense>
      <Preload all/>
     

    </Canvas>
  )

}
export default ComputerCanvas