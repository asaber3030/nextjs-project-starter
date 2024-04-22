"use client"

import { LogoutButton } from "@/app/_components/user/logout-button";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession()

  return (
    <div>
      <code>{JSON.stringify(session)}</code>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
}
 
export default Home;