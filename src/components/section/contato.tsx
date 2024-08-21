import luckyblock from "../../assets/img/luckyblock.svg";
import marioPixel from "../../assets/img/mariosmw.svg";

import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: "400",
  preload: false,
});

export default function Contato() {
  return (
    <article className="flex md:flex-row max-md:flex-col md:gap-40 items-center justify-center max-md:text-center mx-8 m-2">
      <div>
        <span className="uppercase text-zinc-900 font-semibold">entre em</span>
        <h2 className="font-bold uppercase text-6xl text-white">Contato</h2>
        <p className="mt-10 text-xl text-zinc-100 max-w-xl">
          Entre em contato com Mario e Luigi hoje mesmo e experimente o melhor
          serviço de encanamento do Queens!
        </p>
        <a href="" style={press2p.style} className="">
          <button
            className="mt-6 text-zinc-900 p-3 rounded-md border-solid
                 border-zinc-900 border-2 bg-white py-6 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            Entre em Contato
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={luckyblock.src}
          alt="luckyblock"
          className="w-22 h-22 object-center mt-4"
        />
        <img
          src={marioPixel.src}
          alt="Mario do Super Mario World"
          className="w-22 h-22 object-center animated-marioworld"
        />
      </div>
    </article>
  );
}
