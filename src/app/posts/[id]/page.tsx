//src/app/posts/[id]/page.tsx

import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

// pesquisar depois na documentação do next e na IA sobre Promise no next

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

async function buscarPostPorId(id: string): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single<Post>();

  //validação de erro

  //esse codigo PGRST116 é um código interno da API Postgre usado pelo Supabase.
  //Na prática, indica que se a query single não retornar nenhum item, ou seja, zero resultados, ele dispara esse código e com isso chamamos a função notFound (que por sua vez carrega a page not-found.tsx)
  if (error?.code === "PGRST116") {
    notFound();
  }

  if (error) {
    throw new Error("Erro ao buscar post: " + error.message);
  }

  const post: Post = data;

  return post;
}

export async function generateMetadata({ params }: DetalhePostProps) {
  const { id } = await params;
  //chamada da função buscarPostPorId
  const post = await buscarPostPorId(id);

  return {
    title: post.titulo + " | PetShop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;

  const post: Post = await buscarPostPorId(id);

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
