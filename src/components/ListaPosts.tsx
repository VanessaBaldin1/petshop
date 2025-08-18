//src/components/ListaPosts.tsx

import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { useState } from "react";

//Configurando um tipo para este componente e, neste tipo, definimos a prop posts relacionando ela ao tipo Post criado anteriormente.

type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  // Gerando novo array de categorias usando map e garantindo que não há repetição de categorias usando spread e new Set.
  const categorias = [...new Set(posts.map((post) => post.categoria))];

  const [categoriaAtiva, setCategoriaAtiva] = useState();

  return (
    <>
      <FiltroCategorias />
      <div className={estilos.posts}>
        {posts.map(({ id, titulo, subtitulo }) => (
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
