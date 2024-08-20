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
      <div className="m-4">
        <div className="bg-white rounded-md py-4 px-4">
          <div className="text-start">
            <h3 className="font-bold text-2xl">Hatchling Plan</h3>
            <p className="text-red-500 font-semibold text-lg">Now 60% off!</p>
          </div>
          <div className="mt-5 mb-12 text-zinc-700 text-start">
            <p className="py-1">Single website </p>
            <p className="py-1">One-click WordPress installs </p>
            <p className="py-1">Free WordPress/cPanel website transfer</p>
            <p className="py-1">Unmetered bandwidth </p>
            <p className="py-1">Free SSL certificate </p>
            <p className="pt-1">Free domain included </p>
          </div>
          <div className="my-4">
            <a href="" style={press2p.style} className="bg-blue-700 p-4 rounded-md text-white">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div className="bg-blue-700 rounded-md mt-4 p-4 text-white ">
            <div className="text-start ">
              <h3 className="font-bold text-2xl ">Hatchling Plan</h3>
              <p className="font-semibold text-lg">Now 60% off!</p>
            </div>
            <div className="mt-5 mb-12 text-zinc-100 text-start">
              <p className="py-1">Single website </p>
              <p className="py-1">One-click WordPress installs </p>
              <p className="py-1">Free WordPress/cPanel website transfer</p>
              <p className="py-1">Unmetered bandwidth </p>
              <p className="py-1">Free SSL certificate </p>
              <p className="pt-1">Free domain included </p>
            </div>
            <div className="my-4">
              <a href="" style={press2p.style} className="bg-white p-4 rounded-md text-black">
                Compre Agora
              </a>
            </div>
          </div>

          <div className="bg-white rounded-md mt-4 p-4 ">
            <div className="text-start">
              <h3 className="font-bold text-2xl">Hatchling Plan</h3>
              <p className="text-red-500 font-semibold text-lg">Now 60% off!</p>
            </div>
            <div className="mt-5 mb-12 text-zinc-700 text-start">
              <p className="py-1">Single website </p>
              <p className="py-1">One-click WordPress installs </p>
              <p className="py-1">Free WordPress/cPanel website transfer</p>
              <p className="py-1">Unmetered bandwidth </p>
              <p className="py-1">Free SSL certificate </p>
              <p className="pt-1">Free domain included </p>
            </div>
            <div className="my-4">
              <a href="" style={press2p.style} className="bg-blue-700 p-4 rounded-md text-white">
                Compre Agora
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w'>
      </div>
    </article>
  );
}
