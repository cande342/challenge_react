import { fetchAPI } from "./api";
import type { Candidate, ApplyPayload, ApplyResponse } from "../types";

export const candidateService = {

  getByEmail: async (email: string): Promise<Candidate> => {
    return fetchAPI<Candidate>(`/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
  },

  applyToJob: async (payload: ApplyPayload): Promise<ApplyResponse> => {
    return fetchAPI<ApplyResponse>("/api/candidate/apply-to-job", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};