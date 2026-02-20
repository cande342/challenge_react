import { useEffect } from "react";
import { useJobs } from "../hooks/useJobs";
import { JobCard } from "./JobCard";
import { Loading } from "./ui/Loading";

interface JobListProps {
  onApply: (jobId: string, repoUrl: string) => Promise<boolean>;
  isApplying: boolean;
}

export function JobList({ onApply, isApplying }: JobListProps) {
  const { jobs, loadingJobs, errorJobs, loadJobs } = useJobs();

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  if (loadingJobs) return <Loading message="INTERCEPTANDO POSICIONES ABIERTAS..." />;

  if (errorJobs) {
    return (
      <div className="p-4 border border-destructive text-destructive font-mono text-center">
        [ERROR CRÍTICO]: {errorJobs}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job} 
          onApply={onApply} 
          isApplying={isApplying} 
        />
      ))}
      
      {jobs.length === 0 && (
        <p className="col-span-full text-center text-muted-foreground font-mono">
          No se encontraron vacantes disponibles en este sector.
        </p>
      )}
    </div>
  );
}