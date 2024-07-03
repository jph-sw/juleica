import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Spiel {
  label: string;
  name?: string;
  href: string;
  children?: Spiel[];
}

export const Spiele: Spiel[] = [
  {
    label: "🧊 Ice Breaker",
    name: "ice-breaker",
    href: "/spiele/ice-breaker",
    children: [
      { label: "Meine Top 5", href: "/spiele/ice-breaker/meine-top-5" },
      { label: "Speed-Dating", href: "/spiele/ice-breaker/speed-dating" },
      {
        label: "Blindes Kennenlernen",
        href: "/spiele/ice-breaker/blindes-kennenlernen",
      },
      {
        label: "Entweder... oder... Fragen",
        href: "/spiele/ice-breaker/entweder-oder-fragen",
      },
      {
        label: "Warheit oder Lüge?",
        href: "/spiele/ice-breaker/warheit-oder-luege",
      },
      {
        label: "Die einsame Insel",
        href: "/spiele/ice-breaker/die-einsame-insel",
      },
      { label: "Gruppenbildung", href: "/spiele/ice-breaker/gruppenbildung" },
      { label: "Der tolle Tom", href: "/spiele/ice-breaker/der-tolle-tom" },
    ],
  },
  {
    label: "😊 Kennenlern Spiele",
    name: "kennenlern-spiele",
    href: "/spiele/kennen-lern",
  },
  {
    label: "🔐 Escape Rooms",
    name: "escape-rooms",
    href: "/spiele/escape-rooms",
  },
  {
    label: "🏞️ Geländespiele",
    name: "gelaendespiele",
    href: "/spiele/gelaendespiele",
    children: [
      {
        label: "Herr der Ringe",
        href: "/spiele/gelaendespiele/herr-der-ringe",
      },
      {
        label: "Der Kampf um den Thron - ein Geländespiel nach Game of Thrones",
        href: "/spiele/gelaendespiele/der-kampf-um-den-thron-ein-gelaendespiel-nach-game-of-thrones",
      },
      {
        label: "Fortnite als Geländespiel",
        href: "/spiele/gelaendespiele/fortnite-als-gelaendespiel",
      },
    ],
  },
  {
    label: "🤝 Kennenlern-Spiele",
    name: "kennenlern-spiele-2",
    href: "/spiele/kennenlern-spiele",
  },
  { label: "🧠 KIM-Spiele", name: "kim-spiele", href: "/spiele/kim-spiele" },
  {
    label: "🏠 Kinderspiele für innen",
    name: "kinderspiele-fuer-innen",
    href: "/spiele/kinderspiele-fuer-innen",
  },
  {
    label: "🌳 Kinderspiele für draußen",
    name: "kinderspiele-fuer-draussen",
    href: "/spiele/kinderspiele-fuer-draussen",
  },
  {
    label: "🗣️ Kommunikationsspiele",
    name: "kommunikationsspiele",
    href: "/spiele/kommunikationsspiele",
  },
  {
    label: "🤝 Kooperationsspiele",
    name: "kooperationsspiele",
    href: "/spiele/kooperationsspiele",
  },
  {
    label: "🧩 Logik- & Rätsel-Spiele",
    name: "logik-raetsel-spiele",
    href: "/spiele/logik-raetsel-spiele",
  },
  {
    label: "❓ Quizfragen für Kinder",
    name: "quizfragen-fuer-kinder",
    href: "/spiele/quizfragen-fuer-kinder",
  },
  {
    label: "🔍 Reflexionsmethoden",
    name: "reflexionsmethoden",
    href: "/spiele/reflexionsmethoden",
  },
  {
    label: "🗺️ Schnitzeljagd-Ideen",
    name: "schnitzeljagd-ideen",
    href: "/spiele/schnitzeljagd-ideen",
  },
  {
    label: "👀 Wahrnehmungs-Spiele",
    name: "wahrnehmungs-spiele",
    href: "/spiele/wahrnehmungs-spiele",
  },
  { label: "🌲 Waldspiele", name: "waldspiele", href: "/spiele/waldspiele" },
  {
    label: "🛡️ Vertrauensspiele",
    name: "vertrauensspiele",
    href: "/spiele/vertrauensspiele",
  },
];
