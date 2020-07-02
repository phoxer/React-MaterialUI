import React from 'react';
import ReactDOM from 'react-dom';
import GlobalData from './GlobalData';
import MainApplication from './Modules';

const App = () => {
  return (<React.StrictMode>
    <GlobalData>
      <MainApplication />
    </GlobalData>
  </React.StrictMode>);
};

ReactDOM.render(<App />, document.getElementById('root'));
