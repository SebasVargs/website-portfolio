import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Database, Server, FileText, ChevronDown } from 'lucide-react';

const domain = {
  entities: {
    Profile: class {
      constructor(data) {
        this.name = data.name;
        this.title = data.title;
        this.description = data.description;
        this.email = data.email;
      }
    },
    Skill: class {
      constructor(name, category, level) {
        this.name = name;
        this.category = category;
        this.level = level;
      }
    },
    Project: class {
      constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.technologies = data.technologies;
        this.link = data.link;
      }
    }
  },

  valueObjects: {
    SocialMedia: class {
      constructor(platform, url, icon) {
        this.platform = platform;
        this.url = url;
        this.icon = icon;
      }
    }
  }
};

const application = {
  useCases: {
    getProfileData: () => {
      return new domain.entities.Profile({
        name: "Sebastian Vargas",
        title: "Backend Developer",
        description: "Estudiante de Ingeniería de Sistemas en último semestre, apasionado por el desarrollo backend y la arquitectura de software. Me especializo en crear soluciones escalables y mantenibles."
      });
    },

    getSkills: () => {
      return [
        {
          category: "Backend", skills: [
            new domain.entities.Skill("Java + Spring Boot", "backend", 90),
            new domain.entities.Skill("Node.js + Express", "backend", 85),
            new domain.entities.Skill("Clean Architecture", "architecture", 80),
            new domain.entities.Skill("Hexagonal Architecture", "architecture", 75),
          ]
        },
        {
          category: "Databases", skills: [
            new domain.entities.Skill("SQL (PostgreSQL/MySQL)", "database", 85),
            new domain.entities.Skill("NoSQL (MongoDB)", "database", 80),
          ]
        },
        {
          category: "Mobile & Other", skills: [
            new domain.entities.Skill("Android Studio", "mobile", 75),
            new domain.entities.Skill("Scrum", "methodology", 85),
            new domain.entities.Skill("Ingeniería de Requisitos", "methodology", 90),
          ]
        }
      ];
    },

    getSocialMedia: () => {
      return [
        new domain.valueObjects.SocialMedia("GitHub", "https://github.com/SebasVargs", Github),
        new domain.valueObjects.SocialMedia("LinkedIn", "https://www.linkedin.com/in/sebastianvargas2927/", Linkedin),
        new domain.valueObjects.SocialMedia("Instagram", "https://www.instagram.com/sebastianvargas7673/", Mail),
      ];
    }
  }
};

