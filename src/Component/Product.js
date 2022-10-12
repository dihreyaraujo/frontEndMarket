import React from 'react';
import PropTypes from 'prop-types';
import { getProductItemFromId } from '../services/api';
import Header from './Header';
import Radio from './Radio';
import '../style/product.css';

class Product extends React.Component {
  state = {
    info: {},
    ready: false,
    email: '',
    describe: '',
    rating: '',
    ratings: [],
  }

  componentDidMount() {
    this.callGetItem();
    const hasRatings = localStorage.getItem('ratings');
    if (hasRatings) {
      this.setState({
        ratings: JSON.parse(hasRatings),
        ready: true,
      });
    }
  }

  callGetItem = async () => {
    const { match: { params: id } } = this.props;

    const response = await getProductItemFromId(id.id);

    this.setState({
      info: response,
      ready: true,
    });
  }

  getCart = () => {
    const { info } = this.state;
    const arrayInfo = [info];
    const cart = JSON.parse(localStorage.getItem('Products'));
    if (cart === null) {
      localStorage.setItem('Products', JSON.stringify(arrayInfo));
    } else {
      const addItem = [...cart, info];
      localStorage.setItem('Products', JSON.stringify(addItem));
    }
  }

  createItem = () => {
    const { info } = this.state;

    return (
      <div className="item-info">
        <p data-testid="product-detail-name">{ info.title }</p>
        <img src={ info.thumbnail } alt={ info.title } />
        <p>{ `R$${info.price}` }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.getCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  handleRating = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { email, describe, rating, ratings } = this.state;
    const newRating = {
      describe,
      email,
      rating,
    };

    this.setState({ ratings: [...ratings, newRating], ready: true });
    this.setState({ email: '', describe: '', rating: 1 });
    const saveInfo = JSON.stringify([...ratings, newRating]);
    localStorage.setItem('ratings', saveInfo);
  };

  render() {
    const { ready, describe, ratings } = this.state;

    return (
      <div>
        <Header />
        <div className="main-content">
          <div className="item-content">
            {ready && this.createItem()}
          </div>
          <div className="item-describe">
            <form className="form">
              <p>Avaliação</p>
              <input
                data-testid="product-detail-email"
                type="email"
                onChange={ this.handleRating }
                name="email"
                required
                placeholder="Email"
              />
              <Radio handleRating={ this.handleRating } />
              <textarea
                data-testid="product-detail-evaluation"
                onChange={ this.handleRating }
                value={ describe }
                name="describe"
                placeholder="Feedback"
              />
              <button
                data-testid="submit-review-btn"
                onClick={ this.handleClick }
                type="button"
              >
                Enviar
              </button>
            </form>
            <div>
              {ready
                  && ratings.map((rating, index) => (
                    <div key={ index }>
                      <p>{rating.email}</p>
                      <p>{rating.describe}</p>
                      <p>{rating.rating}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Product;
