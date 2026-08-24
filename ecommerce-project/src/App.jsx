import { HomePage } from "./Pages/home/HomePage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import "./App.css";
import { Routes, Route } from "react-router";
import { OrdersPage } from "./Pages/orders/OrdersPage";
import { TrackingPage } from "./Pages/tracking/TrackingPage";
import { NotFound } from "./Pages/notFound/NotFoundPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      {/* index do the same thing as path="/" */}
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
