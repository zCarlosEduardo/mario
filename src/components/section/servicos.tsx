import Image from 'next/image';
import coin from "../../assets/img/cpoin-removebg-preview 1.svg";
import marioLuigi from "../../assets/img/MarioLuigi.svg";
import "../../assets/style/animateimage.css";

export default function Servicos() {
  return (
    <article className="flex flex-col text-center justify-center">
      <div className="mt-10 flex flex-col items-center">
        <Image
          src={coin}
          alt="Coin"
          width={96}
          height={96}
          className="object-center animated-coin"
        />
        <span className="uppercase text-blue-700 font-semibold">Conheça nossos</span>
        <h2 className="text-6xl font-bold text-zinc-900">Serviços</h2>
      </div>
      <div className="my-10 flex flex-wrap lg:flex-nowrap justify-center items-center">
        <div className="flex flex-wrap gap-5 mx-5 justify-center">
          {/* Serviço 1 */}
          <div className="bg-amber-500 rounded-md max-w-xs min-h-[11rem] max-h-64 flex flex-col justify-center p-4">
            <h3 className="text-zinc-900 font-bold text-2xl">Desentupimento de Canos</h3>
            <p className="text-zinc-900 text-xl my-1">Cansado de encanamentos entupidos? Nós temos a solução!</p>
          </div>
          {/* Serviço 2 */}
          <div className="bg-amber-500 rounded-md max-w-xs min-h-[11rem] max-h-64 flex flex-col justify-center p-4">
            <h3 className="text-zinc-900 font-bold text-2xl">Reparo de Vazamentos</h3>
            <p className="text-zinc-900 text-xl my-1">Detectamos e consertamos vazamentos rapidamente.</p>
          </div>
          {/* Serviço 3 */}
          <div className="bg-amber-500 rounded-md max-w-xs min-h-[11rem] max-h-64 flex flex-col justify-center p-4">
            <h3 className="text-zinc-900 font-bold text-2xl">Instalação de Tubulações</h3>
            <p className="text-zinc-900 text-xl my-1">Instalação profissional para todas as suas necessidades de encanamento.</p>
          </div>
          {/* Serviço 4 */}
          <div className="bg-amber-500 rounded-md max-w-xs min-h-[11rem] max-h-64 flex flex-col justify-center p-4">
            <h3 className="text-zinc-900 font-bold text-2xl">Inspeção de Encanamento</h3>
            <p className="text-zinc-900 text-xl my-1">Inspeção detalhada para garantir a saúde do seu sistema de encanamento.</p>
          </div>
        </div>
        <div className="hidden md:block md:w-6/12 lg:w-5/12 xl:w-4/12 max-w-xs mx-4">
          <Image
            src={marioLuigi}
            alt="Mario e Luigi lado a lado"
            width={384}
            height={384}
            className="w-full h-auto max-w-full max-h-96 object-contain"
          />
        </div>
      </div>
      <div className="h-96 w-screen bg_bluecontainer border-b-2 border-sky-500 md:hidden"></div>
    </article>
  );
}
