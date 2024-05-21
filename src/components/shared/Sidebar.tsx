import { Home, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Card, Divider } from "@nextui-org/react";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 col-span-2 min-h-screen sticky">
      <div className="text-white text-center font-bold text-xl h-12 flex items-center justify-center">
        <h1>ACME</h1>
      </div>
      <nav className="flex flex-col gap-2 px-4 lg:px-5 py-1">
        <Card className="p-0 bg-transparent border-none">
          <Link href="/dashboard/fish">
            <div className="p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center hover:bg-green-400 cursor-pointer">
              <LayoutDashboard className="shrink-0" />
              <span className="truncate">All Products</span>
            </div>
          </Link>
        </Card>

        <Divider className="bg-red-500 border-2 my-3" />
        <Card className="p-0 bg-transparent border-none">
          <Link href="/">
            <div className="p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center hover:bg-green-400 cursor-pointer">
              <Home className="shrink-0" />
              <span className="truncate">Home</span>
            </div>
          </Link>
        </Card>
      </nav>
    </div>
  );
};

export default Sidebar;
