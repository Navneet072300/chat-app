import SideBar from "@/app/components/SideBar";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="">
      <SideBar className=" hidden lg:block" />
      <Separator orientation="vertical" className=" my-4 text-black" />
    </div>
  );
};

export default Home;
