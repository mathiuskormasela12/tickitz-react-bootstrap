// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import views
import Home from './views/Home';
import Login from './views/Login';

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
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;