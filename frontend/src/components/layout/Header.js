import React from "react";
import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="holder header-container">
        <img src="images/logo.png" width="100" alt="Transportes X" />
        <h1>Transportes X</h1>
      </div>
    </header>
  );
};

export default Header;