const Header = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">Sebastian</span>
          <span className="text-red-500"> Vargas</span>
        </div>
        <div className="flex gap-6">
          {['Inicio', 'Sobre Mí', 'Skills', 'Contacto'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#64748b',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gray-200 rounded-full opacity-90 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: i % 2 === 0 ? '#1e293b' : '#334155',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-red-500"></div>
            <div className="w-4 h-1 bg-red-500"></div>
            <div className="w-2 h-1 bg-red-500"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            Sebastian<br />Vargas
          </h1>
          <p className="text-xl mb-8">
            <span className="text-red-500 font-semibold">BACKEND DEVELOPER</span>
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Estudiante de último semestre especializado en desarrollo backend con Java Spring Boot y Node.js.
            Apasionado por las arquitecturas limpias y metodologías ágiles.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/SebasVargs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Proyectos
            </a>

            {/*
            <button className="border border-gray-600 hover:border-red-500 text-white px-8 py-3 rounded-lg transition-all duration-300">
              Contactar
            </button>
            */}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={32} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};

const About = () => {
  const qualities = [
    { icon: Code, title: "Aprendizaje Continuo", desc: "Siempre en búsqueda de nuevos desafíos y tecnologías" },
    { icon: Server, title: "Trabajo en Equipo", desc: "Tranquilo, paciente y respetuoso con mi entorno" },
    { icon: Database, title: "Arquitectura Sólida", desc: "Especializado en Clean, Hexagonal y MVVM" },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-white">SOBRE </span>
          <span className="text-red-500">MÍ</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {qualities.map((item, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-red-500">
              <item.icon className="text-red-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Mi Enfoque</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Como estudiante de Ingeniería de Sistemas en mi último semestre, me apasiona crear soluciones backend
            robustas y escalables. Mi experiencia incluye el desarrollo con tecnologías modernas como Java Spring Boot
            y Node.js, siempre aplicando las mejores prácticas de arquitectura de software.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Me destaco en la ingeniería de requisitos y metodologías ágiles como Scrum, lo que me permite entender
            profundamente las necesidades del cliente y traducirlas en soluciones técnicas efectivas. Creo en la
            importancia de escribir código limpio, mantenible y bien documentado.
          </p>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Java + Spring Boot", size: "large", importance: "high" },
    { name: "Node.js + Express", size: "large", importance: "high" },
    { name: "Ingeniería de Requisitos", size: "large", importance: "high" },

    { name: "Clean Architecture", size: "medium", importance: "medium" },
    { name: "Hexagonal Architecture", size: "medium", importance: "medium" },
    { name: "PostgreSQL", size: "medium", importance: "medium" },
    { name: "MongoDB", size: "medium", importance: "medium" },
    { name: "Scrum", size: "medium", importance: "medium" },
    { name: "MySQL", size: "medium", importance: "medium" },

    { name: "MVVM", size: "small", importance: "normal" },
    { name: "Android Studio", size: "small", importance: "normal" },
    { name: "REST APIs", size: "small", importance: "normal" },
    { name: "Git", size: "small", importance: "normal" },
    { name: "Microservicios", size: "small", importance: "normal" },
    { name: "Docker", size: "small", importance: "normal" },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large': return 'text-base px-5 py-3';
      case 'medium': return 'text-sm px-4 py-2.5';
      case 'small': return 'text-xs px-3 py-2';
      default: return 'text-sm px-4 py-2.5';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-white">STACK </span>
          <span className="text-red-500">TECNOLÓGICO</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`bg-slate-800 rounded-lg border border-slate-700 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-110 cursor-pointer ${getSizeClasses(skill.size)}`}
              >
                <span className="text-white hover:text-red-400 transition-colors duration-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 hover:border-red-500 transition-all duration-300">
              <Database className="text-red-500 mx-auto mb-3" size={36} />
              <h4 className="text-base font-semibold text-white mb-2">Bases de Datos</h4>
              <p className="text-gray-400 text-sm">SQL y NoSQL</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 hover:border-red-500 transition-all duration-300">
              <Server className="text-red-500 mx-auto mb-3" size={36} />
              <h4 className="text-base font-semibold text-white mb-2">APIs RESTful</h4>
              <p className="text-gray-400 text-sm">Diseño e implementación</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 hover:border-red-500 transition-all duration-300">
              <FileText className="text-red-500 mx-auto mb-3" size={36} />
              <h4 className="text-base font-semibold text-white mb-2">Metodologías</h4>
              <p className="text-gray-400 text-sm">Scrum & Agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const socialMedia = application.useCases.getSocialMedia();

  return (
    <section id="contacto" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-white">CONECTA </span>
          <span className="text-red-500">CONMIGO</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 mb-12 text-lg">
            Estoy abierto a nuevas oportunidades y colaboraciones.
            ¡No dudes en contactarme!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-red-500 group"
              >
                <social.icon className="text-gray-400 group-hover:text-red-500 mx-auto mb-4 transition-colors" size={40} />
                <h3 className="text-white font-semibold">{social.platform}</h3>
              </a>
            ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-white">Información de Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-red-500 font-semibold">Email:</span> cvsa5000@gmail.com</p>
              <p><span className="text-red-500 font-semibold">Ubicación:</span> Tunja - Boyacá</p>
              <p><span className="text-red-500 font-semibold">Disponibilidad:</span> Abierto a oportunidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 <span className="text-red-500 font-semibold">Sebastian Vargas</span> - Backend Developer
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Construido con React
        </p>
      </div>
    </footer>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigate = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;