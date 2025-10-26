import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Scene(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  const chopperRef = useRef();
   const fanRef = useRef();
  

     // প্রতি frame এ fan ঘোরানো
  useFrame((state, delta) => {
    if (fanRef.current) {
      fanRef.current.rotation.y += delta * 15; // speed control
    }
  });

  return (
    
    <group {...props} dispose={null}>
      <group ref={chopperRef} scale={0.7} position={[-0, 2, 0]}
  rotation={[0, Math.PI / 12, 0]}>
        <mesh geometry={nodes.mesh0datdesirefxme__grill_0.geometry} material={materials.grill} />
        <mesh geometry={nodes['mesh1datdesirefxme__01_-_Default_0'].geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes['mesh2datdesirefxme__01_-_Default_0'].geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes['mesh3datdesirefxme__01_-_Default_0'].geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes.mesh4datdesirefxme__Glass_Simple_0.geometry} material={materials.Glass_Simple} />
        <mesh geometry={nodes.mesh5datdesirefxme__hull_02_0.geometry} material={materials.hull_02} />
        <mesh geometry={nodes.mesh6datdesirefxme__Glass_Simple_0.geometry} material={materials.Glass_Simple_0} />
        <mesh geometry={nodes.mesh7datdesirefxme__hull_02_0.geometry} material={materials.hull_02_0} />
        <mesh geometry={nodes.mesh8datdesirefxme__hull_02_0.geometry} material={materials.hull_02_1} />
        <mesh geometry={nodes.mesh9datdesirefxme__hull_02_0.geometry} material={materials.hull_02_2} />
        <mesh geometry={nodes.mesh10datdesirefxme__hull_01_0.geometry} material={materials.hull_01} />
        <mesh geometry={nodes.mesh11datdesirefxme__hull_02_0.geometry} material={materials.hull_02_3} />
        <mesh geometry={nodes.mesh12datdesirefxme__hull_02_0.geometry} material={materials.hull_02_4} />
        <mesh geometry={nodes.mesh13datdesirefxme__interior_0.geometry} material={materials.interior} />
        <mesh geometry={nodes.mesh14datdesirefxme__hull_02_0.geometry} material={materials.hull_02_5} />
        <mesh geometry={nodes.mesh15datdesirefxme__hull_02_0.geometry} material={materials.hull_02_6} />
        <mesh geometry={nodes.mesh16datdesirefxme__hull_02_0.geometry} material={materials.hull_02_7} />
        <mesh geometry={nodes.mesh17datdesirefxme__Glass_Simple_0.geometry} material={materials.Glass_Simple_1} />
        <mesh geometry={nodes.mesh18datdesirefxme__hull_02_0.geometry} material={materials.hull_02_8} />
        <mesh geometry={nodes.mesh19datdesirefxme__hull_01_0.geometry} material={materials.hull_01_0} />
        <mesh geometry={nodes.mesh20datdesirefxme__hull_02_0.geometry} material={materials.hull_02_9} />
        <mesh geometry={nodes.mesh21datdesirefxme__rotor_0.geometry} material={materials.rotor} />
        <mesh geometry={nodes.mesh22datdesirefxme__rotor_0.geometry} material={materials.rotor_0} />
        <mesh geometry={nodes.mesh23datdesirefxme__rotor_0.geometry} material={materials.rotor_1} />
        <mesh geometry={nodes.mesh24datdesirefxme__rotor_0.geometry} material={materials.rotor_2} />
        <mesh geometry={nodes.mesh25datdesirefxme__rotor_0.geometry} material={materials.rotor_3} />
        <mesh geometry={nodes.mesh26datdesirefxme__rotor_0.geometry} material={materials.rotor_4} />
        <mesh geometry={nodes.mesh27datdesirefxme__rotor_0.geometry} material={materials.rotor_5} />
        <mesh geometry={nodes.mesh28datdesirefxme__rotor_0.geometry} material={materials.rotor_6} />
        <mesh geometry={nodes.mesh29datdesirefxme__rotor_0.geometry} material={materials.rotor_7} />
        <mesh geometry={nodes.mesh30datdesirefxme__rotor_0.geometry} material={materials.rotor_8} />
        <mesh geometry={nodes.mesh31datdesirefxme__rotor_0.geometry} material={materials.rotor_9} />
        <mesh geometry={nodes.mesh32datdesirefxme__rotor_0.geometry} material={materials.rotor_10} />
        <mesh geometry={nodes.mesh33datdesirefxme__rotor_0.geometry} material={materials.rotor_11} />
        <mesh geometry={nodes.mesh34datdesirefxme__rotor_0.geometry} material={materials.rotor_12} />
        <mesh geometry={nodes.mesh36datdesirefxme__rotor_0.geometry} material={materials.rotor_13} />
        <mesh geometry={nodes.mesh37datdesirefxme__rotor_0.geometry} material={materials.rotor_14} />
        <mesh geometry={nodes.mesh38datdesirefxme__rotor_0.geometry} material={materials.rotor_15} />
        <mesh geometry={nodes.mesh39datdesirefxme__rotor_0.geometry} material={materials.rotor_16} />
        <mesh geometry={nodes.mesh40datdesirefxme__rotor_0.geometry} material={materials.rotor_17} />
        <mesh geometry={nodes.mesh41datdesirefxme__rotor_0.geometry} material={materials.rotor_18} />
        <mesh ref={fanRef}
          geometry={nodes.mesh21datdesirefxme__rotor_0.geometry}
          material={materials.rotor}/>
      </group>
    </group>
     
  )
 
}

useGLTF.preload('/scene.gltf')
