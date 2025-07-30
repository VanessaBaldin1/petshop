//src/app/not-found.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina não encontrada | PetShop",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section>
      <h2>Ops! Página não encontrada!</h2>
    </section>
  );
}
