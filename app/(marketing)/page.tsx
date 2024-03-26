import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managmente
        </div>
        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 text-center">
          Welcome to the marketing page!
        </h1>
        <div className="text-3xl mt-3 md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          work in progress...
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center">
        Collaborate, manage projects, and reach new productivty heights. Use the
        app to manage your tasks, projects, and teams.
      </div>
      <Button className="mt-4" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
