import dayjs from "dayjs";
export function DeliverDate({ deliverOptions, cartItem }) {
  const selectedDeliveryOption = deliverOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  });
  return (
    <>
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM D",
        )}
      </div>
    </>
  );
}
