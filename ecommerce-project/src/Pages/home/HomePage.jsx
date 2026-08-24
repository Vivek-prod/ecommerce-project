import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import "./HomePage.css";
import checkmark from "../../assets/images/icons/checkmark.png";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image" href="home-favicon.png" />
      <title>Home Page</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} checkmark={checkmark} />
      </div>
    </>
  );
}
