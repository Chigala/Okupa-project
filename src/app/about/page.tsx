import { ListFilter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const avatarData: Array<{
    name: string;
    description: string;
    location: string;
    cancelledAT: Date;
  }> = [
    {
      name: "John Doe",
      description: "Airbnb update: reservation cancelled",
      location: "villarubia",
      cancelledAT: new Date(),
    },
    {
      name: "Harry Potter",
      description: "Greetings new listing alert: A house in the hood",
      location: "Ogudu",
      cancelledAT: new Date(),
    },
    {
      name: "james Fly",
      description: "Airbnb update reservation cancelled",
      location: "Lagos",
      cancelledAT: new Date(),
    },
  ];
  return (
    <div className="px-5 py-8 max-w-screen-md md:mx-auto">
      {/* header section */}

      <div className="flex justify-between items-center mb-16">
        <p className="text-2xl font-bold">Inbox</p>

        <ListFilter width={18} />
      </div>

      {/* header section */}
      <div className="flex gap-1 mx-auto justify-center pb-12 border-b border-slate-400">
        <div className="w-2 rounded-full h-2 bg-zinc-500"></div>
        <div className="w-2 rounded-full h-2 border border-slate-400"></div>
      </div>

      <div>
        {avatarData.map((data, index) => {
          return (
            <div key={index} className="border-b py-6 flex gap-4 border-slate-400">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-y-3 text-xs sm:text-sm">
                  <h1>{data.name} . <span className="text-slate-500">{data.location}</span> </h1>
                  <p>{data.description}</p>
                  <p className="text-slate-500">Cancelled. Jan 8-9</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
