import ChatArea from "@/app/components/ChatArea";
import SideBar from "@/app/components/SideBar";
import UserChat from "@/app/components/UserChat";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[1]">
        {" "}
        <SideBar />
      </div>
      <Separator orientation="vertical" className="h-full text-black" />
      <div className="flex-[2] ">
        {" "}
        <UserChat />
      </div>
      <Separator orientation="vertical" className="h-full text-black" />
      <div className="flex-[4] ">
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
