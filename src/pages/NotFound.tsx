import { Link } from "react-router-dom";
import { RainEffect } from "../components/RainEffect";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4">
      <RainEffect />

      <div className="relative z-10 text-center p-10 border border-destructive box-glow-pink bg-card/85 backdrop-blur-md rounded-lg">
        <h1 className="text-7xl font-display text-destructive text-glow-pink mb-4 animate-flicker">
          404
        </h1>
        <h2 className="text-2xl font-mono text-foreground mb-4 uppercase tracking-widest">
          Brecha de Seguridad
        </h2>
        <p className="text-muted-foreground mb-8 font-mono">
          [ERROR] Sector de memoria no encontrado o ruta corrupta.
        </p>
        
        <Link 
          to="/" 
          className="px-6 py-3 bg-secondary/10 border border-secondary text-secondary hover:bg-secondary/20 hover:box-glow-pink transition-all duration-300 font-bold uppercase tracking-widest inline-block"
        >
          Reiniciar Conexión
        </Link>
      </div>
    </main>
  );
}