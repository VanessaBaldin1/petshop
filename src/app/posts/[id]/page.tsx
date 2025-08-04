//src/app/posts/[id]/page.tsx

import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";

// pesquisar depois na documentação do next e na IA sobre Promise no next

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;

  //uma nova consulta usando o awai com fetch
  const resultado = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resultado.ok) {
    throw new Error("Erro ao buscar o post " + resultado.statusText);
  }

  const post: Post = await resultado.json();

  //desestruturação const {titulo, categoria , descrição} = post;
  // chamada no html é {titulo}

  return (
    <article className={estilos.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
