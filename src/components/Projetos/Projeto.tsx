export function Projeto(){
    return(
        <div className="projeto w-full h-auto border-2 border-reddark rounded-2xl p-6">
            <div className="imageProjeto w-full h-[200px] bg-black rounded-t-2xl">

            </div>

            <h2 className="text-white text-3xl font-semibold mt-4">Projeto</h2>
            <p className="mt-2 text-white text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
            <div className="buttons flex flex-col justify-center items-center mt-6 gap-3">
                <button className="button w-full">Ver em tempo real</button>
                <button className="button w-full">Github</button>
            </div>
        </div>
    )
}