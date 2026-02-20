import { RainEffect } from "../components/RainEffect";
import { LoginForm } from "../components/LoginForm";
import { JobList } from "../components/JobList";
import { useCandidate } from "../hooks/useCandidate";

export default function Home() {
  const { candidate, loading, error, login, applyToJob } = useCandidate();

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start p-8">
      <RainEffect />

      <div className="relative z-10 w-full max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-display text-primary text-glow-cyan mb-2">
            CYBER-RECRUITMENT SYSTEM
          </h1>
          {candidate && (
            <p className="font-mono text-secondary text-sm tracking-[0.2em]">
              AGENTE: {candidate.firstName.toUpperCase()} {candidate.lastName.toUpperCase()} // ID: {candidate.candidateId}
            </p>
          )}
        </header>

        {!candidate ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <LoginForm onLogin={login} loading={loading} error={error} />
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-1000">
            <h2 className="text-2xl font-mono text-foreground border-b border-primary/30 pb-2 inline-block">
              {">"} POSICIONES_DISPONIBLES
            </h2>
            <JobList onApply={applyToJob} isApplying={loading} />
          </div>
        )}
      </div>
    </main>
  );
}