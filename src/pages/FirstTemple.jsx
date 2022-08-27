//Rlatpgml

import { Canvas } from '@react-three/fiber';
import Layout from '../components/Layout';
import { Suspense } from 'react';
import Rlatpgml from '../components/model/Rlatpgml';

export default function FirstTemple() {
  return (
    <Layout backgroundImg={'assets/imgs/rlatpgml430.jpeg'} mainText="사람들을 위한 잔잔한 힐링 파도 신">
      <Canvas camera={{ fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Rlatpgml />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
