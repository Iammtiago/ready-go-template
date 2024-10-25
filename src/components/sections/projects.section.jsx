import 'react';

const ProjectsSection = () => {
    return (
        <section className="py-20 bg-primary" id="proyectos">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "E-commerce Platform", type: "Web Development" },
                        { title: "Healthcare App", type: "Mobile App" },
                        { title: "ERP System", type: "Custom Software" },
                        { title: "Delivery Platform", type: "Full Stack" },
                    ].map((project, index) => (
                        <div key={index} className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
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
