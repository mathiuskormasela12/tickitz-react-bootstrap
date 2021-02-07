// Import all modules
import { createContext, useState } from 'react';

function Context() {
  const AppContext = createContext();

  const ShowPasswordProvider = props => {
    const [show, setShowPassword] = useState(false);

    const showPassword = () => setShowPassword(currentState => !currentState);

    const state = { show, showPassword };

    return (
      <AppContext.Provider value={ state }>
        { props.children }
      </AppContext.Provider>
    );
  }

  return {
    AppContext,
    ShowPasswordProvider
  }
}

export default Context();
