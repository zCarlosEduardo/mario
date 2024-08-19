import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: '400',
  preload: false,
})

export default function Contato() {
    return(
        <article className="flex flex-col text-center justify-center m-2">
            <div>
                <p className="uppercase text-zinc-900 font-semibold">entre em</p>
                <h2 className="font-bold uppercase text-6xl">
                    Contato
                </h2>
                <p className="mt-8">Entre em contato com Mario e Luigi hoje mesmo
                     e experimente o melhor serviço de encanamento do Queens!</p>
                <a href="" style={press2p.style} className=""><button  className="mt-4 text-zinc-900 p-3 rounded-md border-solid
                 border-zinc-900 border-2 bg-white">Entre em Contato</button></a>
            </div>
        </article>
    )
}