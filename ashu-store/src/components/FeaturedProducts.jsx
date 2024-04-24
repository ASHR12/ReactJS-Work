import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductThunks } from "../features/products/fetchProductThunks";
const FeaturedProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchProductThunks({ url: "/products?featured=true", type: "featured" })
    );
  }, [dispatch]);
  return (
    <div className="pt-24 ">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
