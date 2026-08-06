import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, LogOut, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="py-4 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-semibold text-[26px]">
          Task
          <span className="text-zinc-400">Master</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost">
                Pranish Chaulagain
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            }
          />

          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center gap-2 px-1.5 py-1">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium shrink-0">
                PC
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Pranish Chaulagain
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  pc@pranishchaulagain.com.np
                </p>
              </div>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              variant="destructive"
              onClick={() => console.log("Logout")}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
