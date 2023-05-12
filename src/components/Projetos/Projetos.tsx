import { Projeto } from 'components/Projetos/Projeto'

export function Projetos(){
    return(
        <div className="projetos bg-[#141010] py-[60px]">
            <div className="container">
                <h1 className="text-white text-4xl font-regular">Meu <span className="font-bold">portfólio</span></h1>

                <div className="grid-projetos grid grid-cols-3 gap-6 mt-12">
                    <Projeto></Projeto>
                    <Projeto></Projeto>
                    <Projeto></Projeto>
                    <Projeto></Projeto>
                    <Projeto></Projeto>
                    <Projeto></Projeto>
                </div>
            </div> 
        </div>
    )
}