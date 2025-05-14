import { BrowserRouter, Routes, Route } from 'react-router';

import PageMeta from '@/components/common/PageMeta';
import './App.css';
import { publicRoutes, privateRoutes } from '@/routes';
import { MainLayout, DashboardLayout } from '@/layouts';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <PageMeta title='TechZone' description='thế giới công nghệ' />
      <div className='app'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: React.ComponentType<{ children: React.ReactNode }> =
              MainLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: React.ComponentType<{ children: React.ReactNode }> =
              DashboardLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
