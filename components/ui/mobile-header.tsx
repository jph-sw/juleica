"use client";

import { Expand, Menu } from "lucide-react";
import { useState } from "react";
import { NavItem } from "../navbar";
import { Button } from "./button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MobileHeader(props: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden h-[5.5vh] px-4 border-b w-full flex justify-between items-center">
        <Link href={"/"} className="text-3xl">
          🎲
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="min-h-[50vw] bg-gradient-to-b from-background to-[#94f2e960]">
          <div className="flex flex-col gap-3 p-4">
            {props.items.map((e, i) => (
              <div key={i}>
                <Button
                  className="w-full"
                  variant={"outline"}
                  size={"lg"}
                  key={i}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={e.href}>{e.label}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
