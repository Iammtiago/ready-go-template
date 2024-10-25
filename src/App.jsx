import Header from './components/header.jsx';
import HeroSection from './components/sections/hero.section.jsx';
import ServicesSection from './components/sections/services.section.jsx';
import ProcessSection from './components/sections/process.section.jsx';
import ChooseUsSection from './components/sections/chooseUs.section.jsx';
import ProjectsSection from './components/sections/projects.section.jsx';
import ContactSection from './components/sections/contact.section.jsx';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Why Choose Us Section */}
      <ChooseUsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
}

export default App;