import { Canvas } from '@react-three/fiber';
import MainModel from '../components/model/MainModel';
import Layout from '../components/Layout';
import { Suspense } from 'react';

export default function ThirdTemple() {
  return (
    <Layout backgroundImg={'assets/imgs/web-temple-main.JPG'}>
      <Canvas camera={{ fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <MainModel />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
