import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { homeRoute, adminRoute, loginRoute, topicRoute, myInfoRoute } from '../../config/routesConfig';
import LoginRoute from '../../routes/login';
import HomeRoute from '../../routes/home';
import TopicRoute from '../../routes/topic';
import MyInfoRoute from '../../routes/myInfo';
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

  state = { direction: false }

  componentWillMount() {
    const { dispatch } = this.props.store;
    // 检查是否登录
    dispatch({ type: 'CHECK_TOKEN' });
  }

  shouldComponentUpdate() {
    return false;
  }

  oldHistory = {
    pathname: '',
    hash: '',
    search: '',
    state: undefined,
  }

  render() {
    const { store, history } = this.props;
    const { getState } = store;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            render={({ location, history }) => {
              const animation = location.pathname.split('/')[1] !== this.oldHistory.pathname.split('/')[1];
              const direction = history.action === 'POP' ? '-x' : 'x';
              this.oldHistory = location;
              return (
                <PageTransition direction={direction} animation={animation}>
                  <div key={location.pathname}>
                    <Switch location={location}>
                      <HomeRoute path={homeRoute.path} store={store} />
                      <LoginRoute path={loginRoute.path} store={store} />
                      <TopicRoute path={topicRoute.path} store={store} />
                      <MyInfoRoute path={myInfoRoute.path} store={store} />
                      <AdminRoute path={adminRoute.path} store={store} />
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
