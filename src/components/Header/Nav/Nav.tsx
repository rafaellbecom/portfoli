export function Nav(){
    return(
        <nav className="menu flex items-center gap-[30px]">
            <ul className="flex items-center gap-[30px]">
                <li><a href="#" className="linkMenu text-white text-sm uppercase">Home</a></li>
                <li><a href="#" className="linkMenu text-white text-sm uppercase">Sobre mim</a></li>
                <li><a href="#" className="linkMenu text-white text-sm uppercase">Tecnologias</a></li>
                <li><a href="#" className="linkMenu text-white text-sm uppercase">Projetos</a></li>
                <li><a href="#" className="linkMenu text-white text-sm uppercase">Skills</a></li>
            </ul>

            <a href="#" className="button">Entrar em contato</a>
        </nav>
    )
}