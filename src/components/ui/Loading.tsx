export function Loading({ message = "PROCESANDO..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 text-primary">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin box-glow-cyan"></div>
      <p className="font-mono text-sm tracking-widest uppercase animate-pulse">
        {message}
      </p>
    </div>
  );
}