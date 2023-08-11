import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({ deculdeProductid, curuntproductid }) => {
  const data = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${deculdeProductid}&filters[categories][id]=${curuntproductid}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <div className="related-products">
      <Products headingText="Releted Products" products={data?.data} />
    </div>
  );
};

export default RelatedProducts;
