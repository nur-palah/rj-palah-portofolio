import React from 'react';
import ReactDOM from 'react-dom/client';
import DocumentMeta from 'react-document-meta';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './component/error-page';
import App from './App'
import Jubescoot from './page/jubescoot';
import Anisa from './page/anisa';
import PramukaCipanas from './page/pramukacipanas';
import InvitOnline from './page/invitonline';
import PalahCo from './page/palahco';
import KoicaBPK from './page/koicabpk';
import KoicaPE from './page/koicape';

const meta = {
  title: 'Beranda'

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    title: 'sdasda'
  }, {
    path: "/project/jubescoot",
    element: <Jubescoot />,
  }, {
    path: "/project/pramuka-cipanas",
    element: <PramukaCipanas />,
  }, {
    path: "/project/invit-online",
    element: <InvitOnline />,
  }, {
    path: "/project/palah-co",
    element: <PalahCo />,
  }, {
    path: "/project/anisa",
    element: <Anisa />,
  }, {
    path: "/project/koica-berbagi-peran-ketangguhan",
    element: <KoicaBPK />,
  }, {
    path: "/project/koica-prosedur-evakuasi",
    element: <KoicaPE />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

