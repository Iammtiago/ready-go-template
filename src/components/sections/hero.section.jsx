import 'react';
import imgLogo from "./../../assets/logos/ready_go-logo-rmbg-perso.png"

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-primary to-secondary" id="hero">
            <div className="max-w-6xl mx-auto text-center">
                {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Ready Go
                </h1> */}
                
                {/* <div className="mt-44 " ></div> */}

                <div className='flex gap-7 justify-center items-center mt-20 md:mt-12 py-7 '>
                    <img src={imgLogo} alt="Ready Go logo" className='h-20 md:h-28 w-auto' />
                    <h1 className="text-5xl md:text-7xl antialiased font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-0% to-65% from-cyan-400/80 to-purple-400/75">
                        Ready Go
                    </h1>
                </div>

                {/* <div className='flex gap-7 justify-center items-center py-4'>
                    <img src={imgLogo} alt="Ready Go logo" className='h-16 md:h-24 w-auto' />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className='text-cyan-400/85 '>Ready </span> 
                        <span className='text-purple-400/75 '>Go</span>
                    </h1>
                </div> */}

                {/* from-blue-400 to-purple-600 */}
                {/* from-cyan-300/75 */}
                {/* <p className="text-5xl md:text-6xl font-bold mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-r 
                from-cyan-400/75 to-purple-600/90 to-85%">
                    Transformamos Ideas en Realidad Digital
                </p> */}

                <p className="text-[40px]/[46px] md:text-[54px] text-gray-200 font-bold mt-5 mb-6 pb-4">
                    Transformamos Ideas en Realidad Digital
                </p>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Desarrollamos soluciones tecnológicas innovadoras para empresas y emprendedores
                </p>

                <a href='#contacto'>
                    <button className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                        Comienza tu Proyecto
                    </button>
                </a>

            </div>
        </section>
    );
}

export default HeroSection;
