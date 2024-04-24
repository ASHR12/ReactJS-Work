import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { fetchProductThunks } from "../features/products/fetchProductThunks";
import { convertCentsToDollars, generateAmountOptionElement } from "../utils";

const SingleProduct = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading, error } = useSelector(
    (state) => state.productState
  );

  useEffect(() => {
    dispatch(
      fetchProductThunks({ url: `/products/${productId}`, type: "single" })
    );
  }, [dispatch, productId]);

  // Safe access to attributes using optional chaining
  const attributes = singleProduct?.data?.attributes;
  const [productColor, setProductColor] = useState(attributes?.colors?.[0]);
  const [amount, setAmount] = useState(1);

  // Set product color on product load or change
  useEffect(() => {
    if (attributes && attributes.colors && attributes.colors.length > 0) {
      setProductColor(attributes.colors[0]);
    }
  }, [attributes]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!attributes) return <div>Product not found.</div>;

  const { image, title, price, description, colors, company } = attributes;
  const dollarsAmount = convertCentsToDollars(price);

  const handleAmount = (e) => setAmount(parseInt(e.target.value, 10));

  const cartProduct = {
    cartID: productId + productColor,
    productID: productId,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors?.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor ? "ring-2 ring-primary" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptionElement(10)}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
