import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { handleProductAddToCart } = useContext(Context);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&filters[id]=${id}`);
  const [quantity, setQuantity] = useState(1);

  const addToCartButtonHnadler = () => {
    handleProductAddToCart(data.data[0], quantity);
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                data?.data?.[0]?.attributes?.img?.data?.[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{data?.data?.[0]?.attributes?.title}</span>
            <span className="price">
              &#8377;
              {data?.data?.[0]?.attributes?.price}
            </span>
            <span className="desc">
              {data?.data?.[0]?.attributes?.descrption}
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={addToCartButtonHnadler}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>
                  {
                    data?.data?.[0]?.attributes?.categories?.data?.[0]
                      ?.attributes?.title
                  }
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          deculdeProductid={id}
          curuntproductid={
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.id
          }
        />
      </div>
    </div>
  );
};

export default SingleProduct;
