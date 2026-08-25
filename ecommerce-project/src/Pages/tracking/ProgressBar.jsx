import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function ProgressBar({ productTrack, order }) {
  const totalTImeMs = productTrack.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  const arrivalPercentage = Math.max(
    0,
    Math.min(100, (timePassedMs / totalTImeMs) * 100),
  );

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(arrivalPercentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [arrivalPercentage]);

  let currentStatus;
  if (arrivalPercentage < 50) {
    currentStatus = "Preparing";
  } else if (arrivalPercentage < 100) {
    currentStatus = "Shipped";
  } else {
    currentStatus = "Delivered";
  }
  return (
    <>
      <div className="progress-labels-container">
        <div
          className={`progress-label ${currentStatus === "Preparing" ? "current-status" : ""}`}
        >
          Preparing
        </div>
        <div
          className={`progress-label ${currentStatus === "Shipped" ? "current-status" : ""}`}
        >
          Shipped
        </div>
        <div
          className={`progress-label ${currentStatus === "Delivered" ? "current-status" : ""}`}
        >
          Delivered
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
}
