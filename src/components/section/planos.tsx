import "../../assets/style/background.css";
import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: "400",
  preload: false,
});

export default function Planos() {
  return (
    <article className="text-black flex flex-col items-center text-center">
      <div className="my-7">
        <span className="uppercase font-semibold">Conheça nossos</span>
        <h2 className="text-white text-6xl font-bold">Planos Especiais</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
        {/* Plano Básico */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900 text-start">
              Plano Básico
            </h2>
            <p className="text-red-500 text-xl text-start font-medium">
              Agora com 20% de desconto!
            </p>
            <ul className="mt-4 text-zinc-700 text-start flex flex-col gap-1 text-lg">
              <li>Inspeção inicial gratuita</li>
              <li>Reparos de vazamentos simples</li>
              <li>Desentupimento de ralos e pias</li>
              <li>Atendimento rápido e eficiente</li>
              <li>
                Garantia de 30 dias para qualquer problema relacionado ao
                serviço prestado
              </li>
            </ul>
          </div>
          <a
            href="#"
            className={`block mt-6 bg-blue-700 text-white text-center py-4 px-4 rounded-md hover:bg-lime-700 transition-colors ${press2p.className}`}
          >
            Compre Agora
          </a>
        </div>
        
        {/* Plano Premium */}
        <div className="bg-blue-700 shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white text-start">
              Plano Premium
            </h2>
            <p className="text-zinc-200 text-xl text-start font-medium">
              Desconto especial de 40%!
            </p>
            <ul className="mt-4 text-zinc-300 text-start flex flex-col gap-1 text-lg">
              <li>Inspeção completa e consultoria especializada</li>
              <li>
                Reparos extensivos e instalação de novos componentes se
                necessário
              </li>
              <li>Manutenção preventiva regular</li>
              <li>Atendimento prioritário e consultoria contínua</li>
              <li>
                Garantia de 90 dias para qualquer problema relacionado ao
                serviço prestado
              </li>
            </ul>
          </div>
          <a
            href="#"
            className={`block mt-6 bg-white border-2 border-zinc-800 text-zinc-900 text-center py-4 px-4 rounded-md hover:text-white hover:bg-zinc-800 transition-colors ${press2p.className}`}
          >
            Compre Agora
          </a>
        </div>
        
        {/* Plano Intermediário */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900 text-start">
              Plano Intermediário
            </h2>
            <p className="text-red-500 text-xl text-start font-medium">
              Aproveite 30% de desconto!
            </p>
            <ul className="mt-4 text-zinc-700 text-start flex flex-col gap-1 text-lg">
              <li>Inspeção e análise detalhada do sistema de encanamento</li>
              <li>Reparos e substituições de peças necessárias</li>
              <li>Desentupimento de tubulações e ralos</li>
              <li>Manutenção preventiva inclusa</li>
              <li>
                Garantia de 60 dias para qualquer problema relacionado ao
                serviço prestado
              </li>
            </ul>
          </div>
          <a
            href="#"
            className={`block mt-6 bg-blue-700 text-white text-center py-4 px-4 rounded-md hover:bg-lime-700 transition-colors ${press2p.className}`}
          >
            Compre Agora
          </a>
        </div>
      </div>
      <div className="h-32 w-screen bg_redcontainer"></div>
    </article>
  );
}
