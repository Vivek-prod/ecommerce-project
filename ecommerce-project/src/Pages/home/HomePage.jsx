import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import "./HomePage.css";
import checkmark from "../../assets/images/icons/checkmark.png";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";

window.axios = axios;

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getHomeData = async () => {
      setIsLoading(true);
      const url = search ? `/api/products?search=${search}` : "/api/products";
      const response = await axios.get(url);
      setProducts(response.data);
      setIsLoading(false);
    };
    getHomeData();
  }, [search]);

  return (
    <>
      <link rel="icon" type="image" href="home-favicon.png" />
      <title>Home Page</title>

      <Header cart={cart} />
      <div className="home-page">
        {!isLoading && products.length === 0 ? (
          <div className="no-products-found">
            No Products Found {search ? `for "${search}"` : ""}
          </div>
        ) : (
          <ProductsGrid
            products={products}
            checkmark={checkmark}
            loadCart={loadCart}
          />
        )}
      </div>
    </>
  );
}
