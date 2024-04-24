import { SectionTitle, OrderList, PaginationOrdersPage } from "../components";

const Orders = () => {
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrderList />
      <PaginationOrdersPage />
    </>
  );
};

export default Orders;
