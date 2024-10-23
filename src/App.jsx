import { FaCode, FaMobile, FaRocket, FaCheckCircle, FaUsers, FaClock, FaLightbulb, FaChartLine, FaHeadset } from 'react-icons/fa';
import { HiOutlineChip } from 'react-icons/hi';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Ready Go
          </h1>
          <p className="text-5xl md:text-6xl font-bold mb-6">
            Transformamos Ideas en Realidad Digital
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Desarrollamos soluciones tecnológicas innovadoras para empresas y emprendedores
          </p>
          <button className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Comienza tu Proyecto
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary" id="servicios">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <FaCode className="text-5xl text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Desarrollo Web</h3>
              <p className="text-gray-400">Sitios web modernos y responsivos con las últimas tecnologías</p>
            </div>
            <div className="bg-primary p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <FaMobile className="text-5xl text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Apps Móviles</h3>
              <p className="text-gray-400">Aplicaciones nativas y multiplataforma para iOS y Android</p>
            </div>
            <div className="bg-primary p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <HiOutlineChip className="text-5xl text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Software Personalizado</h3>
              <p className="text-gray-400">Soluciones a medida para tu negocio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary" id="proceso">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-5 gap-8">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary" id="porque-nosotros">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">¿Por qué Elegirnos?</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
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
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-primary rounded-lg">
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section className="py-20 bg-secondary" id="contacto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contactanos</h2>
          <div className="bg-primary p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center">¡Mensaje enviado con éxito!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Error al enviar el mensaje. Por favor, intenta nuevamente.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;