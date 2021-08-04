import React, { lazy, Suspense } from "react";
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { helpers } from '../helpers/common';

const SearchPage = lazy(() => import('../pages/search/index'));
const PopularPage = lazy(() => import('../pages/popular/index'));
const LoginPage = lazy(() => import('../pages/login/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));

const PrivateRouter = ({ children, ...rest }) => {
  const auth = helpers.isAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) => auth 
              ? ( children )
              : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
            }
    />
  )
}

const IsLoginRouter = ({ children, ...rest }) => {
  const auth = helpers.isAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) => auth 
              ? (<Redirect to={{ pathname: "/", state: { from: location } }} />)
              : (children)
            }
    />
  )
}

const RouterMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>

          <PrivateRouter path="/" exact>
            <SearchPage/>
          </PrivateRouter>
          <PrivateRouter path="/search">
            <SearchPage/>
          </PrivateRouter>
          <PrivateRouter path="/popular-movie">
            <PopularPage/>
          </PrivateRouter>
          <PrivateRouter path="/up-coming">
            <UpcomingPage/>
          </PrivateRouter>
          <PrivateRouter path="/movie-detail/:slug~:id">
            <DetailPage/>
          </PrivateRouter>

          <IsLoginRouter path="/login">
            <LoginPage/>
          </IsLoginRouter>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouterMovie);