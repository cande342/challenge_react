import { useState } from "react";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import type { Job } from "../types";

interface JobCardProps {
  job: Job;
  onApply: (jobId: string, repoUrl: string) => Promise<boolean>;
  isApplying: boolean;
}

export function JobCard({ job, onApply, isApplying }: JobCardProps) {
  const [repoUrl, setRepoUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!repoUrl.includes("github.com")) {
      setLocalError("FORMATO_REPOSITORIO_INVALIDO: Se requiere link de GitHub");
      return;
    }

    const ok = await onApply(job.id, repoUrl);
    if (ok) {
      setSuccess(true);
    } else {
      setLocalError("FALLO_EN_SISTEMA: No se pudo procesar la solicitud");
    }
  };

  return (
    <Card glow={success ? "cyan" : (localError ? "pink" : "none")} className="transition-all duration-500">
      <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight border-l-2 border-primary pl-3">
        {job.title}
      </h3>
      
      {success ? (
        <div className="py-4 text-center border border-primary/30 bg-primary/5 text-primary font-mono text-sm animate-pulse">
          [POSTULACIÓN_ENVIADA_CON_ÉXITO]
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="https://github.com/usuario/repo"
            value={repoUrl}
            onChange={(e) => {
              setRepoUrl(e.target.value);
              if (localError) setLocalError(null); 
            }}
            disabled={isApplying}
            required
            label="Repositorio GitHub"
            className={localError ? "border-secondary" : ""}
          />
          
          {localError && (
            <p className="text-[10px] font-mono text-secondary uppercase animate-pulse">
              {">"} {localError}
            </p>
          )}

          <Button 
            variant={localError ? "secondary" : "primary"} 
            type="submit" 
            className="w-full text-xs"
            disabled={isApplying || !repoUrl}
          >
            {isApplying ? "PROCESANDO..." : "SUBMIT APPLICATION"}
          </Button>
        </form>
      )}
    </Card>
  );
}