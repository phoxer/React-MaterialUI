import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchSamples from './FetchSamples';

const modules = [
  { title: 'Fetch Samples', component: FetchSamples, path: '/fetch-samples/' },
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
