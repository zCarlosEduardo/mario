import NavMenu from "@/components/navmenu";
import Servicos from "@/components/section/servicos";
import Contato from "@/components/section/contato";
import RodaPe from "@/components/rodape";
import Head from 'next/head'
import Planos from "@/components/section/planos";

export default function Home() {
  return (
    <html>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="scroll-smooth">
      <header className="fixed w-full top-0 left-0 backdrop-blur-md bg-white">
      <NavMenu />
      </header>
      <main>
        <section id="home" className="h-dvh bg-slate-800 flex items-center">
          <div className="flex justify-center flex-col items-center bottom-0 text-center text-white">
            <p className=" text-zinc-300">Os Encantadores do Queens!</p>
            <h1 className="text-8xl font-bold">Super Mario</h1>
            <p className="">Mario e Luigi, os encanadores mais confiáveis do Queens, estão aqui para
               resolver todos os seus problemas de encanamento!</p>
               <div className="mt-10 flex flex-row">
                <a href="" className="p-4 bg-blue-700  rounded-md m-4"><button>Agende Agora</button></a>
                <a href="" className="p-4 border-2 border-solid rounded-md hidden"><button className="">Peça um Orçamento</button></a>
               </div>
          </div>
        </section>
        <section id="servicos" className="min-h-dvh bg-white">
          <Servicos></Servicos>
        </section>
        <section id="planos" className=" bg-sky-500 ">
          <Planos />
        </section>
        <section id="contato" className="bg-red-600 flex justify-center h-dvh">
          <Contato></Contato>
        </section>
      </main>
      <footer>
      <RodaPe />
      </footer>
      </body>
    </html>
  )
}
