import { HomePage } from "./Pages/home/HomePage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import "./App.css";
import { Routes, Route } from "react-router";
import { OrdersPage } from "./Pages/orders/OrdersPage";
import { TrackingPage } from "./Pages/tracking/TrackingPage";
import { NotFound } from "./Pages/notFound/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* index do the same thing as path="/" */}
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
