import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search, UserRound, Users } from "lucide-react";
import UserContact from "./UserContact";

const UserChat = () => {
  return (
    <div className=" w-full">
      <div className="flex items-center justify-between m-5 font-semibold tracking-tight ">
        <div className="text-2xl">Chats</div>
        <div className="flex items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Users />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <UserRound />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create Group</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="relative mx-3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="text-gray-500" />
        </span>
        <Input
          type="search"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className=" m-4 ">
        <UserContact />
      </div>
    </div>
  );
};

export default UserChat;
