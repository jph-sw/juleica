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
        <div className="min-h-[50vw] bg-gradient-to-b from-background to-sky-100">
          <div className="flex flex-col gap-3 p-4">
            {props.items.map((e, i) => (
              <div key={i}>
                {e.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full"
                        size={"lg"}
                      >
                        {e.label}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[50vw]">
                      <DropdownMenuLabel asChild>
                        <div className="flex justify-between items-center">
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={"/spiele"}
                          >
                            Spiele
                          </Link>
                          <Link
                            href={"/spiele"}
                            onClick={() => setIsOpen(false)}
                          >
                            <Expand size={16} />
                          </Link>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {e.children.map((e, i) => (
                        <DropdownMenuItem key={i}>
                          <Link
                            href={"/spiele/" + e.name}
                            onClick={() => setIsOpen(false)}
                          >
                            {e.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
