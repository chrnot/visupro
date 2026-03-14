import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  HeartPulse, 
  Building2,
  Clock,
  Lock,
  Database
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-visupro-green rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">V</span>
      </div>
      <span className="text-2xl font-bold tracking-tight text-visupro-green">Visupro</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#problem" className="hover:text-visupro-light-green transition-colors">Utmaningen</a>
      <a href="#fordelar" className="hover:text-visupro-light-green transition-colors">Fördelar</a>
      <a href="#segment" className="hover:text-visupro-light-green transition-colors">Marknad</a>
    </div>
    <button className="bg-visupro-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-visupro-light-green transition-all shadow-md">
      Boka Demo
    </button>
  </nav>
);

const ProcessVisual = () => (
  <div className="relative w-full aspect-video bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-8 flex items-center justify-center">
    <div className="flex items-center justify-between w-full max-w-3xl gap-4">
      {/* Chaos Side */}
      <div className="relative w-1/3 h-48 flex items-center justify-center">
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -5, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full"
        >
          <Clock className="absolute top-0 left-4 text-slate-300 -rotate-12" size={32} />
          <Database className="absolute bottom-4 right-8 text-slate-200 rotate-45" size={40} />
          <Lock className="absolute top-1/2 left-0 text-slate-300 -translate-y-1/2" size={28} />
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-slate-100 rounded-lg rotate-12"></div>
          <div className="absolute bottom-0 left-12 w-8 h-8 bg-slate-50 rounded rotate-45"></div>
          {/* Messy lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
            <path d="M10,20 Q30,10 50,50 T90,80" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
            <path d="M5,80 Q40,90 60,40 T95,10" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
          </svg>
        </motion.div>
      </div>

      {/* The Funnel / Transition */}
      <div className="relative w-1/6 flex items-center justify-center">
        <div className="w-full h-24 bg-gradient-to-r from-slate-100 to-visupro-green/20 rounded-full blur-xl absolute"></div>
        <ArrowRight className="text-visupro-green relative z-10" size={48} />
      </div>

      {/* Order Side */}
      <div className="w-1/2 h-48 relative flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-visupro-green/5 p-4 rounded-xl border border-visupro-green/10 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-visupro-green"></div>
              <div className="h-1.5 w-12 bg-visupro-green/20 rounded"></div>
            </div>
            <div className="h-1.5 w-full bg-visupro-green/10 rounded"></div>
            <div className="h-1.5 w-3/4 bg-visupro-green/10 rounded"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-visupro-green/5 p-4 rounded-xl border border-visupro-green/10 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-visupro-green" />
              <div className="h-1.5 w-12 bg-visupro-green/20 rounded"></div>
            </div>
            <div className="h-1.5 w-full bg-visupro-green/10 rounded"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-2 bg-visupro-green p-4 rounded-xl shadow-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-white" size={20} />
              <span className="text-white text-xs font-bold uppercase tracking-wider">Klickbar Funktion</span>
            </div>
            <CheckCircle2 className="text-visupro-light-green" size={20} />
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 p-4 opacity-5">
      <div className="grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-visupro-green"></div>
        ))}
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-visupro-light-green/10 text-visupro-green text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-visupro-light-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-visupro-light-green"></span>
          </span>
          Nystart: 15 års erfarenhet möter ny innovation
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-visupro-dark">
          Från dokumenterad process till <span className="text-visupro-green italic">klickbar funktion</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
          Visupro moderniserar din vardag genom att sömlöst sammankoppla den fysiska och digitala verksamheten. Vi skapar digitalt processtöd som faktiskt gör skillnad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-visupro-green text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-visupro-light-green transition-all shadow-xl hover:shadow-visupro-light-green/20">
            Kom igång nu <ArrowRight size={20} />
          </button>
          <button className="bg-white text-visupro-dark border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            Se hur det fungerar
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <ProcessVisual />
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-visupro-light-green/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-visupro-green/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section id="problem" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-visupro-light-green uppercase tracking-widest mb-3">Utmaningen & Lösningen</h2>
        <p className="text-3xl lg:text-4xl font-bold text-visupro-dark">När administrationen bromsar utvecklingen</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
            <Clock size={24} /> Problemet idag
          </h3>
          <ul className="space-y-4">
            {[
              "För mycket manuell administration bromsar verksamheten.",
              "Splittrad data försvårar uppföljning och styrning.",
              "GDPR-krav hanteras manuellt utan tydlig behörighetsstyrning.",
              "Kärnverksamheten tappar tid till administrativa sidouppgifter."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-8 rounded-2xl bg-visupro-green text-white shadow-xl shadow-visupro-green/20">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap size={24} /> Visupros lösning
          </h3>
          <p className="mb-6 opacity-90 leading-relaxed">
            Vi gör ditt verksamhetssystem komplett. Genom att integrera med befintliga kärnsystem och återföra data via API, möjliggör vi avancerad bearbetning med AI-verktyg.
          </p>
          <ul className="space-y-4">
            {[
              "Sömlös sammankoppling av fysisk och digital verksamhet.",
              "Kvalitetssäkrad data samlad på ett och samma ställe.",
              "Automatiskt GDPR-stöd med strikt rollstyrning.",
              "Frigör tid för det som faktiskt betyder något."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-visupro-light-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="fordelar" className="py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-visupro-light-green uppercase tracking-widest mb-3">Fördelar med vår plattform</h2>
        <p className="text-3xl lg:text-4xl font-bold text-visupro-dark">En sammanhållen lösning för hela verksamheten</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Effektivitet */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
        >
          <div className="bg-visupro-green/5 w-full aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Database size={120} />
            </div>
            <div className="flex items-center gap-4 z-10">
              <div className="p-3 bg-white rounded-lg shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
                <Clock className="text-visupro-green" size={24} />
              </div>
              <ArrowRight className="text-slate-300" />
              <div className="p-3 bg-visupro-green rounded-lg shadow-lg">
                <Zap className="text-white" size={24} />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-visupro-green uppercase text-sm tracking-tighter">Effektivitet i fokus</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Vi minskar den administrativa bördan och samlar all data på ett ställe, vilket frigör värdefull tid för er kärnverksamhet.
          </p>
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="w-8 h-1 bg-visupro-green rounded-full"></div>
            Från papper till raket
          </div>
        </motion.div>

        {/* Trygghet */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
        >
          <div className="bg-visupro-green/5 w-full aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Lock size={120} />
            </div>
            <div className="flex flex-col items-center gap-2 z-10">
              <ShieldCheck className="text-visupro-green" size={48} />
              <div className="px-3 py-1 bg-visupro-green text-white text-[10px] font-bold rounded-full">GDPR COMPLIANT</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-visupro-green uppercase text-sm tracking-tighter">Inbyggd trygghet</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Systemet garanterar rättssäkerhet genom inbyggd regelefterlevnad. Plattformen är helt GDPR-säker med strikt roll- och behörighetsstyrning.
          </p>
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="w-8 h-1 bg-visupro-green rounded-full"></div>
            Säker rollstyrning
          </div>
        </motion.div>

        {/* Precision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
        >
          <div className="bg-visupro-green/5 w-full aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <BarChart3 size={120} />
            </div>
            <div className="grid grid-cols-2 gap-2 z-10">
              <div className="w-12 h-16 bg-visupro-green/20 rounded flex items-end p-1">
                <div className="w-full bg-visupro-green h-1/2 rounded-sm"></div>
              </div>
              <div className="w-12 h-16 bg-visupro-green/20 rounded flex items-end p-1">
                <div className="w-full bg-visupro-green h-3/4 rounded-sm"></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-visupro-green uppercase text-sm tracking-tighter">Precision i uppföljning</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Med samlad data får ni ett kraftfullt verktyg för analys och uppföljning som säkerställer att ni alltid tar rätt beslut i rätt tid.
          </p>
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="w-8 h-1 bg-visupro-green rounded-full"></div>
            Datadrivna beslut
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 px-6 bg-visupro-dark text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-bold text-visupro-light-green uppercase tracking-widest mb-3">Vår Metod</h2>
        <p className="text-3xl lg:text-4xl font-bold">Vägen till en digitaliserad verksamhet</p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-4 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
        
        {[
          { step: "01", title: "Analysera", desc: "Analysera NU-läge" },
          { step: "02", title: "Kravställ", desc: "Kravställ BÖR-läge" },
          { step: "03", title: "Utveckla", desc: "Systemutveckling" },
          { step: "04", title: "Inför", desc: "Inför & förändra" },
          { step: "05", title: "Driv", desc: "Driv, styr & följ upp" }
        ].map((item, i) => (
          <div key={i} className="relative z-10 group">
            <div className="bg-visupro-dark border border-white/10 p-6 rounded-2xl group-hover:border-visupro-light-green transition-all group-hover:shadow-lg group-hover:shadow-visupro-light-green/10">
              <div className="text-visupro-light-green font-mono text-sm mb-4">{item.step}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
            {i < 4 && (
              <div className="md:hidden flex justify-center py-4">
                <ArrowRight className="rotate-90 text-visupro-light-green" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Segments = () => (
  <section id="segment" className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-visupro-light-green uppercase tracking-widest mb-3">Marknad och behov</h2>
        <p className="text-3xl lg:text-4xl font-bold text-visupro-dark">Oändlig potential i tjänsteutbudet</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          {[
            {
              title: "Skola och förskola",
              desc: "Mogen marknad för processtöd. Hög potential men fler aktörer. Ökat behov av processtöd i allt från mindre processer till större för systematiskt kvalitetsarbete.",
              processes: ["Anmälan ledighet", "Årshjul", "Lovskola", "Kränkningar"],
              icon: <GraduationCap className="text-visupro-green" size={24} />
            },
            {
              title: "Vård",
              desc: "Många stora aktörer och längst väg till marknad. Men större upphandlingar kan skapa utrymme för nya aktörer. Störst aktörer inom processtöd.",
              processes: ["Delegering", "Avvikelsehantering"],
              icon: <HeartPulse className="text-visupro-green" size={24} />
            },
            {
              title: "Socialtjänsten",
              desc: "Få verksamhetssystem inom sektor med stort behov av system- och processtöd.",
              processes: ["Ärendehantering", "Dokumentation"],
              icon: <Users className="text-visupro-green" size={24} />
            },
            {
              title: "Privata företag",
              desc: "Företag vana vid verksamhetsstöd men saknar bra processtöd idag. Komplement till system som ClickUp, Monday och Salesforce.",
              processes: ["Klagomålshantering", "Avvikelser (Fintech)"],
              icon: <Building2 className="text-visupro-green" size={24} />
            }
          ].map((segment, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <div className="shrink-0 w-12 h-12 bg-visupro-green/5 rounded-xl flex items-center justify-center group-hover:bg-visupro-green group-hover:text-white transition-colors">
                {segment.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{segment.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {segment.processes.map((p, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-visupro-dark rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Dot Grid Background */}
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <div className="grid grid-cols-6 gap-4">
                {[...Array(36)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-visupro-light-green"
                    style={{ opacity: (i / 36) + 0.2 }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-visupro-green rounded-lg text-xs font-bold uppercase tracking-widest mb-8">
                Vår Potential
              </div>
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Standardiserade och anpassningsbara processer
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Vi har rutiner och flöden som är redo att digitaliseras inom er verksamhet. Systemet är färdigutvecklat, metoden är framtagen och vi har rekryterat rätt kompetens.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-visupro-light-green/20 flex items-center justify-center text-visupro-light-green">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Snabb implementering</div>
                    <div className="text-xs text-slate-500">Från start till drift på rekordtid</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-visupro-light-green/20 flex items-center justify-center text-visupro-light-green">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Hög säkerhet</div>
                    <div className="text-xs text-slate-500">GDPR och rollstyrning inbyggt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating accent */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-visupro-green rounded-3xl -z-10 rotate-12"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-visupro-dark text-white py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Redo att modernisera din verksamhet?</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Låt oss visa hur Visupro kan transformera era processer till effektiva digitala verktyg.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <button className="bg-visupro-light-green text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-visupro-green transition-all">
            Boka en demo
          </button>
          <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Kontakta oss
          </button>
        </div>
      </motion.div>
      
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-visupro-green rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">V</span>
          </div>
          <span className="font-bold text-white">Visupro</span>
          <span className="ml-4">© 2026 Visupro AB. Alla rättigheter förbehållna.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
          <a href="#" className="hover:text-white transition-colors">Användarvillkor</a>
          <a href="#" className="hover:text-white transition-colors">GDPR</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-visupro-light-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Process />
        <Segments />
      </main>
      <Footer />
    </div>
  );
}
