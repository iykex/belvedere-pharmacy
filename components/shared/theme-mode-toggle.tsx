"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { flushSync } from "react-dom";
import "@/styles/3d-toggle.css";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  function changeTheme(theme: string) {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setTheme(theme);
        });
      });
      return;
    } else {
      setTheme(theme);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent backdrop-blur-3xl group hover:bg-transparent border-0"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 group-hover:scale-120 group-hover:text-primary stroke-3 dark:group-hover:scale-0 duration-300 ease-in-out" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:group-hover:scale-120 group-hover:text-primary stroke-3 duration-300 ease-in-out" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
