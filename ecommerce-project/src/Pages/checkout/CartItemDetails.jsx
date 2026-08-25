import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
export function CartItemDetails({
  cartItem,
  deleteCartItem,
  loadCart,
  loadPaymentSummary,
}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateItemQuantity = async () => {
    setIsUpdate(true);
  };

  const saveUpdate = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });
    setIsUpdate(false);
    await loadCart();
    await loadPaymentSummary();
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>

        <div className="product-quantity">
          <span className="quantity-label">Quantity:{cartItem.quantity}</span>

          <input
            type="number"
            min="1"
            className="quantity-input"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                saveUpdate();
              } else if (event.key === "Escape") {
                setIsUpdate(false);
              }
            }}
            style={{ display: isUpdate ? "inline-block" : "none" }}
          />

          <span
            className="update-quantity-link link-primary save-link"
            style={{ display: isUpdate ? "inline-block" : "none" }}
            onClick={saveUpdate}
          >
            Save
          </span>

          <span
            className="update-quantity-link link-primary"
            onClick={updateItemQuantity}
            style={{ display: !isUpdate ? "inline-block" : "none" }}
          >
            Update
          </span>

          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
