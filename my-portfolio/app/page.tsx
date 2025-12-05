"use client";
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun,
  Briefcase,
  Code,
  Terminal,
  Cpu,
  Globe,
  Database,
  Layout,
  Server,
  Smartphone,
  ExternalLink,
  Star,
  GitFork,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';

// --- CONFIGURATION ---
const GITHUB_USERNAME = "sharmajatinjs"; 

const App = () => {
  useEffect(() => {
    // This sets the browser tab title to "Jatin Portfolio"
    document.title = "Jatin Portfolio";
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState<any[]>([])
  const [loadingProjects, setLoadingProjects] = useState(true);

  // 1. GITHUB FETCH
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        setProjects([
          { id: 1, name: "AI-Portfolio-Generator", description: "An AI-powered tool to generate personal portfolio websites.", html_url: "#", language: "Python", stargazers_count: 12, forks_count: 4 },
          { id: 2, name: "FullStack-ECommerce", description: "Scalable backend using Node.js and Docker with React Frontend.", html_url: "#", language: "JavaScript", stargazers_count: 8, forks_count: 2 },
          { id: 3, name: "Neural-Net-Visualizer", description: "React application to visualize neural network training in real-time.", html_url: "#", language: "React", stargazers_count: 25, forks_count: 7 },
        ]);
      } finally {
        setLoadingProjects(false);
      }
    };
    fetchProjects();
  }, []);

  // 2. LINKEDIN MOCK DATA
  const linkedInPosts = [
    {
      id: 1,
      title: "Building Scalable AI Systems",
      date: "2 weeks ago",
      content: "Just shared my latest article on integrating LLMs with legacy Node.js architectures. The key is in the caching layer...",
      likes: 124,
      comments: 45
    },
    {
      id: 2,
      title: "Full Stack Development Trends 2025",
      date: "1 month ago",
      content: "React Server Components are changing the game. Here is how I implemented them in my latest project...",
      likes: 89,
      comments: 22
    }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#050505] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
               <div className="bg-blue-600 p-1.5 rounded-lg">
                 <Code size={20} className="text-white" />
               </div>
               <span className="text-xl font-bold tracking-tight text-white">Jatin Portfolio</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Overview', 'Projects', 'Timeline', 'Vision'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-white/5 text-yellow-400">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="mailto:sharmajatin.js0105@gmail.com" className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - HYBRID DESIGN */}
      <section id="overview" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Grid for Tech Vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* TEXT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Full Stack & AI Engineer
            </div>
            
            <p className="text-xl text-slate-300 font-mono mb-2">
              Hi, I am <span className="text-white font-bold text-2xl">Jatin Sharma</span>
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Reality</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              Bridging the gap between scalable web architectures and intelligent AI systems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="mailto:sharmajatin.js0105@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
                <Mail size={18} /> Email Me
              </a>
              <a href="https://linkedin.com/in/sharmajatinjs" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg font-medium transition-all">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-slate-700 hover:border-white text-white rounded-lg font-medium transition-all">
                <Github size={18} /> GitHub
              </a>
            </div>
            
            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-3">
               <div className="px-3 py-1 bg-[#1a1a1a] border border-slate-800 rounded text-xs text-slate-400 font-mono">React.js</div>
               <div className="px-3 py-1 bg-[#1a1a1a] border border-slate-800 rounded text-xs text-slate-400 font-mono">Next.js</div>
               <div className="px-3 py-1 bg-[#1a1a1a] border border-slate-800 rounded text-xs text-slate-400 font-mono">Python</div>
               <div className="px-3 py-1 bg-[#1a1a1a] border border-slate-800 rounded text-xs text-slate-400 font-mono">TensorFlow</div>
            </div>
          </div>

          {/* VISUAL - PICTURE + TERMINAL HYBRID */}
          <div className="relative flex justify-center items-center">
            
            {/* Main Picture */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 z-20">
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl bg-[#0a0a0a]">
                <img
                 src="/geminijatin.png"
                  onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Jatin&backgroundColor=b6e3f4";
                    }}
                   alt="Jatin Sharma"
                    className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* FLOATING TERMINAL (The "Old Design" Vibe) */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-64 bg-[#111] rounded-lg border border-slate-700 shadow-2xl z-30 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
               <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-800 bg-[#1a1a1a] rounded-t-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-[10px] text-slate-500 font-mono">bash</div>
               </div>
               <div className="p-3 font-mono text-xs">
                  <div className="text-green-400 mb-1">➜  ~ init portfolio</div>
                  <div className="text-slate-300 mb-1">Loading modules...</div>
                  <div className="text-blue-400 mb-1">Installing AI_Core...</div>
                  <div className="text-purple-400">Success! Welcome.</div>
                  <span className="inline-block w-2 h-4 bg-slate-500 animate-pulse align-middle ml-1"></span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* GITHUB PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
               <h2 className="text-3xl font-bold text-white uppercase tracking-widest">GitHub Repos</h2>
               <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-mono rounded-full border border-green-500/20">
                 Live Fetch
               </span>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
               View All <ExternalLink size={16}/>
            </a>
          </div>

          {loadingProjects ? (
            <div className="text-center text-slate-500 py-10">Loading projects from GitHub...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((repo) => (
                <div key={repo.id} className="group flex flex-col justify-between bg-[#111] border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-[#151515] transition-all duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-800 rounded-lg text-blue-400 group-hover:text-white transition-colors">
                        <Terminal size={24} />
                      </div>
                      <div className="flex gap-4 text-slate-500">
                         <div className="flex items-center gap-1 text-xs">
                           <Star size={14} /> {repo.stargazers_count}
                         </div>
                         <div className="flex items-center gap-1 text-xs">
                           <GitFork size={14} /> {repo.forks_count}
                         </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                      {repo.language || "Code"}
                    </span>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
                      Source <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LINKEDIN FEATURED SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
               <h2 className="text-3xl font-bold text-white uppercase tracking-widest">LinkedIn Highlights</h2>
               <span className="px-3 py-1 bg-blue-600/10 text-blue-400 text-xs font-mono rounded-full border border-blue-600/20">
                 Featured Posts
               </span>
            </div>
            <a href="https://linkedin.com/in/jatinsharma" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
               Connect on LinkedIn <Linkedin size={16}/>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {linkedInPosts.map((post) => (
              <div key={post.id} className="bg-[#111] border border-slate-800 rounded-xl p-6 hover:border-blue-600/50 transition-colors">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">J</div>
                    <div>
                       <div className="text-white font-semibold">Jatin Sharma</div>
                       <div className="text-slate-500 text-xs">{post.date}</div>
                    </div>
                    <Linkedin size={20} className="ml-auto text-blue-500" />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                 <p className="text-slate-400 text-sm mb-4">{post.content}</p>
                 <div className="flex items-center gap-6 text-slate-500 text-sm border-t border-slate-800 pt-4">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                    <a href="https://linkedin.com/in/jatinsharma" target="_blank" rel="noreferrer" className="ml-auto text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      Read Post <ArrowRight size={14} />
                    </a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 pl-6 border-l-4 border-blue-500">Professional History</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative border-l-2 border-slate-800 ml-6 space-y-12">
               
               <div className="relative pl-8 group">
                 <div className="absolute -left-[21px] top-0 p-1 bg-[#050505] border-2 border-blue-500 rounded-full">
                    <Briefcase size={16} className="text-blue-500" />
                 </div>
                 <div className="bg-[#0f1115] p-6 rounded-xl border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">Full Stack & AI Developer</h3>
                      <span className="text-xs font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded">2022 - Present</span>
                   </div>
                   <div className="text-blue-400 text-sm mb-4">Tech Innovators</div>
                   <p className="text-slate-400 text-sm">
                     Leading the integration of LLM models into existing web infrastructure using React and Python.
                   </p>
                 </div>
               </div>

                <div className="relative pl-8 group">
                 <div className="absolute -left-[21px] top-0 p-1 bg-[#050505] border-2 border-slate-700 rounded-full">
                    <Briefcase size={16} className="text-slate-500" />
                 </div>
                 <div className="bg-[#0f1115] p-6 rounded-xl border border-slate-800">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-300">Junior Developer</h3>
                      <span className="text-xs font-mono bg-slate-800 text-slate-500 px-2 py-1 rounded">2020 - 2021</span>
                   </div>
                   <div className="text-slate-500 text-sm mb-4">Web Solutions</div>
                   <p className="text-slate-500 text-sm">
                     Developed responsive frontend interfaces and managed database migrations.
                   </p>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </section>

      {/* VISION / TECHNOLOGICAL FOOTPRINT - 3 AXIS GRAPH */}
      <section id="vision" className="py-20 px-4">
         <div className="max-w-7xl mx-auto bg-[#0a0d14] rounded-3xl p-8 md:p-12 border border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Left Content */}
               <div>
                 <div className="flex items-center gap-2 text-blue-500 text-xs font-mono mb-4 uppercase tracking-wider">
                   <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                   Jatin's Skill Matrix
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                   Technological <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Footprint</span>
                 </h2>
                 <p className="text-slate-400 mb-8 leading-relaxed">
                   My expertise is balanced across three core pillars: <span className="text-blue-400 font-medium">Full Stack Architecture</span>, <span className="text-purple-400 font-medium">AI Integration</span>, and <span className="text-red-400 font-medium">Cybersecurity</span>.
                 </p>

                 <div className="flex flex-wrap gap-3">
                   {[
                     { name: 'React / Next.js', icon: <Layout size={14}/> },
                     { name: 'Node.js', icon: <Server size={14}/> },
                     { name: 'Python / AI', icon: <Zap size={14}/> },
                     { name: 'Penetration Testing', icon: <Shield size={14}/> },
                   ].map((skill) => (
                     <div key={skill.name} className="flex items-center gap-2 bg-[#151921] border border-slate-800 rounded-lg px-4 py-2 hover:border-blue-500/50 transition-colors cursor-default">
                       <span className="text-blue-500">{skill.icon}</span>
                       <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Right Content - 3 AXIS RADAR CHART (TRIANGLE) */}
               <div className="relative flex items-center justify-center min-h-[400px]">
                  
                  {/* LABELS */}
                  <div className="absolute top-4 text-blue-400 font-bold tracking-wider flex flex-col items-center">
                    <Globe size={20} className="mb-1"/> Full Stack
                  </div>
                  <div className="absolute bottom-10 right-0 text-purple-400 font-bold tracking-wider flex flex-col items-center">
                    <Cpu size={20} className="mb-1"/> AI / ML
                  </div>
                  <div className="absolute bottom-10 left-0 text-red-400 font-bold tracking-wider flex flex-col items-center">
                    <Shield size={20} className="mb-1"/> Cybersecurity
                  </div>

                  {/* CHART VISUAL */}
                  <div className="w-72 h-64 relative flex items-center justify-center">
                     {/* Triangle Background (Grid) */}
                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                       {/* Outer Triangle */}
                       <polygon points="50,10 90,90 10,90" fill="none" stroke="#1e293b" strokeWidth="1" />
                       {/* Inner Triangle 1 */}
                       <polygon points="50,30 75,80 25,80" fill="none" stroke="#1e293b" strokeWidth="1" />
                       {/* Inner Triangle 2 */}
                       <polygon points="50,50 60,70 40,70" fill="none" stroke="#1e293b" strokeWidth="1" />
                       
                       {/* Center Point */}
                       <circle cx="50" cy="60" r="1" fill="#475569" />

                       {/* DATA POLYGON (The Shape) */}
                       {/* High Full Stack (Top), High AI (Right), High Cyber (Left) */}
                       <polygon 
                         points="50,15 85,85 20,85" 
                         fill="rgba(59, 130, 246, 0.2)" 
                         stroke="#60a5fa" 
                         strokeWidth="2" 
                         className="animate-[pulse_3s_infinite]"
                       />
                     </svg>
                     
                     {/* Glow behind the chart */}
                     <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-[#050505]">
        <p>© 2024 Jatin.dev. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;