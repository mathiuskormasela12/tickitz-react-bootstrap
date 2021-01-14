// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import views
import Home from './views/Home';
import Login from './views/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;