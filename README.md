# react-shopping-cart

> A react shopping cart components with redux with instant updates for e-commerce applications

[![NPM](https://img.shields.io/npm/v/react-cart-components.svg)](https://www.npmjs.com/package/react-cart-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package provides several components:

- [**Cart**](#cart)
- [**CartReducers**](#cartreducers)
- [**AddCartButton**](#addtocartbutton)

**Meta**

- **author**: Dennis Paler &lt;dtpaler@gmail.com>
- **license**: MIT

#### Features

- Add and remove product to the cart
- Cart Products persist after page reloads

## Demo

demo: [`https://react-cart-components-demo.herokuapp.com/`](https://react-cart-components-demo.herokuapp.com/)

## Install

```bash
npm install --save react-cart-components
```

## Usage

**With Redux.**

```jsx
import React, { Component } from "react";
import { Cart, AddCartButton, CartReducers } from "react-cart-components";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    cart: CartReducers
    // Your own reducers here,
  })
);

const products = [
  {
    id: 1,
    name: "Flamboyant Pink Top",
    sku: "kskskskks",
    price: 2000,
    thumb: { type: "icon", classes: "fa fa-2x fa-cogs" }
  },
  {
    id: 2,
    name: "Black and White Stripes Dress",
    sku: "kskskskks",
    price: 3000,
    thumb: {
      type: "image",
      src: "https://colorlib.com/preview/theme/divisima/img/product/2.jpg"
    }
  },
  {
    id: 3,
    name: "Flamboyant Pink Top",
    sku: "kskskskks",
    price: 10000
  },
  {
    id: 4,
    name: "Flamboyant Pink Top",
    sku: "kskskskks",
    price: 5000
  }
];

class Example extends Component {
  handleCheckout(data) {
    console.log(data);
  }

  render() {
    return (
      <Provider store={store}>
        <Cart
          currencySymbol="CLP"
          language="es-CL"
          handleCheckout={handleCheckout}
          cartEmptyLabel={"El carrito está vacio"}
          cartTextLabel={"Carrito de compras"}
          checkoutTextLabel={"Ir a pagar"}
          subTotalTextLabel={"Total"}
          quantityTextLabel={"Cantidad"}
        />
        <div>
          {products.map((product, key) => {
            return (
              <div className="col" key={key}>
                <div className="product-item">
                  <div className="pi-pic">
                    <div className="pi-links">
                      <AddCartButton product={product} />
                    </div>
                  </div>
                  <div className="pi-text">
                    <p>{product.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Provider>
    );
  }
}

export default ShopingCart;
```

## Props

### Cart Component

| Name              | Type     | Default                         | Description                                                                                                |
| ----------------- | -------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| currencySymbol    | string   | `USD`                           | Currency symbol to be used                                                                                 |
| language          | string   | `en-US`                         | language to be used in currencies                                                                          |
| checkoutTextLabel | string   | `Checkout`                      | A checkout button text on the cart                                                                         |
| cartTextLabel     | string   | `Your Cart`                     | Cart - Header title                                                                                        |
| cartEmptyLabel    | string   | `Add some products in the cart` | Cart - Empty message                                                                                       |
| subTotalTextLabel | string   | `Sub Total`                     | Cart - Sub Total Text                                                                                      |
| quantityTextLabel | string   | `Quantity`                      | Cart - Product Qty Text                                                                                    |
| handleCheckout    | Function | null                            | `handleCheckout` will be triggered when `checkoutLabel` button is clicked and return cart products object. |

### AddCartButton

| Name      | Type   | Default       | Description                                       |
| --------- | ------ | ------------- | ------------------------------------------------- |
| product   | Object | null          | (Required) Product object to be added to the cart |
| style     | Object | `{}`          | The style used for button                         |
| className | string | ""            | Classes used for button                           |
| addLabel  | string | `Add to Cart` | A add cart button text                            |

Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Properties**

- `id` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Product's id. Required.
- `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Product Name to display pattern. Required.
- `price` **[Price](#price)** {currency: value}. Required
- `image` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to main image. Required.

## License

MIT © [Dennis Paler](https://github.com/akosidencio)
