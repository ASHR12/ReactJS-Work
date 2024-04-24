import { Form, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
import { useSelector } from "react-redux";
const Filters = () => {
  const { products, searchParams } = useSelector((state) => state.productState);
  const { meta } = products;
  // console.log("filter searchParams", searchParams);
  // console.log("filter meta", meta);
  const navigate = useNavigate();
  const [formKey, setFormKey] = useState(0);
  const [formState, setFormState] = useState({
    search: searchParams.search || "",
    category: searchParams.category || "all",
    company: searchParams.company || "all",
    order: searchParams.order || "a-z",
    price: searchParams.price || "100000",
    shipping: searchParams.shipping || "",
  });

  // console.log("formState", formState);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    console.log(
      `Type: ${type}, Name: ${name}, Value: ${value}, Checked: ${checked}`
    );

    let adjustedValue;
    if (type === "checkbox") {
      adjustedValue = checked ? "on" : "";
    } else if (type === "range" || type === "number") {
      adjustedValue = parseInt(value, 10); // or parseFloat(value) if dealing with floats
    } else {
      adjustedValue = value;
    }

    setFormState((prev) => ({
      ...prev,
      [name]: adjustedValue,
    }));

    console.log("New form state:", formState);
  };

  // Submit form: Update URL and set search params in Redux
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = new URLSearchParams(formState).toString();
    navigate(`/products?${queryString}`);
    console.log("formState handle submit", formState);
  };

  // Reset form and URL, also reset search params in Redux
  const handleReset = () => {
    const resetState = {
      search: "",
      category: "all",
      company: "all",
      order: "a-z",
      price: 100000,
      shipping: "",
    };
    setFormState(resetState);
    navigate("/products");
    setFormKey((prevKey) => prevKey + 1);
  };

  return (
    <Form
      key={formKey}
      onSubmit={handleSubmit}
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
        value={formState.search || ""}
        onChange={handleInputChange}
      />
      <FormSelect
        label="Select Category"
        name="category"
        list={[...meta.categories]}
        size="select-sm"
        value={formState.category}
        onChange={handleInputChange}
      />
      <FormSelect
        label="Select Company"
        name="company"
        list={[...meta.companies]}
        size="select-sm"
        value={formState.company}
        onChange={handleInputChange}
      />
      <FormSelect
        label="Sort By"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        value={formState.order}
        onChange={handleInputChange}
      />
      <FormRange
        label="Price Range"
        name="price"
        size="range-sm"
        price={formState.price || 0}
        onChange={handleInputChange}
      />
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        checked={formState.shipping}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link
        to="/products"
        className="btn btn-accent btn-sm"
        onClick={handleReset}
      >
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
