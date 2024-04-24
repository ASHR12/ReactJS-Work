import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../features/cart/cartThunks"; // Adjust import path as necessary
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const shippingName = formData.get("name");
    const shippingAddress = formData.get("address");

    dispatch(
      checkoutCart({
        shippingName,
        shippingAddress,
      })
    )
      .unwrap()
      .then((response) => {
        console.log("Checkout successful", response);
        navigate("/orders");
      })
      .catch((error) => {
        console.error("Checkout failed", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </form>
  );
};

export default CheckoutForm;
