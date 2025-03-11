// app/dashboard/page.tsx
"use client";

import { signOut, useSession } from "@/lib/auth-client";

export default function Dashboard() {
  const { data: session } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please sign in</p>;

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={() => signOut({ redirectTo: "/login" })}>
        Sign Out
      </button>
    </div>
  );
}