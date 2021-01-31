// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Reset from './views/Reset';
import ResetPassword from './views/ResetPassword';

// Import Context
import Context from  './Context';

const { ShowPasswordProvider } = Context;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ShowPasswordProvider>
          <Route path="/" exact component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/reset" component={ ResetPassword } />
          <Route path="/reset-password" component={ Reset } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;