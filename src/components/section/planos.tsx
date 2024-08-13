export default function Planos() {
    return (
        <article className="text-black flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mt-10 mb-3">Ofertas Especiais</h2>
        <div>
            <div className="flex flex-col max-w-64 border border-solid border-red-800">
                    <h3 className="bg-green-800 text-xl font-semibold">Encanamentos entupido</h3>
                <div >
                    <p>Cansado de encanamentos entupidos? Nós temos a solução!</p>
                    <div>
                        <p>Apartir</p>
                        <a href="">19<span>,90</span></a>
                    </div>
                </div>
            </div>
        </div>
    </article>
    )
}