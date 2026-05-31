import img1 from '../assets/hero.jpg'


function Home () {
    return (
        <>
            <div className="w-[90vw] h-[20vw] border-2 mt-[10vw] ml-[5vw]">
                <div className="w-[100%] h-[5vw] border-2 flex">
                    <div className="border-2 w-[30%] items-center flex h-[100%] justify-center">
                        <img src={img1} alt="" className="w-[4vw] border-black border-[2px] ml-[-20vw] h-[4vw] ml-[-0.5vw] absolute rounded-[50%]" />
                        <img src={img1} alt="" className="w-[4vw] border-black border-[2px]  ml-[-15vw] h-[4vw] absolute rounded-[50%]" />
                        <img src={img1} alt="" className="w-[4vw] border-black border-[2px]  ml-[-10vw] h-[4vw] absolute rounded-[50%]" />
                        <img src={img1} alt="" className="w-[4vw] border-black border-[2px] ml-[-5vw] h-[4vw] absolute rounded-[50%]" />
                    </div>
                    <div className="border-2 justify-center flex items-center w-[70%] h-[100%]">
                        my name is vishv patel
                    </div>
                </div>
                <div className="w-[100%] h-[15vw] border-2 flex justify-center items-center">
                    my name is vishv<span className='text-red-600 ml-2 mr-2 '> patel</span>
                </div>
            </div>
            
        </>
    )
}

export default Home ;