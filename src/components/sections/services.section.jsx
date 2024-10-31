import 'react';
import { FaCode, FaMobile } from 'react-icons/fa';

import { HiOutlineChip } from 'react-icons/hi';


const ServicesSection = () => {
    return (
        <section className="pt-20 pb-28 bg-secondary" id="servicios">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-[70px]">Nuestros Servicios</h2>
                <div className="grid md:grid-cols-3 text-center gap-8">
                    <div className="bg-primary flex items-center justify-center flex-col p-8 rounded-xl border-2 border-slate-600/70 hover:border-accent/80  shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
                        <FaCode className="text-5xl text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-4">Desarrollo Web</h3>
                        <p className="text-gray-400">Sitios web modernos y responsivos con las últimas tecnologías</p>
                    </div>
                    <div className="bg-primary flex items-center justify-center flex-col p-8 rounded-xl border-2 border-slate-600/70 hover:border-accent/80  shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
                        <FaMobile className="text-5xl text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-4">Apps Móviles</h3>
                        <p className="text-gray-400">Aplicaciones nativas y multiplataforma para iOS y Android</p>
                    </div>
                    <div className="bg-primary flex items-center justify-center flex-col p-8 rounded-xl border-2 border-slate-600/70 hover:border-accent/80  shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
                        <HiOutlineChip className="text-5xl text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-4">Software Personalizado</h3>
                        <p className="text-gray-400">Soluciones a medida para tu negocio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
