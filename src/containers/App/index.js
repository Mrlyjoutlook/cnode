import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { homeRoute, adminRoute, loginRoute, topicRoute } from '../../config/routesConfig';
import LoginRoute from '../../routes/login';
import HomeRoute from '../../routes/home';
import TopicRoute from '../../routes/topic';
import AdminRoute from '../../routes/admin';
import NotFoundRoute from '../../routes/notFound';
import PageTransition from '../../components/PageTransition';
import '../../styles/index.css';
import { saveoldLocation } from '../../modules/appActions';
require('normalize.css');
require('flex.css/dist/data-flex.css');
require('lib-flexible');
import Routes from '../../config/routesConfig';

class App extends Component {
  static propTypes = {
    // routes: PropTypes.object.isRequired,
    store: object.isRequired,
  }

  state = { direction: false }

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
            render={({ location, history }) => {
              const animation = location.pathname.indexOf(getState().appState.getIn(['oldLocation', 'pathname']).split('/')[1]) === -1;
              const direction = history.action === 'POP' ? '-x' : 'x';
              return (
                <PageTransition direction={direction} animation={animation}>
                  <div key={location.pathname}>
                    <Switch location={location} >
                      <HomeRoute path={homeRoute.path} store={store} location={location} />
                      <LoginRoute path={loginRoute.path} store={store} location={location} />
                      <TopicRoute path={topicRoute.path} store={store} location={location} />
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
