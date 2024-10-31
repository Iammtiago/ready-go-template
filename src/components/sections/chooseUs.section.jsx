import 'react';
import { FaCode, FaRocket, FaCheckCircle, FaClock, FaHeadset } from 'react-icons/fa';

const ChooseUsSection = () => {
    const itemsList = [
        {
            icon: <FaCheckCircle className="text-3xl text-accent" />,
            title: "Experiencia Comprobada",
            text: "Más de 10 años desarrollando soluciones exitosas para clientes globales"
        },
        {
            icon: <FaRocket className="text-3xl text-accent" />,
            title: "Tecnología de Punta",
            text: "Utilizamos las últimas tecnologías y mejores prácticas del mercado"
        },
        {
            icon: <FaCode className="text-3xl text-accent" />,
            title: "Código de Calidad",
            text: "Desarrollo limpio y mantenible con estándares internacionales"
        },
        {
            icon: <FaClock className="text-3xl text-accent" />,
            title: "Soporte 24/7",
            text: "Equipo dedicado disponible para asistencia continua"
        },
        {
            icon: <FaHeadset className="text-3xl text-accent" />,
            title: "Atención Personalizada",
            text: "Comunicación directa y constante durante todo el proceso"
        },
    ]
    return (
        <section className="py-20 bg-secondary" id="porque-nosotros">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">¿Por qué Elegirnos?</h2>
                <div className="grid md:grid-cols-5 gap-8">
                    {itemsList.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 mb-5 bg-primary rounded-xl border-2 border-slate-600/70 hover:border-accent/80 shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
                            {item.icon}
                            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                            <p className="mt-2 text-gray-400">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ChooseUsSection;
