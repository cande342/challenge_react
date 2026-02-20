import { useState, useCallback } from "react";
import { jobsService } from "../services/jobs";
import type { Job } from "../types";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [errorJobs, setErrorJobs] = useState<string | null>(null);

  const loadJobs = useCallback(async () => {
    setLoadingJobs(true);
    setErrorJobs(null);
    
    try {
      const data = await jobsService.getList();
      setJobs(data);
    } catch (err) {
      setErrorJobs("Error al interceptar las posiciones abiertas.");
    } finally {
      setLoadingJobs(false);
    }
  }, []);

  return { 
    jobs, 
    loadingJobs, 
    errorJobs, 
    loadJobs 
  };
}