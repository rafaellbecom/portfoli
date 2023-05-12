export function Display(){
    return(
        <div className="display">
            <div className="container flex justify-center items-center h-full">
                <div className="w-1/2 h-full flex items-center">
                        <div>
                            <h1 className="text-white text-4xl font-regular">Olá, me chamo <span className="font-bold">Rafael!</span></h1>
                            <h2 className="text-reddark text-lg italic">Desenvolvedor Front-End e Webdesigner</h2>

                            <p className="text-white text-lg mt-12">Desenvolvedor Front-end e Graduando em Engenharia da Computação pela Unifacs com cerca de 1 ano de experiência em prototipação e desenvolvimento de sites, e-commerces, páginas e portais.</p>
                            <div className="w-full flex gap-[30px] mt-6">
                                <button className="button w-[40%]">Portfólio</button>
                                <button className="button w-[60%]">Download CV</button>
                            </div>
                        </div>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <div className="rafaelDisplay w-[75%] h-[80%] bg-black m-auto">

                    </div>

                    <div className="social w-full h-[30px] flex justify-center items-center">
                        <ul>
                            <li><a href="#"><img src=".../images/icons/github-RafaelLima.svg" alt="" /></a></li>
                            <li><a href="#"><img src=".../images/icons/linkedin-RafaelLima.svg" alt="" /></a></li>
                            <li><a href="#"><img src=".../images/icons/behance-RafaelLima.svg" alt="" /></a></li>
                            <li><a href="#"><img src=".../images/icons/email-RafaelLima.svg" alt="" /></a></li>
                            <li><a href="#"><img src=".../images/icons/whatsapp-RafaelLima.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}