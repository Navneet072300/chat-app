import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Phone, Search, Video } from "lucide-react";

const ChatNavbar = () => {
  return (
    <div className=" m-4 p-3 shadow-lg  rounded-lg">
      <nav className=" flex items-center justify-between">
        <div className=" flex items-center justify-start gap-6">
          <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Baby"
            alt="avatar"
          />
          <h1 className=" flex-row justify-items-center">
            <p className=" text-xl font-semibold">User</p>
            <p className=" font-medium text-green-400">online</p>
          </h1>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Phone />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Audio Call</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Video />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Video Call</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Search />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </div>
  );
};

export default ChatNavbar;
