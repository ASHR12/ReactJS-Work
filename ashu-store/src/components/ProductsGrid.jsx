import { Link } from "react-router-dom";
import { convertCentsToDollars } from "../utils/index";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ProductsGrid = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productState
  );
  console.log("isLoading in grid comp", isLoading);
  console.log("products in grid comp", products);
  if (isLoading) {
    return <Loading />; // Show loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error loading products: {error}</div>; // Show error message if there was a problem fetching the products
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>; // Display message if no products are available
  }

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.data.map((product) => {
        const {
          id,
          attributes: { title, price, image },
        } = product;
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">
                {convertCentsToDollars(price)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
