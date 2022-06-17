import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container d-flex">
      <img alt="Marvel Logo" src="assets/logo.svg" />
      <h1>EXPLORE O UNIVERSO</h1>
      <p className="header-text grey">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve
      </p>
    </div>
  );
}

export default Header;
