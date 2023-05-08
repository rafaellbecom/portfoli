import { Nav } from 'components/Header/Nav/Nav';

export function Header(){
    return(
        <header className="w-full h-[100px] bg-black flex items-center items-center">            
            <div className="container m-auto flex justify-between">
                <h1 className="text-white text-2xl font-bold">RAFA<span className="font-medium italic">DEV</span></h1>
                <Nav></Nav>
            </div>
        </header>
    )
}