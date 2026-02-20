import { useState } from "react";
import { candidateService } from "../services/candidate";
import type { Candidate, ApplyPayload } from "../types";

export function useCandidate() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string) => {
    setLoading(true);
    setError(null); 
    
    try {
      const data = await candidateService.getByEmail(email);
      setCandidate(data);
      return true;
    } catch (err) {
      setError("Acceso denegado. Verifica el email ingresado.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const applyToJob = async (jobId: string, repoUrl: string) => {
    if (!candidate) return false;

    setLoading(true);
    setError(null);

    const payload: ApplyPayload = {
      uuid: candidate.uuid,
      candidateId: candidate.candidateId,
      jobId,
      repoUrl,
    };

    try {
      const response = await candidateService.applyToJob(payload);
      return response.ok;
    } catch (err) {
      setError("Fallo en la transmisión de la postulación.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCandidate(null);
  };

  return { 
    candidate, 
    loading, 
    error, 
    login, 
    applyToJob, 
    logout 
  };
}