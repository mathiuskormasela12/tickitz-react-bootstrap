// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

// Import views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Reset from './views/Reset';
import ResetPassword from './views/ResetPassword';

// Import store
import store from './redux/store'

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/reset" component={ ResetPassword } />
          <Route path="/reset-password" component={ Reset } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;