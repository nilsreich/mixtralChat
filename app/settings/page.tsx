import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArchiveIcon,
  ArrowLeft,
  CircleDollarSignIcon,
  DatabaseBackupIcon,
  DrumIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";

export default function Setings() {
  return (
    <div className="flex flex-col p-4 ">
      <div className="flex gap-4 items-center sticky top-2">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <div className="font-semibold text-lg">Settings</div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Avatar>
          <AvatarImage
            className="w-6 h-6 "
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-semibold">Nils Reich</div>
      </div>
      <div>
        <div className="my-4 text-sm font-semibold">Account</div>
        <div className="flex gap-4 items-center">
          <MailIcon />
          <div>
            <div>Email</div>
            <div className="text-sm">nilsreich@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <CircleDollarSignIcon />
          <div>
            <div>Subscription</div>
            <div className="text-sm">ChatGPT Plus</div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <DatabaseBackupIcon />
          <div>
            <div>Data Controls</div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <ArchiveIcon />
          <div>
            <div>Archived Chats</div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <DrumIcon />
          <div>
            <div>Custom Instructions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
