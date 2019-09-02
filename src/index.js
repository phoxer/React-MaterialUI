import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GlobalData from './GlobalData';
import TopBar from './TopBar';
import MenuBar from './MenuBar';
import ModulesRouter from './Modules';


const DashBoard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GlobalData>
      <TopBar setMenuOpen={setMenuOpen} />
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ModulesRouter />
    </GlobalData>
  );
};

ReactDOM.render(<DashBoard />, document.getElementById('root'));
