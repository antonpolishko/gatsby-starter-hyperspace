import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Стартер+
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Домой</Link>
        </li>
        <li>
          <Link to="/generic">О Нас</Link>
        </li>
        <li>
          <Link to="/elements">Услуги</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
