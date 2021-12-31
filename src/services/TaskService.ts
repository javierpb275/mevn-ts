import { Task } from "../interfaces/Task";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/tasks", task);
