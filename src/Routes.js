// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

// Import views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Reset from './views/Reset';
import ResetPassword from './views/ResetPassword';
import Active from './views/Active';
import MovieDetails from './views/MovieDetails';

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
          <Route path="/active" component={ Active } />
          <Route path="/details/:id" component={ MovieDetails } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;