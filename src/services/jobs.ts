import { fetchAPI } from "./api";
import type { Job } from "../types";

export const jobsService = {
  getList: async (): Promise<Job[]> => {
    return fetchAPI<Job[]>("/api/jobs/get-list");
  },
};