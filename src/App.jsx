import Router from './Router';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body {
  width:100vw;
  height:100vh;
  margin:0;
  overflow: hidden;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
