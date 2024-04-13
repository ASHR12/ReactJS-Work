import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "./axios"; // Adjust the import path as necessary
import { toast } from "react-toastify";

// Custom hook for fetching tasks
export const useFetchTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get("/");
      return response.data;
    },
  });
};

// Custom hook for adding a task
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newItemName) => axios.post("/", { title: newItemName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task Added to the list");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};

// Custom hook for updating a task
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ taskId, isDone }) => axios.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task Updated successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};

// Custom hook for deleting a task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ taskId }) => axios.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task Deleted successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};
