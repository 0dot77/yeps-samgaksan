//aurora

import { Canvas } from '@react-three/fiber';
import Layout from '../components/Layout';
import { Suspense } from 'react';
import Aurora from '../components/model/Aurora';
export default function ThirdTemple() {
  return (
    <Layout backgroundImg={'assets/imgs/aurora.png'} mainText="거리에 떠도는 사념을 먹는 신">
      <Canvas camera={{ fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Aurora />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
