import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="text-xl font-bold text-gray-900">Taskify</div>
        </div>
        <div className="flex items-center">
          <Button size={"sm"} variant={"outline"} asChild>
            <Link
              href="/sign-in"
              className="text-sm hover:no-underline text-gray-900"
            >
              Sign in
            </Link>
          </Button>
          <Button size={"sm"} variant={"default"} asChild>
            <Link
              href="/sign-up"
              className="ml-4 text-sm no-underline text-gray-900"
            >
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
