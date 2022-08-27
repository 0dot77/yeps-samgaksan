import { Canvas } from '@react-three/fiber';
import Layout from '../components/Layout';
import { Suspense } from 'react';
import Nadlemok from '../components/model/Nadlemok';

export default function FourthTemple() {
  return (
    <Layout
      backgroundImg={'assets/imgs/nadlemok.jpeg'}
      mainText="파란참새 나들목이입니다 수상스키 타는 사람 밀어 넘어뜨리는 걸 좋아합니다"
      footerFontSize={'.75rem'}
      footerTabletFontSize={'2rem'}
      nextPage={'/'}
    >
      <Canvas camera={{ fov: 90 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Nadlemok />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
