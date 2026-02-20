import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Loading } from "./ui/Loading";

interface LoginFormProps {
  onLogin: (email: string) => Promise<boolean>; 
  loading: boolean;
  error: string | null;
}

export function LoginForm({ onLogin, loading, error }: LoginFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      await onLogin(email);
    }
  };

  return (
    <Card glow="cyan" className="max-w-md w-full mx-auto">
      <h2 className="text-2xl font-display text-primary mb-6 text-center animate-pulse-glow">
        IDENTIFICACIÓN REQUERIDA
      </h2>

      {error && (
        <div className="mb-6 p-3 border border-destructive text-destructive font-mono text-sm box-glow-pink">
          [ERROR]: {error}
        </div>
      )}

      {loading ? (
        <Loading message="VERIFICANDO CREDENCIALES EN LA RED..." />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input 
            label="Email de Agente"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@dominio.com"
            required
            disabled={loading}
          />
          <Button type="submit" className="w-full" disabled={!email || loading}>
            INICIAR SESIÓN
          </Button>
        </form>
      )}
    </Card>
  );
}