import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

import { connect } from "react-redux";
import { addProduct } from "../../actions";

export class AddCartButton extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    styles: PropTypes.object,
    addLabel: PropTypes.string
  };

  static defaultProps = {
    addLabel: "Add to Cart",
    style: {},
    className: ""
  };

  addProductToCart = (event, product) => {
    product.quantity = 1;
    this.props.addProduct(product);
  };

  render() {
    const { product, style, addLabel, className } = this.props;
    return (
      <div>
        <button
          style={style}
          className={className}
          onClick={event => this.addProductToCart(event, product)}
        >
          {addLabel}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { addProduct: product => dispatch(addProduct(product)) };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCartButton);
