import React from "react";
import "./productItem.css";
class ProductItem extends React.Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.name);
    let product = this.props.data.filter(e => e.name === this.props.name)[0];
    console.log(product);
    return (
      <div className="productItem-container">
    
       
        <div className="img-container">
          <img src={product.picture}  style={{width:'250px', height:'150px',marginRight:'20px'}}/>
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-description"> {product.description}</div>
        <div className="product-price">{product.price}</div>
      </div>
    );
  }
}

export default ProductItem;
