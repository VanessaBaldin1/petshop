import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetShop", //nome do projeto
  description: "Mini portal de PetShop com notícias, produtos e muito mais", //descrição que aparece no buscador do google
};

// o header abaixo é para aparecer em todas as paginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>PetShop</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
