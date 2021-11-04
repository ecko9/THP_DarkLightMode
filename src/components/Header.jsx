import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkLightMode from 'context/DarkLightMode';

const Header = () => {

  const dlMode2 = React.useContext(DarkLightMode);

  return (
    <header className={dlMode2.dlMode ? "light" : "dark"}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        The Agency
      </NavLink>
      <NavLink to="/works">
        Projects
      </NavLink>
      <button onClick={dlMode2.switchDLMode}>Light | Dark</button>
    </header>
  );
};

export default Header;