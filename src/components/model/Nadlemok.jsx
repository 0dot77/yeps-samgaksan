import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function Nadlemok() {
  const group = useRef(null);
  const { scene, animations } = useGLTF('assets/models/nadlemok.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['animation_0'].play();
  });

  return <primitive ref={group} object={scene} position={[-1, -1.2, 0]} scale={[0.5, 0.5, 0.5]} />;
}
