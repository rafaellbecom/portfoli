export function SobreMim(){
    return(
        <div className="sobreMim h-[95vh]">
            <div className="container flex justify-center items-center h-[90%]">
                <div className="w-1/2 h-full flex items-center">
                    <div className="rafaelDisplay w-[75%] h-[80%] bg-black m-auto">

                    </div>
                </div>
                <div className="w-1/2 h-full flex items-center">
                    <div>
                        <h1 className="text-white text-4xl font-regular">Um pouco <span className="font-bold">sobre mim</span></h1>
                        <h2 className="text-reddark text-lg italic">Estudos, Iniciativas, Experiência Profissional</h2>

                        <p className="text-white text-lg mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam tellus, vestibulum id vulputate ut, sodales quis turpis. Phasellus id leo tellus. Nam sagittis tincidunt purus at finibus. Sed vestibulum commodo venenatis.
                        <br></br><br />
                        Maecenas libero eros, tincidunt et risus eget, feugiat fringilla dui. Integer a placerat ipsum. Sed sed leo sed est dictum euismod. Sed sodales augue lacus, ut auctor ligula vehicula vitae. Aenean posuere porttitor tortor eget elementum.</p>

                        <button className="button w-[50%] mt-6">Contato</button>
                    </div>
                </div>
            </div>
        </div>
    )
}