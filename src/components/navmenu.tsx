export default function NavMenu() {
    return(
        <div className="flex justify-around flex-col items-center text-zinc-900 md:flex-row">
            <h1 className="text-xl sr-only md:not-sr-only">SM</h1>
            <nav className="flex gap-2 items-center font-semibold">
                <a href="#home" className="py-3 px-3">Home</a>
                <a href="#servicos" className="py-3 px-3">Serviços</a>
                <a href="#contato" className="py-3 px-3">Contato</a>
            </nav>
        </div>
    )
}