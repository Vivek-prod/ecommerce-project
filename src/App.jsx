import { HomePage } from "./Pages/HomePage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      {/* index do the same thing as path="/" */}
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
