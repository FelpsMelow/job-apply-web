"use client";

import PrivateRoute from "./components/organisms/guards/PrivateRoute";

export default function Home() {
  return (
    <PrivateRoute>
      <main style={{ padding: 24 }}>
        <h1>Home</h1>
        <p>Usuário autenticado com sucesso.</p>
      </main>
    </PrivateRoute>
  );
}
