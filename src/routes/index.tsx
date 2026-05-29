import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Welcome Austine" },
      { name: "description", content: "A warm welcome to Austine." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.15_280/0.4),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.85_0.15_200/0.4),transparent_50%)]" />
      <div className="text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Hello there
        </p>
        <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl">
          Welcome, Austine
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          So glad to have you here.
        </p>
      </div>
    </main>
  );
}
