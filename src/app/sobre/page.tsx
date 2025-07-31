//src/app/sobre/page.tsx
import type { Metadata } from "next";
import estilos from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Sobre a nossa empresa",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aperiam
        qui asperiores porro iusto molestiae, laudantium harum, quis quam nulla,
        iste deleniti sunt vitae eveniet saepe. Autem itaque animi excepturi?
      </p>
    </section>
  );
}
