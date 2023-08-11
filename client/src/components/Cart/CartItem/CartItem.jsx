import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext, useState } from "react";
import { Context } from "../../../utils/context";
const CartItem = ({ product, quantity }) => {
  const { handleProductRemovetoCart, cartQuantityHandler } =
    useContext(Context);
  const [Quantity, setQuantity] = useState(quantity);
  cartQuantityHandler(product, Quantity);

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img
            src={
              process.env.REACT_APP_DEV_URL +
              product?.attributes?.img?.data?.[0].attributes.url
            }
            alt=""
          />
        </div>
        <div className="prod-details">
          <span className="name">{product?.attributes?.title}</span>
          <MdClose
            className="close-btn"
            on
            onClick={() => {
              handleProductRemovetoCart(product);
            }}
          />
          <div className="quantity-buttons">
            <span
              onClick={() => {
                Quantity > 1 && setQuantity(Quantity - 1);
              }}
            >
              -
            </span>
            <span>{Quantity}</span>
            <span onClick={() => setQuantity(Quantity + 1)}>+</span>
          </div>
          <div className="text">
            <span>{product?.attributes?.quantity}</span>
            <span>x</span>
            <span className="highlight">
              &#8377;
              {product?.attributes?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
