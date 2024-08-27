"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        router.push("/auth/login");
      } else {
        toast.error(result.error || "Logout failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Error:", error);
    }
  };

  return (
    <Button variant="ghost" onClick={handleLogout}>
      <span className=" flex items-center justify-center gap-2 text-xl font-semibold">
        Logout <LogOut />
      </span>
    </Button>
  );
};

export default Logout;
