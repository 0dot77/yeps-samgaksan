import Rock from '../components/model/Rock';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Wishes from '../components/model/Wishes';
import { useQuery } from 'react-query';
import { fetchWishes } from '../db/api';
import { Suspense } from 'react';
import { useState } from 'react';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.nav`
  display: none;
  position: absolute;
  z-index: 100000;
  right: 1rem;
  top: 1rem;
  font-family: MainFont;

  @media all and (max-width: 767px) {
    display: inline;
  }
  div {
    cursor: pointer;
    background-color: #005bb2;
    padding: 0.1rem 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    p {
      color: white;
      cursor: pointer;
    }
  }
`;

const heightAnimation = keyframes`
  from {
    height: 0%;
  }
  to {
    height:100%;
  }
`;

const WishContainer = styled.section`
  display: ${(props) => (props.wishShow ? 'normal' : 'none')};
  width: 100%;
  overflow-y: scroll;

  position: absolute;
  z-index: 10000;
  background: rgba(100, 100, 255, 0.5);
  backdrop-filter: blur(2px);
  filter: blur(3px);
  animation: ${heightAnimation} 2s ease forwards;
  font-family: MainFont;
`;

const Wish = styled.p`
  width: 100%;
  border: 1px solid blue;
  text-align: center;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

export default function Test() {
  const { isLoading, data } = useQuery('wishes', () => fetchWishes(), { refetchInterval: 10000 });

  const [wishShow, setWishShow] = useState(false);

  return (
    <MainContainer>
      <NavContainer>
        <div
          onClick={() => {
            setWishShow((current) => !current);
          }}
        >
          <p>{wishShow ? '소원 접기' : '소원 펼쳐보기'}</p>
        </div>
      </NavContainer>
      <WishContainer wishShow={wishShow}>
        {isLoading ? (
          <h1>소원 부르는 중</h1>
        ) : (
          Object.keys(data?.Korean).map((word, index) => {
            return <Wish key={index}>{word}</Wish>;
          })
        )}
      </WishContainer>
      <Canvas camera={{ position: [0, 0, 10], far: 50 }}>
        <ambientLight intensity={0.1} />
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
        <Rock position={[0, -7, 0]} />
        {isLoading ? null : <Wishes data={data} />}

        <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.3} />
        <Suspense fallback={true}>
          <Environment files="assets/back.hdr" background={true} />
        </Suspense>
      </Canvas>
    </MainContainer>
  );
}
