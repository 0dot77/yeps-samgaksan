import { useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Rock(props) {
  const ref = useRef(null);

  const model = useLoader(GLTFLoader, 'assets/rock.glb');
  return (
    <Suspense fallback={null}>
      <primitive {...props} ref={ref} object={model.scene} />
    </Suspense>
  );
}
