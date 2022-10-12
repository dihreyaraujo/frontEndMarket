import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="text-header-h1">
          <h1>Dihrey Market</h1>
        </Link>
        <nav>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
            className="text-header-p"
          >
            Carrinho
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
