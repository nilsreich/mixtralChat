"use client";
import { HeadphonesIcon, PlusIcon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const InputPanel = ({
  input,
  setInput,
}: {
  input: string;
  setInput: (value: string) => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    input.trim() && null;
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <Button className="rounded-full p-2 aspect-square  bg-foreground/50 text-foreground">
        <PlusIcon />
      </Button>
      <form
        className="flex gap-2 items-center w-full rounded-3xl bg-muted"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          value={input}
          placeholder="What do you want me to do?"
          onChange={(e) => setInput(e.target.value)}
          className="grow w-full border-none focus-visible:outline-none focus-visible:ring-0 rounded-none bg-transparent border-transparent ring-transparent p-6 placeholder:text-foreground"
        />
      </form>
      {input.trim() === "" ? (
        <Button className="rounded-full p-2 aspect-square " variant={"default"}>
          <HeadphonesIcon />
        </Button>
      ) : (
        <Button className="rounded-full p-2 aspect-square " variant={"default"}>
          <SendIcon />
        </Button>
      )}
    </>
  );
};
