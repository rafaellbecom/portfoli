export function Display(){
    return(
        <div className="display">
            <div className="container flex justify-center items-center h-full">
                <div className="w-1/2 h-full top-[-50%]">
                        <h1 className="text-white text-4xl">Olá, me chamo Rafael!</h1>
                        <h2 className="text-reddark text-lg mt-12">Desenvolvedor Front-End e Webdesigner</h2>

                        <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus est at lorem vehicula, molestie faucibus magna fermentum. <br /><br /> Pellentesque ac est rhoncus, pretium risus vel, rhoncus metus. Sed cursus est at lorem vehicula.</p>
                        <div className="w-full flex gap-[30px]">
                            <button className="button w-[40%]">Portfólio</button>
                            <button className="button w-[60%]">Download CV</button>
                        </div>
                </div>
                <div className="w-1/2 h-full">
                    <h1>Mundo</h1>
                </div>
            </div>
        </div>
    )
}