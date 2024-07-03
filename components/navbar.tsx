import { Spiele } from "@/lib/utils";
import { Header } from "./ui/header";
import { MobileHeader } from "./ui/mobile-header";

export interface NavItem {
  label: string;
  name?: string;
  href: string;
  children?: NavItem[];
}

const items: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Spiele",
    href: "/spiele",
    children: Spiele.map((e) => ({
      label: e.label,
      href: e.href,
      name: e.name,
    })),
  },
];

export function Navbar() {
  return (
    <>
      <Header />
      <MobileHeader items={items} />
    </>
  );
}
