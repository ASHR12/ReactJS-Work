import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSearchParams } from "../features/products/productsSlice";
import {
  Filters,
  Loading,
  PaginationContainer,
  ProductsContainer,
} from "../components";
import { fetchProductThunks } from "../features/products/fetchProductThunks";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading, error } = useSelector((state) => state.productState);

  useEffect(() => {
    console.log("Component mounted or location.search changed");

    const queryParams = Object.fromEntries(
      new URLSearchParams(location.search)
    );

    console.log("Search Params from URL:", queryParams);
    dispatch(setSearchParams(queryParams));
    dispatch(fetchProductThunks({ url: `/products${location.search}` }));
  }, [dispatch, location.search]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          {<Filters />}
          <ProductsContainer />
          {<PaginationContainer />}
        </>
      )}
    </>
  );
};

export default Products;
