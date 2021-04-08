// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import ProtectedRoutes from './ProtectedRoutes'
import {PersistGate} from 'redux-persist/integration/react'

// Import views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Reset from './views/Reset';
import ResetPassword from './views/ResetPassword';
import Active from './views/Active';
import MovieDetails from './views/MovieDetails';
import Order from './views/Order';
import Payments from './views/Payments';
import Ticket from './views/Ticket';
import Profile from './views/Profile';
import Movies from './views/Movies';

// Import store
import persistedStore from './redux/store'

function Routes() {
  const {store, persistor} = persistedStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/reset" component={ ResetPassword } />
            <Route path="/reset-password" component={ Reset } />
            <Route path="/active" component={ Active } />
            <Route path="/movies" component={Movies} />
            <ProtectedRoutes path="/profile" protectedComponent={ Profile } />
            <ProtectedRoutes path="/details/:id" protectedComponent={ MovieDetails } />
            <ProtectedRoutes path="/order" protectedComponent={ Order } />
            <ProtectedRoutes path="/payment" protectedComponent={ Payments } />
            <ProtectedRoutes path="/ticket" protectedComponent={ Ticket } />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Routes;