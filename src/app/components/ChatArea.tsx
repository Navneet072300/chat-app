import ChatNavbar from "./ChatNavbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizontal, Smile } from "lucide-react";

const ChatArea = () => {
  // const handleSend = () => {
  //     if (input.trim()) {
  //       setMessages((prevMessages) => [
  //         ...prevMessages,
  //         { text: input, sender: "user" },
  //       ]);
  //       setInput(""); // Clear input after sending
  //     }
  //   };

  return (
    <>
      <div>
        <ChatNavbar />
      </div>
      <div></div>
      <div className="flex fixed bottom-0 m-5 w-full max-w-sm items-center justify-between space-x-2">
        <span className="flex items-center justify-center">
          <Button variant="ghost">
            <Smile className="text-xl font-semibold cursor-pointer" />
          </Button>
          <Button variant="ghost">
            {" "}
            <Paperclip className="text-xl font-semibold cursor-pointer" />
          </Button>
        </span>
        <span className=" border-[3px] rounded-lg border-black">
          <Input
            type="text"
            placeholder="Type a message"
            className="flex-grow px-4 py-2 w-[40rem] h-[3.5rem]"
          />
        </span>
        <span className="text-right">
          <Button variant="ghost">
            <SendHorizontal className="text-xl font-semibold cursor-pointer" />
          </Button>
        </span>
      </div>
    </>
  );
};

export default ChatArea;
