import { Header } from "../../Components/Header";
import "./TrackingPage.css";
import { OrderTracking } from "./OrderTracking";
import { useParams } from "react-router";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();

  return (
    <>
      <title>Tracking Page</title>
      <link rel="icon" type="image" href="tracking-favicon.png" />
      <Header cart={cart} />

      <div className="tracking-page">
        <OrderTracking orderId={orderId} productId={productId} />
      </div>
    </>
  );
}
