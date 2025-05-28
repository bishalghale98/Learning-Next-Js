"use client";

import React from "react";
import {
  ChevronDown,
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
} from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface DashHeadProps {
  onToggleSidebar?: () => void;
  user?: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  className?: string;
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { label: "Profile", icon: <User className="h-4 w-4 mr-2" /> },
  { label: "Settings", icon: <Settings className="h-4 w-4 mr-2" /> },
  { label: "Notifications", icon: <Bell className="h-4 w-4 mr-2" /> },
];

const DashHead: React.FC<DashHeadProps> = ({
  onToggleSidebar,
  user = { name: "Bishal Ghale", initials: "BG" },
  className,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between border-b bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-3 shadow-sm",
        className
      )}
    >
      {/* Search section */}
      <div className="flex flex-1 items-center max-w-md">
        {onToggleSidebar && (
          <button
            className="mr-2 md:hidden rounded-md p-2 hover:bg-muted transition-colors"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
        )}

        <div className="relative w-full">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search anything..."
            className="w-full pl-9 pr-4 h-9 text-sm placeholder:text-muted-foreground focus-visible:ring-2 rounded-md transition-colors"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* User controls */}
      <div className="ml-4 flex items-center gap-2 sm:gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative h-8 w-8 rounded-full hover:bg-accent"
          aria-label="Notifications"
        >
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
        </Button>

        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 p-1 hover:bg-accent focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
              aria-label="User menu"
            >
              <Avatar className="h-8 w-8 rounded-full border-2 border-primary/50">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={`${user.name}'s profile picture`}
                  width={32}
                  height={32}
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary text-primary-foreground font-medium text-sm">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {user.name}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform",
                  isDropdownOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 rounded-md border bg-popover shadow-lg overflow-hidden p-1"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuLabel className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-muted" />

            {DEFAULT_MENU_ITEMS.map((item) => (
              <DropdownMenuItem
                key={item.label}
                className="flex items-center px-2 py-1.5 text-sm cursor-pointer rounded-sm outline-none hover:bg-accent focus:bg-accent transition-colors"
                onClick={item.onClick}
              >
                {item.icon}
                {item.label}
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-muted" />
            <DropdownMenuItem className="text-red-500 cursor-pointer flex items-center border-none focus:outline-none">
              <LogOut className="mr-2 pl-4 h-4 w-4" />
              <button onClick={() => signOut()}>Log out</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashHead;
