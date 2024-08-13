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
      <header className="fixed w-full top-0 left-0 backdrop-blur-md bg-slate-900">
      <NavMenu />
      </header>
      <main>
        <section id="home" className="h-dvh bg-slate-800">
          <div className="flex justify-center items-center bottom-0 text-fuchsia-50 text-8xl pt-56">
            <h1>Super Mario</h1>
          </div>
        </section>
        <section id="servicos" className="h-dvh bg-zinc-50">
          <Servicos></Servicos>
        </section>
        <section id="planos" className="h-dvh bg-white ">
          <Planos />
        </section>
        <section id="contato" className="h-dvh bg-gray-100 flex justify-center">
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
