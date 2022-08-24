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
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
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
`;

export default function Layout({ children, backgroundImg }) {
  return (
    <MainContainer>
      <Header>
        <p>신당 ZOOM-IN</p>
      </Header>
      <SecondBackgroundImage backgroundImg={backgroundImg} />
      <BackgroundImageContainer backgroundImg={backgroundImg} />
      {children}
      <Footer>
        <p>움직이는 나만의 수호신 만들기</p>
      </Footer>
    </MainContainer>
  );
}
