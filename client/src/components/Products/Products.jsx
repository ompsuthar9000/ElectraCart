import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item?.id} data={item?.attributes} id={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
