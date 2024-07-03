"use client";
import { Button } from "@/components/ui/button";
import { Spiele } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <ul className="w-full">
        {Spiele.map((e, i) => (
          <li key={i} className="mb-6">
            <div
              className={`group font-semibold text-xl flex gap-2`}
              id={e.label}
            >
              <Link href={e.href}>{e.label}</Link>
              <span className="hidden group-hover:block">#</span>
            </div>
            {/* <div>
              <ul>
                {e.children &&
                  e.children.map((e, i) => (
                    <li key={i}>
                      <Button variant={"link"} className="p-2 text-lg" asChild>
                        <Link className="text-wrap" href={e.href}>
                          {e.label}
                        </Link>
                      </Button>
                    </li>
                  ))}
              </ul>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
