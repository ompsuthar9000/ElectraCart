import "./Home.scss";
import { useEffect, useContext, useState } from "react";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/apiner";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    await fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = async () => {
    await fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
