import React, { Fragment, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Settings, People } from '@material-ui/icons';
import TopBar from './TopBar';
import NavMenu from '../Components/NavMenu';
import AvtBox from '../Components/User/AvtBox';
import { LoadingDialog } from '../Components/Dialogs';
import { isUndefined } from 'lodash';

const FetchSamples = lazy(() => import('./FetchSamples'));
const DialogSamples = lazy(() => import('./DialogSamples'));
const FormSample = lazy(() => import('./FormSamples'));

const modules = [
  { title: 'Fetch Samples', component: FetchSamples, path: ['/','/fetch-samples/'], exact: true },
  {
    title: 'Dialogs Samples',
    component: DialogSamples,
    path: '/dialogs-samples/',
    exact: true
  },
  {
    title: 'React Hook Sample',
    component: FormSample,
    path: '/form-sample/',
    exact: true
  }
];

export const NavMainMenu = [
  {
    title: 'ADMIN',
    list: [
      {
        title: 'USERS',
        icon: Settings,
        list: [
          { title: 'menú Option 1', data: { path: 'fuck-this-works1' } },
          { title: 'menú Option 2', data: { path: 'fuck-this-works2' } }
        ]
      },
      { title: 'USER DATA', icon: People, data: { user: { id: 1 } } },
      {
        title: 'OTHER ITEM',
        list: [
          { title: 'menú Option 3', data: { path: 'fuck-this-works1' } },
          {
            title: 'Menú Option 4',
            icon: Settings,
            data: { path: 'fuck-this-works2' }
          }
        ]
      }
    ]
  },
  {
    list: [
      { title: 'FETCH SAMPLE', data: { path: '/fetch-samples/' } },
      { title: 'DIALOGS SAMPLE', data: { path: '/dialogs-samples/' } },
      { title: 'FORM SAMPLE', data: { path: '/form-sample/' } }
    ]
  }
];

const ModulesRouter = () => {
  return (
    <Switch>
      <Suspense fallback={<LoadingDialog open={true} />}>
        {modules.map((module, index) => {
          return (
            <Route key={`mod${index}`} {...module} />
          );
        })}
      </Suspense>
    </Switch>
  );
};

const DashBoard = ({ history }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMainMenuClick = data => {
    console.log(data);
    const { path } = data;
    if (!isUndefined(path)) {
      history.push(path);
      setMenuOpen(false);
    }
  };

  return (
    <Fragment>
      <TopBar setMenuOpen={setMenuOpen} />
      <NavMenu
        data={NavMainMenu}
        open={menuOpen}
        onClose={setMenuOpen}
        onItemsClick={onMainMenuClick}
        styles={{ top: '58px' }}
      >
        <AvtBox
          name="Roberto Baglieri"
          avatar="https://cdn.vox-cdn.com/thumbor/N1xYVnuB0CP4za8T2RVYpCTvjSc=/0x0:1024x576/1200x800/filters:focal(431x207:593x369)/cdn.vox-cdn.com/uploads/chorus_image/image/63947557/spongebob_rainbow_meme_video_16x9.0.jpg"
          email="roberto.baglieri@gmail.com"
          text="Application Development Senior Analyst Level 10"
        />
      </NavMenu>
      <ModulesRouter />
    </Fragment>
  );
};

const MainApplication = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={DashBoard} />
    </BrowserRouter>
  );
};

export default MainApplication;
