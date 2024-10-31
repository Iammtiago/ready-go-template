import 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';


const ProcessSection = () => {
    return (
        <section className="py-20 bg-primary" id="proceso">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Nuestro Proceso</h2>
                <div className="grid md:grid-cols-5 gap-9">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaLightbulb className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Ideación</h3>
                        <p className="text-gray-400">Exploramos y definimos tu visión</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUsers className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Planificación</h3>
                        <p className="text-gray-400">Diseñamos la estrategia perfecta</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCode className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Desarrollo</h3>
                        <p className="text-gray-400">Construimos tu solución</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaRocket className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Lanzamiento</h3>
                        <p className="text-gray-400">Implementamos y optimizamos</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaChartLine className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Seguimiento</h3>
                        <p className="text-gray-400">Monitoreamos y mejoramos continuamente</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
