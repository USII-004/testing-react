import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__icon">
          <img src={logo} className="logo" alt="logo" />
          <p className="logo__text">ReactFacts</p>
        </div>
        <ul className="nav__items">
          <li><a href="#">React Course - Project 1</a></li>
          {/* <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
