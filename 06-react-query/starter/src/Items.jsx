import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks"; // Import the custom hook
import axios from "./axios"; // Ensure axios is imported

const Items = () => {
  const { data, error, isError, isLoading } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;
  }
  // Server message
  // if (error) {
  //   return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => (
        <SingleItem key={item.id} item={item} /> // Added dummy function for onItemUpdate
      ))}
    </div>
  );
};

export default Items;
