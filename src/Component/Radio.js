import React from 'react';
import PropTypes from 'prop-types';

class Radio extends React.Component {
  render() {
    const { handleRating } = this.props;
    return (
      <div className="avaliation-radio">
        <label htmlFor="check1">
          1
          <input
            type="radio"
            data-testid="1-rating"
            id="check1"
            name="rating"
            value="1"
            onChange={ handleRating }
          />
        </label>
        <label htmlFor="check2">
          2
          <input
            type="radio"
            data-testid="2-rating"
            id="check2"
            name="rating"
            value="2"
            onChange={ handleRating }
          />
        </label>
        <label htmlFor="check3">
          3
          <input
            type="radio"
            data-testid="3-rating"
            id="check3"
            name="rating"
            value="3"
            onChange={ handleRating }
          />
        </label>
        <label htmlFor="check4">
          4
          <input
            type="radio"
            data-testid="4-rating"
            id="check1"
            name="rating"
            value="4"
            onChange={ handleRating }
          />
        </label>
        <label htmlFor="check5">
          5
          <input
            type="radio"
            data-testid="5-rating"
            id="check5"
            name="rating"
            value="5"
            onChange={ handleRating }
          />
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  handleRating: PropTypes.func.isRequired,
};

export default Radio;
