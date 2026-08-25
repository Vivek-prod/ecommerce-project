import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ProgressBar } from "./ProgressBar";

export function OrderTracking({ orderId, productId }) {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };
    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const productTrack = order.products.find((product) => {
    return product.productId === productId;
  });

  return (
    <div className="order-tracking">
      <Link className="back-to-orders-link link-primary" to="/orders">
        View all orders
      </Link>

      <div className="delivery-date">
        {dayjs(productTrack.estimatedDeliveryTimeMs).format("MMMM D")}
      </div>

      <div className="product-info">{productTrack.product.name}</div>

      <div className="product-info">Quantity: {productTrack.quantity}</div>

      <img className="product-image" src={productTrack.product.image} />

      <ProgressBar productTrack={productTrack} order={order} />
    </div>
  );
}
