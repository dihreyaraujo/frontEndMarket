import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromQuery, getProductsFromCategory } from '../services/api';
import CategoryList from './CategoryList';
import Header from './Header';
import '../style/header.css';
import '../style/home.css';

class Home extends React.Component {
  state = {
    ready: false,
    value: '',
    arrayProducts: [],
    productCategory: [],
    categoryReady: false,
    objectProductsCart: [],
  }

  getValue = (event) => {
    this.setState({ value: event.target.value });
  }

  searchItems = async () => {
    const { value } = this.state;
    this.setState({ ready: true, categoryReady: false });
    const resultProducts = await getProductsFromQuery(value);
    this.setState({ arrayProducts: resultProducts.results });
  }

  searchForCategory = async (event) => {
    const idCategory = event.target.id;
    const categoryProducts = await getProductsFromCategory(idCategory);
    this.setState({ productCategory: categoryProducts,
      categoryReady: true,
      ready: false });
  }

  elementsCategory = () => {
    const { productCategory } = this.state;
    const elements = productCategory.map((element) => (
      <div key={ element.id } data-testid="product" className="items-list">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${element.id}` }
          className="product-info"
        >
          <p>{element.title}</p>
          <img src={ element.thumbnail } alt={ element.title } width="200px" />
          <p>{`R$${element.price}`}</p>
        </Link>
        {element.shipping.free_shipping && (
          <p
            data-testid="free-shipping"
          >
            Frete Grátis
          </p>
        )}
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.onAddCart(element) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    ));
    return elements;
  }

  onAddCart = (product) => {
    this.setState((previousState) => (
      { objectProductsCart: [...previousState.objectProductsCart, product] }),
    this.saveLocalStorage);
  }

  saveLocalStorage = () => {
    const { objectProductsCart } = this.state;
    localStorage.setItem('Products', JSON.stringify(objectProductsCart));
  }

  render() {
    const { ready, value, arrayProducts, categoryReady } = this.state;
    return (
      <div>
        <Header />
        <div className="search-div">
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.getValue }
            value={ value }
            className="imput-search"
            placeholder="Digite algum termo de pesquisa"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.searchItems }
            className="button-search"
          >
            Pesquisar
          </button>
        </div>
        <div className="home-css">
          <CategoryList click={ this.searchForCategory } />
          <div className="items-search">
            {ready && arrayProducts.map((product) => (
              <div key={ product.id } data-testid="product" className="items-list">
                <Link
                  data-testid="product-detail-link"
                  to={ `/product/${product.id}` }
                  className="product-info"
                >
                  {`Produto: ${product.title}`}
                  <br />
                  <img src={ product.thumbnail } alt={ product.title } width="200px" />
                  <br />
                  {`Preço: R$ ${product.price}`}
                  <br />
                </Link>
                {product.shipping.free_shipping && (
                  <p
                    data-testid="free-shipping"
                  >
                    Frete Grátis
                  </p>
                )}
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.onAddCart(product) }
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
          <div className="items-search">{ categoryReady && this.elementsCategory() }</div>
        </div>
      </div>
    );
  }
}

export default Home;
