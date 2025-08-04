//src/app/posts/[id]/page.tsx

import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";

// pesquisar depois na documentação do next e na IA sobre Promise no next

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const resultado = await fetch(`http://localhost:2112/posts`, {
    next: { revalidate: 0 },
  });

  if (!resultado.ok) {
    throw new Error("Erro ao buscar o post " + resultado.statusText);
  }

  const posts: Post = await resultado.json();

  const { id } = await params;

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
