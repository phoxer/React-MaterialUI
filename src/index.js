import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import GlobalData from './GlobalData';
import MainApplication from './Modules';

const App = () => {
  return (
    <GlobalData>
      <MainApplication />
    </GlobalData>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
