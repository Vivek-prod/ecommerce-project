import dayjs from "dayjs";
import { DeliverOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({ deliverOptions, cart }) {
  return (
    <div className="order-summary">
      {deliverOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliverOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <DeliverOptions
                  cartItem={cartItem}
                  deliverOptions={deliverOptions}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
