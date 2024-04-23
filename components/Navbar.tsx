"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  EllipsisVerticalIcon,
  PlusIcon,
  Share2Icon,
  XIcon,
  MenuIcon,
  SearchIcon,
  Ellipsis,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Link from "next/link";
export const Navbar = () => {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <div className="flex gap-2 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"sm"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="bg-background/95 h-svh flex flex-col p-2"
          >
            <form className="flex px-2 items-center w-full rounded-3xl bg-muted pl-2">
              <SearchIcon size={"20"} className="ml-2" />
              <Input
                value={input}
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
                className="grow w-full border-none focus-visible:outline-none focus-visible:ring-0 rounded-none bg-transparent border-transparent ring-transparent placeholder:text-foreground"
              />
            </form>
            <ScrollArea className="grow">
              <Label>Previous 7 days</Label>
            </ScrollArea>
            <Link href="/settings">

            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>Nils Reich</div>
                </div>
                <Button variant="ghost">
                  <Ellipsis />
                </Button>
            </div>
            </Link>

          </SheetContent>
        </Sheet>
        <div>New Chat</div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"} size={"sm"}>
            <EllipsisVerticalIcon size={"20"} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PlusIcon size={"20"} className="mr-2" />
            <span>New chat</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <XIcon size={"20"} className="mr-2" />
            <span>Delete chat</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2Icon size={"20"} className="mr-2" />
            <span>Share chat</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
