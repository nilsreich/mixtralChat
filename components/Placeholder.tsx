import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AudioLinesIcon } from "lucide-react";
export const Placehoder = ({ input }: { input: string }) => {
  return (
    <>
      {input.trim() === "" ? (
        <>
          <div className="text-5xl font-medium">Hello nils</div>
          <div className="text-2xl font-medium text-muted-foreground">
            Wie kann ich dir heute helfen?
          </div>
          <div className="space-y-2 mt-12">
            <div className="hover:bg-muted border rounded p-2">
              Erstelle eine Präsentation
            </div>
            <div className="hover:bg-muted border rounded p-2 flex items-center gap-2">
              Schreibe eine{" "}
              <Select>
                <SelectTrigger className="border-none w-min">
                  <SelectValue placeholder="höffliche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">freundliche</SelectItem>
                  <SelectItem value="dark">kurze</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              Mail
            </div>
            <div className="hover:bg-muted border rounded p-2">
              Verfasse eine Kündigung
            </div>
            <div className="hover:bg-muted border rounded p-2">
              Erstelle eine React app
            </div>
          </div>
        </>
      ) : (
        <div className=" h-svh w-full flex">
          <div className="m-auto text-background bg-foreground rounded-full p-2">
            <AudioLinesIcon />
          </div>
        </div>
      )}
    </>
  );
};
