//src/app/produtos/page.tsx
import type { Metadata } from "next";
import estilos from "./produtos.module.css";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Conheça nossos Produtos",
};

export default function Produtos() {
  return (
    <section className={estilos.conteudo}>
      <h2>Produtos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        tempora dignissimos architecto id dolore culpa harum consequuntur
        consectetur voluptatem reprehenderit, eaque deserunt ratione laudantium
        ullam est quibusdam commodi alias doloremque?
      </p>
    </section>
  );
}
