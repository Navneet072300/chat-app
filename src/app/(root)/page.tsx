"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return router.push("/auth/sign-up");
};

export default HomePage;
