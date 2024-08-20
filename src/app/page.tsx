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
      </Head>
      <body>
        <NavMenu />
        <main>
          <section
            id="home"
            className="h-dvh bg_mario_Luigi_dark flex items-center justify-center"
          >
            <div className="flex justify-center flex-col items-center bottom-0 text-center text-white">
              <span className=" text-zinc-300 font-semibold ">Os Encantadores do Queens!</span>
              <h1 className="text-8xl font-bold">Super Mario</h1>
              <p className="text-xl ">
                Mario e Luigi, os encanadores mais confiáveis do Queens, estão
                aqui para resolver todos os seus problemas de encanamento!
              </p>
              <div className="mt-10 flex flex-row">
                <a
                  href=""
                  style={press2p.style}
                  className="p-4 bg-blue-700  rounded-md m-4"
                >
                  <button>Agende Agora</button>
                </a>
                <a
                  href=""
                  className="p-4 border-2 border-solid rounded-md hidden"
                >
                  <button className="">Peça um Orçamento</button>
                </a>
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
