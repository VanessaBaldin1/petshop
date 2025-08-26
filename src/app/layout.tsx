// esse arquivo que tem todas as paginas e projeto
import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";

import Cabecalho from "@/components/Cabecalho";

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "petshop",
    //Se tivessemos ícones específicos para dispositivos Apples, você também colocaria aqui.
  },
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
        <Cabecalho />

        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
