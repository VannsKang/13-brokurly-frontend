import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SpecialProductsItem.styles.scss";

class SpecialProductsItem extends Component {
  constructor() {
    super();
    this.state = {
      isImgVertical: true,
    };
  }

  resizeImage = (e) => {
    this.setState({
      isImgVertical: e.target.naturalHeight > e.target.naturalWidth,
    });
  };

  render() {
    const { isImgVertical } = this.state;
    const {
      id,
      name,
      imageUrl,
      discountPercent,
      discountName,
      discountPrice,
      originalPrice,
    } = this.props;
    return (
      <li className="SpecialProductsItem" key={id}>
        <Link className="Link" to={`/productdetails/${id}`}>
          <div className="special-products-item-img">
            <div className={discountPercent ? "sale-box" : "sale-box hide"}>
              <p className="sale-type">{discountName}</p>
              <p className="sale-amount">{`${discountPercent}%`}</p>
            </div>
            <img
              className={
                isImgVertical
                  ? "item-img-main full-width"
                  : "item-img-main full-height"
              }
              src={imageUrl}
              alt="product item"
              onLoad={this.resizeImage}
            />
          </div>
        </Link>
        <div className="special-products-item-info">
          <Link className="Link" to="/product-page">
            <p className="product-name">{name}</p>
          </Link>
          <p className="price">
            {discountPrice
              ? `${discountPrice.toLocaleString("en-US")}원`
              : `${originalPrice.toLocaleString("en-US")}원`}
          </p>
          <p
            className={
              discountPercent ? "original-price" : "original-price hide"
            }
          >
            {`${originalPrice.toLocaleString("en-US")}원`}
          </p>
        </div>
      </li>
    );
  }
}

export default SpecialProductsItem;
