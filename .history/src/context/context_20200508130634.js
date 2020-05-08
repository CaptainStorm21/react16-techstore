import React, { Component } from "react";
const ProductContext = React.createContext();

// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
  };
  //handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //handle sidecart
  handleSidecart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //close cart
closeCart = () => {
  this.setState({ })
}

  //



  render() {
    return (
      <ProductContext.Provider value="Hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
