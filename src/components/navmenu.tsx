export default function NavMenu() {
    return(
        <div className="flex justify-around flex-wrap items-center text-zinc-50">
            <h1 className="text-xl">Mario</h1>
            <nav className="flex gap-2 items-center">
                <a href="#home" className="py-3 px-3">Home</a>
                <a href="#sobre" className="py-3 px-3">Sobre</a>
                <a href="#servicos" className="py-3 px-3">Serviços</a>
                <a href="#contato" className="py-3 px-3">Contato</a>
            </nav>
        </div>
    )
}