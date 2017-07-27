import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { adminRoute, loginRoute } from '../../config/routesConfig';
import LoginRoute from '../../routes/login';
import HomeRoute from '../../routes/home';
import AdminRoute from '../../routes/admin';
import NotFoundRoute from '../../routes/notFound';
import PageTransition from '../../components/PageTransition';
import '../../styles/index.css';

require('normalize.css');
require('flex.css/dist/data-flex.css');
require('lib-flexible');

class App extends Component {
  static propTypes = {
    // routes: PropTypes.object.isRequired,
    store: object.isRequired,
  }

  componentWillMount() {
    const { dispatch } = this.props.store;
    // 检查是否登录
    dispatch({ type: 'CHECK_TOKEN' });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, history } = this.props;
    const { getState } = store;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            render={({ location }) => {
              const direction = getState().appState.getIn(['oldLocation', 'pathname']) === location.pathname ? '-x' : 'x';
              return (
                <PageTransition direction={direction}>
                  <div key={location.pathname}>
                    <Switch location={location} >
                      <HomeRoute path="/home/all" store={store} location={location} />
                      <LoginRoute path={loginRoute.path} store={store} location={location} />
                      <AdminRoute path={adminRoute.path} store={store} location={location} />
                      <NotFoundRoute />
                    </Switch>
                  </div>
                </PageTransition>
              );
            }}
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

// {...location.pathname.indexOf('login') !== -1 ? { direction: 'top' } : {}}

// <div>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to={loginRoute.path}>Login</Link></li>
//               <li><Link to={personalRoute.path}>Personal</Link></li>
//               <li><Link to="/mrlyj">Not Found</Link></li>
//             </ul>
//             <hr />
//             <Switch>
//               <Route exact path="/" component={Header} />
//               <LoginRoute path={loginRoute.path} store={store} />
//               <PersonalRoute path={personalRoute.path} store={store} />
//               <Route render={({ match }) => (
//                 <SceneTransition>
//                   <h1>Not Found</h1>
//                 </SceneTransition>
//               )} />
//             </Switch>
//           </div>
