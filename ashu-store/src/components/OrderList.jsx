import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/order/orderThunks";
import { Loading } from "../components";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
const OrderList = () => {
  const dispatch = useDispatch();
  const {
    data: orders,
    meta,
    isLoading,
    error,
  } = useSelector((state) => state.orderState);

  useEffect(() => {
    console.log("calling fetch orders");
    dispatch(fetchOrders(1));
  }, [dispatch]);

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        total orders : {meta?.pagination?.total ?? "Loading..."}
      </h4>
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY ");
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
