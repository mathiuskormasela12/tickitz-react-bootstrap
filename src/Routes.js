// Import all modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import views
import Home from './views/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;