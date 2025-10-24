'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Award, ChevronDown, Moon, Sun, MapPin, Phone } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI Scrum Master Assistant",
      description: "Agentic AI system that converts live meeting speech into structured sprint updates and Jira tasks using speech-to-text, LLaMA 3, and RAG pipelines.",
      tech: ["FastAPI", "Docker", "LangChain", "GPT-4", "Pinecone", "FAISS", "vLLM", "Kubernetes"],
      github: "https://github.com/karan0624",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
    },
    {
      title: "Speech Emotion Recognition",
      description: "Transformer-based speech emotion recognition model achieving 92% accuracy using ResNet-based audio embeddings with 30M parameters.",
      tech: ["PyTorch", "Deep Learning", "CNNs", "Streamlit", "ResNet"],
      github: "https://github.com/karan0624",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop"
    },
    {
      title: "Diabetic Readmission Prediction",
      description: "Healthcare ML system achieving 87% precision and 32% reduction in false positives using optimized weighted cross-entropy loss.",
      tech: ["TensorFlow", "FastAPI", "Docker", "Azure", "Kubernetes", "CI/CD"],
      github: "https://github.com/karan0624",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    },
    {
      title: "Social Recommendation System",
      description: "GraphSAGE-based recommendation engine with Neo4j integration, improving recommendation precision by 22%.",
      tech: ["PyTorch Geometric", "Neo4j", "GNNs", "FastAPI"],
      github: "https://github.com/karan0624",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    }
  ];

  const skills: Record<string, string[]> = {
    "LLM & Inference": ["vLLM", "TGI", "ONNX Runtime", "4-bit Quantization", "RAG Pipelines"],
    "Machine Learning": ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "XGBoost"],
    "Vector Databases": ["FAISS", "Pinecone", "Weaviate", "Chroma"],
    "Deep Learning": ["CNNs", "Transformers", "ResNet", "GraphSAGE", "YOLOv5"],
    "Cloud & DevOps": ["Azure", "AWS", "Kubernetes", "Docker", "CI/CD"],
    "Data Engineering": ["Apache Spark", "Databricks", "Azure Data Factory", "SQL"],
    "Backend & APIs": ["FastAPI", "Python", "REST APIs", "Microservices"],
    "Optimization": ["Tensor Parallelism", "Batching", "Caching"]
  };

  const experiences = [
    {
      role: "Research Assistant",
      company: "University of Alabama at Birmingham",
      location: "Birmingham, AL",
      period: "Sep 2025 – Present",
      achievements: [
        "Developing biomedical text analysis models with PyTorch",
        "Performing data preprocessing on clinical datasets",
        "Evaluating models for healthcare data interpretation"
      ]
    },
    {
      role: "CETS AV/IT Technician",
      company: "Indiana State University",
      location: "Terre Haute, IN",
      period: "Feb 2024 – May 2025",
      achievements: [
        "Configured network infrastructure using Cisco switches",
        "Maintained AV systems with zero downtime",
        "Optimized device onboarding"
      ]
    },
    {
      role: "Data Scientist",
      company: "Make Brass Industries",
      location: "Gujarat, India",
      period: "Jan 2023 – May 2023",
      achievements: [
        "Reduced defect rates by 25% using YOLOv5",
        "Improved delivery accuracy with XGBoost",
        "Engineered automated data pipelines"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Limelight IT & Research",
      location: "Ahmedabad, India",
      period: "Apr 2021 – Jun 2022",
      achievements: [
        "Reduced ML training time by 45%",
        "Deployed RAG-style inference with FastAPI",
        "Improved efficiency by 20% through automation"
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <nav className={`fixed w-full z-50 ${isScrolled ? (isDark ? 'bg-gray-900/95 backdrop-blur' : 'bg-white/95 backdrop-blur') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              Karan Singh Chauhan
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}>
                  {item}
                </button>
              ))}
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-800">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className={isDark ? 'bg-gray-800' : 'bg-white'}>
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Karan Singh Chauhan
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
            Data Scientist & ML Engineer
          </h2>
          <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
            Specializing in Generative AI, LLM Optimization & Scalable Data Systems
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">vLLM Inference</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full">RAG Pipelines</span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full">4-bit Quantization</span>
          </div>
          <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500/10">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/karan0624" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/karan-chauhan-49219213" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Linkedin size={28} />
            </a>
            <a href="mailto:karan.m0624@gmail.com" className="hover:text-blue-500">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Data Scientist and Machine Learning Engineer with expertise in Generative AI, predictive modeling, and scalable data systems. Currently pursuing research at UAB.
              </p>
              <p className="text-lg mb-6">
                Skilled in LLM inference pipelines using vLLM, TGI, and RAG architectures, with optimizations like 4-bit quantization and speculative decoding.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-500 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Simi Valley, CA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-green-500 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (812) 538-8341</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500">
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg border-l-4 border-blue-500`}>
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <span className={`px-4 py-1 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} h-fit`}>
                    {exp.period}
                  </span>
                </div>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-blue-500">▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} shadow-xl`}>
            <p className="text-center text-lg mb-8">
              I'm actively seeking opportunities in AI/ML and Data Science. Let's connect!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href="mailto:karan.m0624@gmail.com" className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} hover:shadow-lg text-center`}>
                <Mail className="mx-auto mb-3 text-blue-500" size={32} />
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-400">karan.m0624@gmail.com</p>
              </a>
              <a href="https://github.com/karan0624" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} hover:shadow-lg text-center`}>
                <Github className="mx-auto mb-3 text-purple-500" size={32} />
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-gray-400">@karan0624</p>
              </a>
              <a href="https://linkedin.com/in/karan-chauhan-49219213" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} hover:shadow-lg text-center`}>
                <Linkedin className="mx-auto mb-3 text-pink-500" size={32} />
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-400">karan-chauhan</p>
              </a>
            </div>
            <div className="text-center">
              <a href="/Karan_Singh_Chauhan_Resume.pdf" download className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Karan Singh Chauhan. Built with React & Next.js</p>
        </div>
      </footer>
    </div>
  );
}