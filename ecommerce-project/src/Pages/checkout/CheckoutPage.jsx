import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css";
import "./CheckoutHeader.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart, loadCart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [deliverOptions, setDeliveryOptions] = useState([]);
  const loadPaymentSummary = async () => {
    let response = await axios.get("/api/payment-summary");
    setPaymentSummary(response.data);
  };
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
      await loadPaymentSummary();
    };
    fetchCheckoutData();
  }, []);

  return (
    <>
      <link rel="icon" type="image" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliverOptions={deliverOptions}
            cart={cart}
            loadCart={loadCart}
            loadPaymentSummary={loadPaymentSummary}
          />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
