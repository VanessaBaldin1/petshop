//src/app/not-found.tsx

import type { Metadata } from "next";
import estilos from "./not-found.module.css";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pagina não encontrada | PetShop",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! Página não encontrada!</h2>
      <Container>
        <div className={estilos.imagem404}>
          <img
            src="/images/404.svg"
            alt="Cachorrinho com cara triste e nariz vermelho com o símbolo de interrogação"
          />

          <p>
            <Link href="/">Voltar para a página inicial</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
