"use client";
import { InputPanel } from "@/components/InputPanel";
import { Navbar } from "@/components/Navbar";
import { Placehoder } from "@/components/Placeholder";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");

  return (
    <main className="max-h-svh h-svh flex flex-col">
      <div className="flex justify-between items-center pt-4 text-">
        <Navbar />
      </div>
      <ScrollArea className="grow p-4">
        <Placehoder input={input} />
      </ScrollArea>
      <div className="flex gap-2 p-2 m-2 rounded-lg  items-center">
        <InputPanel input={input} setInput={setInput} />
      </div>
    </main>
  );
}
