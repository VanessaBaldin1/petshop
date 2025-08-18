//src/components/ListaPosts.tsx
"use client";
import ListaPosts from "@/components/ListaPosts";
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { useState } from "react";
import SemPosts from "./SemPosts";

//Configurando um tipo para este componente e, neste tipo, definimos a prop posts relacionando ela ao tipo Post criado anteriormente.

type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  // Gerando novo array de categorias usando map e garantindo que não há repetição de categorias usando spread e new Set.
  const categorias = [...new Set(posts.map((post) => post.categoria))];
  //Definindo o state com tipos null (quando não há categoria selecionada) ou string (que é o tipo para nomes/textos referentes às categorias).
  //Passamos null entre paranteses indicando que por padrão não há categoria selecionada.
  //<> no useState é pra tratar os dados como null e string
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>("saude");

  const postsFiltrados = categoriaAtiva
    ? posts.filter((post) => post.categoria === categoriaAtiva)
    : posts;

  return (
    <>
      <FiltroCategorias />

      {postsFiltrados.length === 0 && <SemPosts />}

      <div className={estilos.posts}>
        {postsFiltrados.map(({ id, titulo, subtitulo }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <h3>{titulo}</h3>
              <p>{subtitulo} </p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
