import { Header } from "../../Components/Header";
import "./TrackingPage.css";
import { OrderTracking } from "./OrderTracking";

export function TrackingPage({ cart }) {
  return (
    <>
      <title>Tracking Page</title>
      <link rel="icon" type="image" href="tracking-favicon.png" />
      <Header cart={cart} />

      <div className="tracking-page">
        <OrderTracking />
      </div>
    </>
  );
}
