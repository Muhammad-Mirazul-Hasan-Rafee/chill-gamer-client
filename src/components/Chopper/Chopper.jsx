import { useGLTF } from '@react-three/drei';
import React from 'react';

const Chopper = () => {
    const {nodes} = useGLTF('../../assets/ah-1w_supercobra_attack_helicopter/scene.gltf');
    return (
        <div>
           
        </div>
    );
};

export default Chopper;