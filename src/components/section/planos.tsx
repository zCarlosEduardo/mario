import '../../assets/style/background.css';
import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: '400',
  preload: false,
})

export default function Planos() {
  return (
    <article className="text-black flex flex-col items-center text-center">
      <div className="my-7">
        <span className="uppercase font-semibold">Conheça nossos</span>
        <h2 className="text-white text-6xl font-bold">Planos Especiais</h2>
      </div>
      <div className="mt-4 mx-5">
        <div className="bg-white rounded-md py-10 px-4">
          <div className="text-start">
            <h3 className="font-bold text-4xl">Hatchling Plan</h3>
            <p className="text-red-500 font-semibold text-3xl my-2">Now 60% off!</p>
          </div>
          <div className="mt-11 mb-12 text-zinc-700 text-start">
            <p className="pb-1 text-xl">Single website </p>
            <p className="py-1 text-xl">One-click WordPress installs </p>
            <p className="py-1 text-xl">Free WordPress/cPanel website transfer</p>
            <p className="py-1 text-xl">Unmetered bandwidth </p>
            <p className="py-1 text-xl">Free SSL certificate </p>
            <p className="pt-1 text-xl">Free domain included </p>
          </div>
          <div className="top-4 relative mx-3">
            <button style={press2p.style} className="bg-blue-700 text-2xl  p-3 rounded-md text-white">
              Compre Agora
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse">
        <div className="bg-blue-700 rounded-md py-10 mt-10 px-4">
          <div className="text-start">
            <h3 className="font-bold text-zinc-50 text-4xl">Hatchling Plan</h3>
            <p className="text-zinc-100 font-semibold text-3xl my-2">Now 60% off!</p>
          </div>
          <div className="mt-11 mb-12 text-zinc-200 text-start">
            <p className="pb-1 text-xl">Single website </p>
            <p className="py-1 text-xl">One-click WordPress installs </p>
            <p className="py-1 text-xl">Free WordPress/cPanel website transfer</p>
            <p className="py-1 text-xl">Unmetered bandwidth </p>
            <p className="py-1 text-xl">Free SSL certificate </p>
            <p className="pt-1 text-xl">Free domain included </p>
          </div>
          <div className="top-4 relative mx-3">
            <button style={press2p.style} className="bg-white text-2xl  p-3 rounded-md text-zinc-900">
              Compre Agora
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md py-10 mt-10 px-4">
          <div className="text-start">
            <h3 className="font-bold text-4xl">Hatchling Plan</h3>
            <p className="text-red-500 font-semibold text-3xl my-2">Now 60% off!</p>
          </div>
          <div className="mt-11 mb-12 text-zinc-700 text-start">
            <p className="pb-1 text-xl">Single website </p>
            <p className="py-1 text-xl">One-click WordPress installs </p>
            <p className="py-1 text-xl">Free WordPress/cPanel website transfer</p>
            <p className="py-1 text-xl">Unmetered bandwidth </p>
            <p className="py-1 text-xl">Free SSL certificate </p>
            <p className="pt-1 text-xl">Free domain included </p>
          </div>
          <div className="top-4 relative mx-3">
            <button style={press2p.style} className="bg-blue-700 text-2xl  p-3 rounded-md text-white">
              Compre Agora
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className='h-20 w-screen bg_redcontainer'>
      </div>
    </article>
  );
}
