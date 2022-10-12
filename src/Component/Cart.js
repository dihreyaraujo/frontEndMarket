import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../style/cart.css';

class Cart extends React.Component {
  state = {
    arrayProducts: [],
    pricesItems: [],
  }

  componentDidMount = () => {
    this.getProductsLocalStorage();
  }

  getProductsLocalStorage = () => {
    const productsLocalStorage = JSON.parse(localStorage.getItem('Products'));
    const prices = productsLocalStorage.map((price) => price.price);
    this.setState({ arrayProducts: productsLocalStorage, pricesItems: prices });
    this.setIdsState(productsLocalStorage);
  }

  getTotalValue() {
    const { pricesItems } = this.state;
    const totalValue = pricesItems.reduce((prev, curr) => prev + curr, 0);
    return (
      <p>{`R$${totalValue.toFixed(2)}`}</p>
    );
  }

  aumentar = (event) => {
    const target = event.target.className;
    const { arrayProducts, [target]: idProduct, pricesItems } = this.state;
    const product = arrayProducts.find((produtos) => produtos.id === target);
    const quantity = product.available_quantity;
    const value = product.price;
    const newPrices = [...pricesItems, value];
    const { [target]: id } = this.state;
    const aumenta = parseInt(id, 10) + 1;
    if (idProduct < quantity) {
      this.setState({ [target]: aumenta, pricesItems: newPrices });
    }
  }

  diminuir = (event) => {
    const target = event.target.className;
    const { [target]: id, arrayProducts, pricesItems } = this.state;
    const product = arrayProducts.find((produtos) => produtos.id === target);
    const DEZ = 10;
    const value = parseFloat(`-${product.price}`, DEZ);
    console.log(value);
    const newValue = [...pricesItems, value];
    if (id >= 2) {
      const diminui = parseInt(id, 10) - 1;
      this.setState({ [target]: diminui, pricesItems: newValue });
    } else {
      const products = arrayProducts.filter((p) => p.id !== event.target.className);
      this.setState({ arrayProducts: products, pricesItems: newValue });
      localStorage.setItem('Products', JSON.stringify(products));
    }
  }

  setIdsState = (array) => {
    if (array !== null) {
      array.map((product) => this.setState({ [product.id]: 1 }));
    }
  }

  setParagrafo = (id) => {
    const { [id]: product } = this.state;
    return <p data-testid="shopping-cart-product-quantity">{product}</p>;
  }

  render() {
    const { arrayProducts } = this.state;
    return (
      <div>
        <Header />
        <div className="cart-section">
          <div>
            { arrayProducts.length === 0 ? (
              <p
                data-testid="shopping-cart-empty-message"
                className="empty-car"
              >
                Seu carrinho está vazio
              </p>
            ) : (
              <div className="cart-items">
                {arrayProducts.map((product, index) => (
                  <li key={ product.id } className="items">
                    <p data-testid="shopping-cart-product-name">
                      {`${product.title}`}
                    </p>
                    <br />
                    <img src={ product.thumbnail } alt={ product.title } width="150px" />
                    <br />
                    <p
                      id={ `price${index}` }
                    >
                      {`Preço: R$ ${product.price * this.state[product.id]}`}
                    </p>
                    <br />
                    <button
                      type="button"
                      onClick={ this.diminuir }
                      data-testid="product-decrease-quantity"
                      className={ product.id }
                    >
                      Diminuir
                    </button>
                    <p>{this.setParagrafo(product.id)}</p>
                    <button
                      type="button"
                      onClick={ this.aumentar }
                      data-testid="product-increase-quantity"
                      className={ product.id }
                    >
                      Aumentar
                    </button>
                  </li>))}
              </div>
            )}
          </div>
          <div>
            { arrayProducts.length > 0
              ? (
                <Link to="/checkout" className="total-value">
                  <h1>Total</h1>
                  { this.getTotalValue() }
                  <button type="button" data-testid="checkout-products">
                    Finalizar Compra
                  </button>
                </Link>) : '' }
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
