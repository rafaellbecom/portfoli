import { Nav } from 'components/Header/Nav/Nav';

export function Header(){
    return(
        <header className="w-full h-[80px] flex items-center items-center">            
            <div className="container m-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">RAFA<span className="font-medium italic">DEV</span></h1>
                <Nav></Nav>
            </div>
        </header>
    )
}