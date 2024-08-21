import coin from "../../assets/img/cpoin-removebg-preview 1.svg";
import marioLuigi from "../../assets/img/MarioLuigi.svg";
import "../../assets/style/animateimage.css";
import "../../assets/style/background.css";

export default function Servicos() {
  return (
    <article className="flex flex-col text-center justify-center">
      <div className="mt-10 items-center flex flex-col">
        <img
          src={coin.src}
          alt="Coin"
          className="w-22 h-22 object-center animated-coin "
        />
        <span className="uppercase text-blue-700 font-semibold">
          Conheça nossos
        </span>
        <h2 className=" text-6xl font-bold text-zinc-900">Serviços</h2>
      </div>
      <div className="my-10 flex flex-row max-lg:flex-wrap justify-center items-center">
        <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
          <div className="bg-amber-500 rounded-md max-w-96 min-h-44 max-h-64 flex flex-col justify-center">
            <h3 className="text-zinc-900 font-bold text-2xl mx-4">
              Desentupimento de Canos
            </h3>
            <p className="text-zinc-900 text-xl my-1 mx-10">
              Cansado de encanamentos entupidos? Nós temos a solução!
            </p>
          </div>
          <div className="bg-amber-500 rounded-md max-w-96 min-h-44 max-h-64 flex flex-col justify-center">
            <h3 className="text-zinc-900 font-bold text-2xl mx-4">
              Reparo de Vazamentos
            </h3>
            <p className="text-zinc-900 text-xl my-1 mx-10">
              Detectamos e consertamos vazamentos rapidamente.
            </p>
          </div>
          <div className="bg-amber-500 rounded-md max-w-96 min-h-44 max-h-64 flex flex-col justify-center">
            <h3 className="text-zinc-900 font-bold text-2xl mx-4">
              Instalação de Tubulações
            </h3>
            <p className="text-zinc-900 text-xl my-1 mx-10">
              Instalação profissional para todas as suas necessidades de
              encanamento.
            </p>
          </div>
          <div className="bg-amber-500 rounded-md max-w-96 min-h-44 max-h-64 flex flex-col justify-center">
            <h3 className="text-zinc-900 font-bold text-2xl mx-4">
              Inspeção de Encanamento
            </h3>
            <p className="text-zinc-900 text-xl my-1 mx-10">
              Inspeção detalhada para garantir a saúde do seu sistema de
              encanamento.
            </p>
          </div>
        </div>
        <div className="max-md:hidden mr-10 w-6/12">
          <img src={marioLuigi.src} alt="Mario e Luigi lado a lado" className="w-full h-full" />
        </div>
      </div>
      <div className="h-96 w-screen bg_bluecontainer border-b-2 border-sky-500 md:hidden"></div>
    </article>
  );
}
