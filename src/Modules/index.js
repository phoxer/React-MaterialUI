import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchSamples from './FetchSamples';
import { Settings,People } from '@material-ui/icons';

const modules = [
  { title: 'Fetch Samples', component: FetchSamples, path: '/fetch-samples/' },
];

export const NavMainMenu = [
  {title:"ADMIN",list:[
    {title:"USERS",icon:Settings,list:[
      { title: 'menú Option 1', data: {path:'fuck-this-works1'} },
      { title: 'menú Option 2', data: {path:'fuck-this-works2'} },
    ]},
    {title:"USER DATA",icon:People,data:{user:{id:1}}},
    {title:"OTHER ITEM",list:[
      { title: 'menú Option 3', data: {path:'fuck-this-works1'} },
      { title: 'Menú Option 4',icon:Settings, data: {path:'fuck-this-works2'} },
    ]},
  ]},
  {list:[
    {title:"USER DATA",data:{user:{id:1}}},
    {title:"OTHER ITEM",data:{some_data:"ok"}},
  ]}
];

const ModulesRouter = () => {
  return (
    <Router>
      <Switch>
        {modules.map((module, index) => {
          const { path, component } = module;
          return (
            <Route
              key={`mod${index}`}
              exact
              path={path}
              component={component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default ModulesRouter;
