import React, { Fragment,useState } from 'react';
import ReactDOM from 'react-dom';
import GlobalData from './GlobalData';
import TopBar from './TopBar';
import {NavMenu,NavList} from './Components/NavMenu';
import ModulesRouter,{NavMainMenu} from './Modules';

const DashBoard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMainMenuClick = data =>{
    console.log(data)
  }

  return (<Fragment>
    <TopBar setMenuOpen={setMenuOpen} />
    <NavMenu data={NavMainMenu} open={menuOpen} onClose={setMenuOpen} onItemsClick={onMainMenuClick} styles={{top:"60px"}}>
      <NavList list={[{title:"LOG OUT",data:{logOut:true}}]} onItemsClick={onMainMenuClick} />
    </NavMenu>
    <ModulesRouter />
  </Fragment>)
}


const App = () => {
  return (
    <GlobalData>
      <DashBoard />
    </GlobalData>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
