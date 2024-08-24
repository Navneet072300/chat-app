import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Archive,
  Brain,
  CircleFadingPlus,
  MessageCircleMore,
  Phone,
  Settings,
  Star,
} from "lucide-react";
import { Profile } from "./Avatar";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Chats
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-4">
              <MessageCircleMore />
              Chats
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Phone />
              Calls
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <CircleFadingPlus />
              Status
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="px-3 py-2 ">
          <Button variant="ghost" className="w-full justify-start gap-4">
            <Brain />
            AI
          </Button>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Star />
              Starred Message
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Archive />
              Archived Chats
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Settings />
              Settings
            </Button>
          </div>
          <Button variant="ghost" className="w-full justify-start gap-4 my-5">
            <Profile />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;