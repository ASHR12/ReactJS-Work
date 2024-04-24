import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const { products } = useSelector((state) => state.productState);
  const totalProducts = products ? products.length : 0; // Ensure you handle cases when products might be null

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts !== 1 ? "s" : ""}
        </h4>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : (
          <ProductsGrid />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
