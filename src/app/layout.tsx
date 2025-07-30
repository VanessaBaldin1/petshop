import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Configura variáveis para as fontes

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// bom usar o display swap para troca de fontes suave nas paginas
const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetShop", //nome do projeto
  description: "Mini portal de PetShop com notícias, produtos e muito mais", //descrição que aparece no buscador do google
  keywords: ["petshop", "animais", "cachorros", "gatos"],
  authors: [
    {
      name: "Vanessa",
      url: "https://github.com/VanessaBaldin1",
    },
  ],
};

// o header abaixo é para aparecer em todas as paginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
        <header>
          <h1>PetShop</h1>
          <nav>
            <Link href="">Blog</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </header>
        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
