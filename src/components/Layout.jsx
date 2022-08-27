import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImg});
  position: absolute;
  z-index: -1;
  clip-path: circle(300px at center);
  @media (max-width: 575px) {
    clip-path: circle(150px at center);
  }
`;

const SecondBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImg});
  position: absolute;
  z-index: -2;
  filter: grayscale(80%);
  border: 30px dotted black;
  @media (max-width: 575px) {
    border: 10px dotted black;
  }
`;

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: hotpink;
  font-style: italic;
  font-weight: bold;
  z-index: 10;
  font-size: 5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;

  p {
    margin: 0;
    filter: drop-shadow(16px 16px 10px black);
  }

  @media (max-width: 575px) {
    height: 10rem;
    p {
      font-size: 2.5rem;
    }
  }
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  color: hotpink;
  font-style: italic;
  font-weight: bold;
  z-index: 10;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  p {
    font-size: ${(props) => props.footerTabletFontSize};
    margin: 0;
    filter: drop-shadow(16px 16px 10px black);
  }
  a {
    color: hotpink;
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    svg {
      height: 100%;
    }
  }
  @media (max-width: 575px) {
    p {
      font-size: ${(props) => props.footerFontSize};
    }
  }
`;

export default function Layout({
  children,
  backgroundImg,
  mainText = '움직이는 나만의 수호신 만들기',
  footerFontSize = '1.5rem',
  nextPage,
  footerTabletFontSize = '4rem',
}) {
  return (
    <MainContainer>
      <Header>
        <p>신당 ZOOM-IN</p>
      </Header>
      <SecondBackgroundImage backgroundImg={backgroundImg} />
      <BackgroundImageContainer backgroundImg={backgroundImg} />
      {children}
      <Footer footerFontSize={footerFontSize} footerTabletFontSize={footerTabletFontSize}>
        <Link to={`${nextPage}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <p>{mainText}</p>
      </Footer>
    </MainContainer>
  );
}
