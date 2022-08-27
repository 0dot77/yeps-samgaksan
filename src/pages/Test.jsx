import Rock from '../components/model/Rock';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Wishes from '../components/model/Wishes';
import { useQuery } from 'react-query';
import { fetchWishes } from '../db/api';
import { Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.nav`
  display: none;
  position: absolute;
  top: 1rem;
  right: 0;
  margin-right: 1rem;
  font-family: MainFont;
  z-index: 100000;
  width: 100%;
  @media all and (max-width: 1023px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ProgramDetail = styled.div`
  display: ${(props) => (props.programShow ? 'block' : 'none')};
  flex-direction: column;

  width: 50%;
  background: linear-gradient(90deg, rgba(100, 100, 255, 1) 0%, rgba(0, 0, 255, 0.01) 200%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  p {
    &:first-child {
      font-size: 1.25rem;
    }
    padding: 0rem 1rem;
    color: white;
    font-size: 0.75rem;
  }

  div:nth-child(2) {
    padding: 0rem 0.5rem;
    .first {
      width: 100%;
      text-align: center;
      font-size: 0.75rem;
      color: hotpink;
      text-decoration: none;
      display: block;
    }
  }
`;

const ProgramNav = styled.div`
  cursor: pointer;
  width: 50px;
  background-color: #005bb2;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: ${(props) => (props.wishShow ? 'none' : 'block')};
  align-items: center;

  p,
  span {
    text-align: center;
    color: white;
    word-break: break-all;
    cursor: pointer;
  }
  svg {
    color: white;
  }
`;

const WishNav = styled.div`
  cursor: pointer;
  width: 50px;
  margin-left: 1rem;
  background-color: #005bb2;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  align-items: center;
  p {
    text-align: center;
    color: white;
    word-break: break-all;
    cursor: pointer;
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
  const [programShow, setProgramShow] = useState(false);
  return (
    <MainContainer>
      <NavContainer>
        <ProgramDetail programShow={programShow}>
          <div>
            <p>신당 줌 인 &#40;ZOOM-IN&#41;?</p>
            <p>우리 동네에 살고 있는 수호신을 함께 찾아보는 프로그램</p>
          </div>
          <div>
            <Link to="/rlatogml430" className="first">
              사람들을 위한 잔잔한 힐링 파도 신
            </Link>
            <Link to="/wolgoksan" className="first">
              월곡산의 얼렁뚱땅 수호자 일랑이
            </Link>
            <Link to="/aurora" className="first">
              거리에 떠도는 사념을 먹는 신
            </Link>
            <Link to="/nadlemok" className="first">
              파란참새 나들목이입니다 수상스키 타는 사람 밀어 넘어뜨리는 걸 좋아합니다
            </Link>
          </div>
        </ProgramDetail>
        <ProgramNav
          wishShow={wishShow}
          onClick={() => {
            setProgramShow((current) => !current);
          }}
        >
          {programShow ? (
            <>
              <p>신당 줌</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                />
              </svg>
              <span>아웃</span>
            </>
          ) : (
            <>
              <p>신당 줌</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
              <span>인</span>
            </>
          )}
        </ProgramNav>
        <WishNav
          onClick={() => {
            setWishShow((current) => !current);
          }}
        >
          <p>{wishShow ? '소원 접기' : '소원 펼쳐보기'}</p>
        </WishNav>
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
