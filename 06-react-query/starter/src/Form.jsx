import React, { useState } from "react";
import { useAddTask } from "./reactQueryCustomHooks"; // Import the custom hook
const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const { mutate: addTask, isPending } = useAddTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newItemName, {
      onSuccess: () => {
        setNewItemName(""); // Reset input after task is added
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit" className="btn" disabled={isPending}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
