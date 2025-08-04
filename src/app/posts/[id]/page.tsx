//src/app/posts/[id]/page.tsx

import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

export default function DetalhePost() {
  return (
    <article className={estilos.conteudo}>
      <h2>Titulo...</h2>
      <Container>
        <h3>Categoria...</h3>
        <p>Descrição...</p>
      </Container>
    </article>
  );
}
