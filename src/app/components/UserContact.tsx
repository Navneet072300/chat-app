import { data } from "@/userData/data";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserContact = () => {
  return (
    <div className="space-y-4 h-[37rem]">
      <ScrollArea className="h-full">
        <div className="p-4">
          {data.map((user) => (
            <div
              key={user.userId}
              className="flex items-center space-x-4 p-4 hover:bg-[#e5e5e5] rounded-lg mb-2"
            >
              <img
                src={user.avatar}
                alt={`${user.username}'s avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <span className="font-medium text-lg">{user.username}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default UserContact;
