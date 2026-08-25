import { DeliverOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliverDate } from "./DeliveryDate";
import axios from "axios";

export function OrderSummary({
  deliverOptions,
  cart,
  loadCart,
  loadPaymentSummary,
}) {
  return (
    <div className="order-summary">
      {deliverOptions.length > 0 &&
        cart.map((cartItem) => {
          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
            await loadPaymentSummary();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliverDate
                deliverOptions={deliverOptions}
                cartItem={cartItem}
              />

              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  deleteCartItem={deleteCartItem}
                />

                <DeliverOptions
                  cartItem={cartItem}
                  deliverOptions={deliverOptions}
                  loadCart={loadCart}
                  loadPaymentSummary={loadPaymentSummary}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
