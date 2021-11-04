import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Agency from 'pages/Agency';
import Works from 'pages/Works';
import DarkLightMode from 'context/DarkLightMode';
import Project from 'pages/Project';

const App = () => {

  const [dlMode, setDLMode] = React.useState(true);

  const switchDLMode = () => {
    setDLMode(!dlMode);
  }

  React.useEffect(
    () => {
      if (localStorage.getItem('dlMode'))
        setDLMode(JSON.parse(localStorage.dlMode));
      return;
    }, []
  );

  React.useEffect(
    () => {
      if (localStorage.getItem('dlMode'))
        localStorage.removeItem('dlMode');
      localStorage.setItem('dlMode', JSON.stringify(dlMode));
      console.log("localll:  ", localStorage)
      return;
    }, [dlMode]
  );

  return (
    <div className="app">
      <DarkLightMode.Provider value={{ dlMode, switchDLMode }}>
        {<BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={Agency} />
            <Route path="/works" exact component={Works} />
            <Route path="/works/:project" component={Project} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>}
      </DarkLightMode.Provider>
    </div>
  );
};

export default App;