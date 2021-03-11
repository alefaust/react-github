import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
