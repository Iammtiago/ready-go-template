import 'react';
import imgAviva from '../../assets/img/projects/aviva.png'
import imgDomoluz from '../../assets/img/projects/domoluz.png'

const ProjectsSection = () => {
    const projects = [
        { title: "Motorider APP", type: "Aplicación móvil", img: "" },
        { title: "Aviva C.A.", type: "Web Company", img: imgAviva },
        { title: "Domoluz", type: "Landing page", img: imgDomoluz },
        { title: "E-commerce Platform", type: "Web Development", img: "" },
        // { title: "Delivery Platform", type: "Full Stack", img: "" }
        // { title: "ERP System", type: "Custom Software", img: "" },
    ];

    return (
        <section className="py-20 bg-primary" id="proyectos">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
                            <div className={`h-60 ${project?.img !== "" ? 'bg-no-repeat bg-top bg-cover ' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
                            style={{
                                backgroundImage: (project?.img === "") ? "" : `url(${project.img})`
                            }}></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400">{project.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
