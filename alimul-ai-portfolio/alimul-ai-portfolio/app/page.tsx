import { ArrowUpRight, BrainCircuit, CheckCircle2, Cloud, Code2, Cpu, Github, Linkedin, Mail, MapPin, Network, Rocket, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const projects = [
  { title:'Enterprise Knowledge Assistant', type:'Generative AI / RAG', description:'A business knowledge assistant that retrieves trusted internal information and answers questions through natural language.', stack:['Python','Azure OpenAI','LangChain','Vector Search'], impact:'Designed around faster knowledge discovery and reduced repetitive information requests.', icon:BrainCircuit },
  { title:'AI Service Desk Copilot', type:'AI Automation', description:'An AI-assisted support workflow for ticket classification, knowledge retrieval, troubleshooting guidance and response drafting.', stack:['OpenAI API','LangGraph','Python','FastAPI'], impact:'Targets faster triage, consistent responses and lower repetitive support workload.', icon:Workflow },
  { title:'AI Operations Assistant', type:'AIOps / Cloud', description:'Intelligent operational analysis combining infrastructure telemetry, anomaly detection and AI-generated incident context.', stack:['Azure Monitor','Python','OpenAI','Prometheus'], impact:'Designed to reduce alert noise and accelerate incident investigation.', icon:Network },
  { title:'Intelligent Document Processing', type:'AI Automation', description:'Document workflow concept for extracting, classifying and validating information from invoices, forms and business documents.', stack:['Python','OCR','LLMs','Azure AI'], impact:'Targets major reductions in manual data entry and document processing time.', icon:Code2 },
  { title:'Computer Vision Traffic Intelligence', type:'Computer Vision', description:'Vehicle detection, lane-wise counting and traffic intelligence for smart-city decision support.', stack:['YOLO','OpenCV','Python','GeoPandas'], impact:'Foundation for real-time traffic analytics and adaptive urban mobility solutions.', icon:Cpu },
  { title:'Autonomous Vision & Robotics', type:'Robotics / Edge AI', description:'Computer vision and robotics experiments spanning perception, lane detection, simulation and ROS-based systems.', stack:['ROS 2','OpenCV','CARLA','Python/C++'], impact:'Connects AI perception with robotics and real-world autonomous systems.', icon:Rocket }
];

const skills = ['Generative AI','Agentic AI','AI Agents','RAG','Vector Databases','OpenAI API','Azure OpenAI','LangChain','LangGraph','Python','TensorFlow','PyTorch','Computer Vision','MLOps','LLMOps','Docker','Kubernetes','Terraform','GitHub Actions','Azure'];

export default function Home() {
  return <main>
    <header className="fixed top-0 z-50 w-full glass">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-bold tracking-tight">AFN<span className="gradient-text">.</span></a>
        <div className="hidden gap-6 text-sm md:flex muted"><a href="#solutions">Solutions</a><a href="#experience">Experience</a><a href="#stack">Stack</a><a href="#contact">Contact</a></div>
        <a className="btn btn-secondary text-sm" href="mailto:nabilcse.cbiu@gmail.com"><Mail size={15}/> Contact</a>
      </nav>
    </header>

    <section id="home" className="grid-bg relative overflow-hidden pt-36 pb-24">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="pill"><Sparkles size={14}/> AI Solutions Engineer · Germany / EU</span>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Building intelligent systems for <span className="gradient-text">real business problems.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 muted">I design and engineer practical AI solutions across Generative AI, Agentic AI, RAG, Computer Vision, Cloud and automation — from architecture and prototypes to production-ready platforms.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a className="btn btn-primary" href="#solutions">Explore solutions <ArrowUpRight size={17}/></a><a className="btn btn-secondary" href="/Alimul-Fazal-Nabil-AI-Solutions-Engineer-CV.pdf">Download CV</a></div>
          <div className="mt-10 flex flex-wrap gap-7 text-sm muted"><span className="flex items-center gap-2"><CheckCircle2 size={16}/> 7+ years engineering</span><span className="flex items-center gap-2"><CheckCircle2 size={16}/> 99.9% infrastructure availability</span><span className="flex items-center gap-2"><CheckCircle2 size={16}/> 45% manual effort reduction</span></div>
        </div>
        <div className="card p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between"><span className="text-sm font-semibold">AI Solution Architecture</span><span className="pill">Production mindset</span></div>
          <div className="space-y-3 text-sm">
            {['Business problem','Data & knowledge layer','AI / Agent / RAG layer','API & application layer','Cloud / MLOps / observability'].map((x,i)=><div key={x} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">{i+1}</span>{x}</div>)}
          </div>
        </div>
      </div>
    </section>

    <section id="solutions" className="section">
      <div className="container"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">Selected AI Solutions</p><h2 className="mt-3 text-4xl font-black md:text-5xl">From problem to architecture to impact.</h2><p className="mt-5 leading-7 muted">Every project is presented around a business problem, an engineering approach and the outcome it is designed to create.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(({icon:Icon,...p})=><article className="card flex flex-col p-6" key={p.title}><div className="flex items-start justify-between"><div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200"><Icon size={22}/></div><span className="text-xs muted">{p.type}</span></div><h3 className="mt-6 text-xl font-bold">{p.title}</h3><p className="mt-3 text-sm leading-6 muted">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-full border border-white/10 px-2.5 py-1 text-xs muted">{s}</span>)}</div><div className="mt-6 border-t border-white/10 pt-5 text-sm leading-6"><strong className="text-cyan-100">Impact:</strong> <span className="muted">{p.impact}</span></div></article>)}</div></div>
    </section>

    <section id="experience" className="section border-y border-white/5 bg-white/[.015]">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">Experience</p><h2 className="mt-3 text-4xl font-black">Engineering depth behind the AI.</h2></div><div className="space-y-8"><div className="card p-6"><div className="flex flex-wrap justify-between gap-4"><div><h3 className="text-xl font-bold">AI & Machine Learning Instructor</h3><p className="mt-1 muted">ReDI School of Digital Integration · Berlin</p></div><span className="text-sm muted">2026 – Present</span></div><p className="mt-5 leading-7 muted">Practical instruction and mentoring across AI, Machine Learning, Computer Vision and applied AI solution development in an international environment.</p></div><div className="card p-6"><div className="flex flex-wrap justify-between gap-4"><div><h3 className="text-xl font-bold">Infrastructure & Cloud Systems Engineer</h3><p className="mt-1 muted">Enterprise IT & Cloud Engineering</p></div><span className="text-sm muted">7+ years</span></div><p className="mt-5 leading-7 muted">Hybrid cloud, automation, networking, security, DevOps and production operations. This engineering foundation enables me to take AI beyond experimentation into reliable systems.</p></div></div></div>
    </section>

    <section id="stack" className="section"><div className="container"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">Technology Stack</p><h2 className="mt-3 text-4xl font-black">AI meets cloud engineering.</h2></div><div className="mt-10 flex flex-wrap gap-3">{skills.map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2.5 text-sm">{s}</span>)}</div></div></section>

    <section className="section"><div className="container"><div className="card grid gap-10 p-8 md:p-12 lg:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">What I bring</p><h2 className="mt-3 text-4xl font-black">AI thinking with an infrastructure mindset.</h2></div><div className="grid gap-5 sm:grid-cols-2"><div><ShieldCheck className="text-cyan-200"/><h3 className="mt-3 font-bold">Secure by design</h3><p className="mt-2 text-sm leading-6 muted">Identity, access, cloud security and production reliability are part of the solution.</p></div><div><Cloud className="text-cyan-200"/><h3 className="mt-3 font-bold">Cloud native</h3><p className="mt-2 text-sm leading-6 muted">Azure, containers, IaC, CI/CD and scalable deployment patterns.</p></div><div><BrainCircuit className="text-cyan-200"/><h3 className="mt-3 font-bold">Applied AI</h3><p className="mt-2 text-sm leading-6 muted">AI is selected for measurable business outcomes, not as technology for its own sake.</p></div><div><Rocket className="text-cyan-200"/><h3 className="mt-3 font-bold">End-to-end ownership</h3><p className="mt-2 text-sm leading-6 muted">From concept and architecture through implementation, automation and operations.</p></div></div></div></div></section>

    <section id="contact" className="section"><div className="container text-center"><span className="pill">Open to AI opportunities in Germany / EU</span><h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black md:text-6xl">Let's build an AI solution that creates measurable value.</h2><p className="mx-auto mt-6 max-w-2xl leading-7 muted">Interested in AI Solutions Engineering, Applied AI, GenAI, Computer Vision, MLOps or AI transformation? Let's discuss the problem you are solving.</p><div className="mt-8 flex justify-center gap-3"><a className="btn btn-primary" href="mailto:nabilcse.cbiu@gmail.com"><Mail size={17}/> Email me</a><a className="btn btn-secondary" href="https://www.linkedin.com/in/alimul-fazal-nabil" target="_blank"><Linkedin size={17}/> LinkedIn</a><a className="btn btn-secondary" href="https://github.com/Alimul-Fazal-Nabil" target="_blank"><Github size={17}/> GitHub</a></div><p className="mt-8 text-sm muted"><MapPin size={14} className="mr-1 inline"/> Open to relocation across Germany and the EU</p></div></section>

    <footer className="border-t border-white/10 py-8"><div className="container flex flex-col justify-between gap-4 text-sm muted md:flex-row"><span>© 2026 Alimul Fazal Nabil. AI Solutions Engineer.</span><span>Built for practical AI engineering.</span></div></footer>
  </main>;
}
