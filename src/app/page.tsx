import "./globals.css";
import "../assets/style/background.css";
import { Press_Start_2P } from "next/font/google";
import Head from "next/head";
import NavMenu from "@/components/navmenu";
import Servicos from "@/components/section/servicos";
import Planos from "@/components/section/planos";
import Contato from "@/components/section/contato";
import RodaPe from "@/components/rodape";

const press2p = Press_Start_2P({
  weight: "400",
  preload: false,
});

export default function Home() {
  return (
    <html className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./favoicon.svg" type="image/x-icon" />
      </Head>
      <body>
        <NavMenu />
        <main>
          <section
            id="home"
            className="h-dvh bg_mario_Luigi_dark flex items-center justify-center"
          >
            <div className="flex justify-center flex-col items-center bottom-0 text-center text-white">
              <span className=" text-zinc-200 font-semibold ">
                Os Encantadores do Queens!
              </span>
              <h1 className="text-8xl font-bold">Super Mario</h1>
              <p className="text-xl  max-w-xl">
                Mario e Luigi, os encanadores mais confiáveis do Queens, estão
                aqui para resolver todos os seus problemas de encanamento!
              </p>
              <div className="mt-10 flex flex-row gap-8 text-center">
                <div>
                  <a
                    href=""
                    style={press2p.style}
                    className="p-4 bg-blue-700 rounded-md hover:bg-lime-700 transition-colors"
                  >
                    Agende Agora
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    style={press2p.style}
                    className="p-4 border-2 border-solid rounded-md max-md:hidden text-center hover:bg-white hover:text-zinc-900 transition-colors"
                  >
                    Peça um Orçamento
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="servicos" className="min-h-dvh bg-white">
            <Servicos />
          </section>
          <section id="planos" className=" bg-sky-500 ">
            <Planos />
          </section>
          <section
            id="contato"
            className="bg-red-600 flex justify-center min-h-dvh"
          >
            <Contato />
          </section>
        </main>
        <footer>
          <RodaPe />
        </footer>
      </body>
    </html>
  );
}
