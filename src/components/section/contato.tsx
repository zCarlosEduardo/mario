import Image from 'next/image';
import luckyblock from "../../assets/img/luckyblock.svg";
import marioPixel from "../../assets/img/mariosmw.svg";

import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: "400",
  preload: false,
});

export default function Contato() {
  return (
    <article className="flex flex-col md:flex-row gap-8 md:gap-40 items-center justify-center text-center md:text-left mx-8 my-4">
      <div>
        <span className="uppercase text-zinc-900 font-semibold">entre em</span>
        <h2 className="font-bold uppercase text-6xl text-white">Contato</h2>
        <p className="mt-10 text-xl text-zinc-100 max-w-xl">
          Entre em contato com Mario e Luigi hoje mesmo e experimente o melhor
          serviço de encanamento do Queens!
        </p>
        <a href="/contato" aria-label="Entre em contato">
          <button
            className={`mt-6 text-zinc-900 p-3 rounded-md border-2 border-zinc-900 bg-white py-6 
                        hover:text-white hover:bg-zinc-900 transition-colors ${press2p.className}`}
          >
            Entre em Contato
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={luckyblock}
          alt="Lucky block"
          width={88}
          height={88}
          className="object-center mt-4"
        />
        <Image
          src={marioPixel}
          alt="Mario do Super Mario World"
          width={88}
          height={88}
          className="object-center mt-4 animated-marioworld"
        />
      </div>
    </article>
  );
}
