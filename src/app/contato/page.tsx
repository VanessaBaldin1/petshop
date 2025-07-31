//src/app/contato/page.tsx
import type { Metadata } from "next";
import estilos from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Entre em contato conosco",
};

export default function Contato() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sed,
        quaerat at perferendis minima assumenda. Unde qui quidem eligendi iste
        doloribus quis asperiores in praesentium ut, accusantium, incidunt
        doloremque repudiandae.
      </p>
    </section>
  );
}
