//Wolgoksan
import { Canvas } from '@react-three/fiber';
import Layout from '../components/Layout';
import { Suspense } from 'react';
import Wolgoksan from '../components/model/Wolgoksan';

export default function SecondTemple() {
  return (
    <Layout backgroundImg={'assets/imgs/wolgoksan.png'} mainText="월곡산의 얼렁뚱땅 수호자 일랑이" nextPage={'/aurora'}>
      <Canvas camera={{ fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Wolgoksan />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
