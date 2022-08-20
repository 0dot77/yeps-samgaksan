import Rock from '../components/model/Rock';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export default function Test() {
  return (
    <MainContainer>
      <Canvas camera={{ position: [0, 0, 10], far: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight
          intensity={2}
          position={[40, 50, 50]}
          shadow-bias={-0.00005}
          penumbra={1}
          angle={Math.PI / 6}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <Rock position={[0, -5, 0]} />
        <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.3} />
        <Environment files="assets/back.hdr" background={true} />
      </Canvas>
    </MainContainer>
  );
}
