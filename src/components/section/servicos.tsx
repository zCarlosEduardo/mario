export default function Servicos() {
    return(
        <article className="flex flex-col text-center justify-center">
        <div className=" mt-10">
            <p className="uppercase text-blue-700 font-semibold">Conheça nossos</p>
            <h2 className=" text-5xl font-bold text-zinc-900">Serviços</h2>
        </div>
        <div>
            <div className="my-10 mx-3 flex-row flex-wrap">
                <div className="bg-amber-500 rounded-md w-100 h-40 flex flex-col justify-center">
                    <h3 className="text-zinc-900 font-bold text-2xl mx-4">Desentupimento de Canos</h3>
                    <p className="text-zinc-900 m-1">Cansado de encanamentos entupidos? Nós temos a solução!</p>
                </div>
                <div className="bg-amber-500 rounded-md w-100 h-40 flex flex-col justify-center mt-4">
                    <h3 className="text-zinc-900 font-bold text-2xl mx-4">Reparo de Vazamentos</h3>
                    <p className="text-zinc-900 m-1">Detectamos e consertamos vazamentos rapidamente.</p>
                </div>
                <div className="bg-amber-500 rounded-md w-100 h-40 flex flex-col justify-center mt-4">
                    <h3 className="text-zinc-900 font-bold text-2xl mx-4">Instalação de Tubulações</h3>
                    <p className="text-zinc-900 m-1">Instalação profissional para todas as suas necessidades de encanamento.</p>
                </div>
                <div className="bg-amber-500 rounded-md w-100 h-40 flex flex-col justify-center mt-4">
                    <h3 className="text-zinc-900 font-bold text-2xl mx-4">Inspeção de Encanamento</h3>
                    <p className="text-zinc-900 m-1">Inspeção detalhada para garantir a saúde do seu sistema de encanamento.</p>
                </div>
            </div>
        </div>
        </article>
    )
}