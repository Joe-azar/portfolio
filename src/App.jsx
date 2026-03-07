import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Trophy,
  Dumbbell,
  Goal,
  Sparkles,
  Code2,
  FolderKanban,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const timeline = [
  {
    period: "2018",
    title: "Obtention du baccalauréat scientifique",
    text: "Première étape d’un parcours construit autour de la rigueur et de l’ambition académique.",
    image: "Photo du baccalauréat",
  },
  {
    period: "2019 – 2022",
    title: "Université Antonine — Cycle ingénieur",
    text: "Trois années d’études en informatique et télécommunications au Liban.",
    image: "Photo ou souvenir de l’université",
  },
  {
    period: "2022",
    title: "Arrivée en France",
    text: "Début d’un nouveau chapitre, avec adaptation, autonomie et gestion complète du quotidien.",
    image: "Photo liée à l’arrivée en France",
  },
  {
    period: "2022 – 2024",
    title: "Job étudiant — Burger King",
    text: "Travail sous stress, sens des responsabilités, polyvalence, employé du mois et formation de nouveaux équipiers.",
    image: "Photo ou visuel Burger King",
  },
  {
    period: "06/2023 – 08/2023",
    title: "Stage — IYOO Talents",
    text: "Première expérience professionnelle en développement web, menée en parallèle du job étudiant.",
    image: "Capture ou visuel du stage",
  },
  {
    period: "05/2024 – 08/2024",
    title: "Stage — Deltexplan",
    text: "Début de mon implication sur la GED métier et découverte concrète des besoins utilisateurs.",
    image: "Capture du stage Deltexplan",
  },
  {
    period: "09/2024 – 09/2025",
    title: "Alternance — Deltexplan",
    text: "Montée en responsabilité sur les modules métiers, les workflows internes et le suivi utilisateur.",
    image: "Capture ou photo alternance",
  },
  {
    period: "2025",
    title: "Soutenance de fin d’études",
    text: "Soutenance notée 18/20 avec félicitations du jury, marquant l’aboutissement académique du parcours.",
    image: "Photo de la soutenance",
  },
  {
    period: "2025",
    title: "Remise de diplôme",
    text: "Moment symbolique qui concrétise plusieurs années d’effort, de progression et de persévérance.",
    image: "Photo de remise de diplôme",
  },
  {
    period: "09/2025 – Présent",
    title: "CDI — Deltexplan",
    text: "Poursuite du développement et de l’amélioration de la GED devenue un outil central pour l’entreprise.",
    image: "Capture ou visuel CDI Deltexplan",
  },
];

const highlights = [
  "Transformation d’une GED peu utilisée en outil central pour l’entreprise",
  "Cycle complet pris en charge : besoin, conception, développement, tests, déploiement, support",
  "Développement de modules RH, feuilles d’heures, congés, coffre-fort salarié, statistiques",
  "12 700 € d’économies annuelles IT identifiées grâce à un audit interne",
];

const projectGroups = [
  {
    title: "Développement logiciel & web",
    accent: "from-cyan-500/20 via-blue-500/10 to-purple-500/10",
    projects: [
      {
        title: "Système de gestion de magasin",
        text: "Application multi-modules avec stock, ventes, clients, personnel, promotions et statistiques, construite avec architecture MVC et modélisation UML.",
        tags: ["Java", "POO", "MVC", "UML"],
      },
      {
        title: "SDIAL",
        text: "Système de gestion académique évolué d’une architecture client-serveur vers une architecture 3-tiers avec API REST.",
        tags: ["Java 21", "API REST", "3-tiers", "OpenAPI"],
      },
      {
        title: "Task Manager",
        text: "Application web full-stack de gestion de tâches avec backend API, persistance des données et logique CRUD.",
        tags: ["React", "Node.js", "MongoDB", "API REST"],
      },
      {
        title: "Portail domotique intelligent",
        text: "Application mobile connectée à une API backend pour gérer un portail intelligent, les plaques autorisées et l’historique des accès.",
        tags: ["React Native", "Node.js", "MySQL", "IoT"],
      },
      {
        title: "Chatbot documentaire",
        text: "Assistant capable de répondre à partir d’une base documentaire en s’appuyant sur Python, FastAPI et l’API OpenAI.",
        tags: ["Python", "FastAPI", "OpenAI", "NLP"],
      },
      {
        title: "Plateforme e-commerce",
        text: "Application e-commerce avec catalogue, panier et tunnel de commande multi-étapes.",
        tags: ["Angular", "Node.js", "API", "Base de données"],
      },
    ],
  },
  {
    title: "IA, services & data",
    accent: "from-emerald-500/20 via-teal-500/10 to-cyan-500/10",
    projects: [
      {
        title: "Service Web composite de prêt immobilier",
        text: "Orchestration SOA de services pour traiter une demande de prêt immobilier en langage naturel et produire une décision d’approbation.",
        tags: ["SOA", "Web Services", "Orchestration", "NLP"],
      },
      {
        title: "API RAG avec embeddings",
        text: "Service d’encodage documentaire et moteur de recherche sémantique par similarité cosinus.",
        tags: ["Python", "FastAPI", "Embeddings", "Recherche sémantique"],
      },
      {
        title: "Analyse Big Data automobile",
        text: "Analyse statistique d’un dataset automobile avec régression, ACP et modélisation du prix des véhicules.",
        tags: ["R", "Régression", "ACP", "Data"],
      },
      {
        title: "Visualisation dynamique des messages CAM",
        text: "Lecture de messages réseau depuis un PCAP, publication MQTT et affichage temps réel des trajectoires sur OpenStreetMap.",
        tags: ["Python", "MQTT", "OpenStreetMap", "Temps réel"],
      },
    ],
  },
  {
    title: "Algorithmique, jeux & graphes",
    accent: "from-amber-500/20 via-orange-500/10 to-red-500/10",
    projects: [
      {
        title: "Rummikub",
        text: "Jeu complet avec interface graphique, gestion des joueurs, combinaisons, jokers, score et mode humain vs ordinateur.",
        tags: ["C", "Algorithmique", "Jeu", "Interface graphique"],
      },
      {
        title: "Wargame tactique tour par tour",
        text: "Jeu de stratégie sur grille hexagonale avec unités, terrains, brouillard de guerre, sauvegarde, multijoueur local et IA.",
        tags: ["Java", "Swing", "POO", "Maven"],
      },
      {
        title: "Analyse et comparaison d’algorithmes",
        text: "Implémentation, validation, invariants de boucle, preuve, analyse de complexité et tests de performance.",
        tags: ["C/C++", "Complexité", "Validation", "Linux"],
      },
      {
        title: "Analyse de graphes issus du Web",
        text: "Étude de graphes de réseaux sociaux avec composantes connexes, triangles, distribution des degrés et dégénérescence.",
        tags: ["C++", "Graphes", "Réseaux", "Analyse"],
      },
    ],
  },
  {
    title: "Systèmes, Linux & HPC",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-indigo-500/10",
    projects: [
      {
        title: "Système de gestion de serveurs",
        text: "Application multiprocessus pour superviser un serveur principal et un serveur de secours, synchroniser les fichiers et journaliser l’activité.",
        tags: ["C", "Linux/UNIX", "Multiprocessus", "Fichiers"],
      },
      {
        title: "Optimisation d’une simulation N-corps 3D",
        text: "Analyse et optimisation d’un noyau de simulation gravitationnelle avec benchmark compilateurs et parallélisme CPU.",
        tags: ["C", "OpenMP", "OpenBLAS", "Benchmarking"],
      },
      {
        title: "Filtrage matriciel parallèle inspiré des CNN",
        text: "Application parallèle d’un filtre sur matrice avec étude du strong scaling, weak scaling et optimisation cache.",
        tags: ["C", "Parallèle", "OpenMP", "Performance"],
      },
      {
        title: "Optimisation HPC d’un calcul SpMV",
        text: "Analyse et optimisation d’une multiplication matrice creuse × vecteur avec profiling, stabilité et scalabilité.",
        tags: ["C/C++", "OpenMP", "MAQAO", "HPC"],
      },
    ],
  },
];

const qualities = ["Organisé", "Autonome", "Responsable", "Sérieux", "Débrouillard", "Perfectionniste"];
const passions = ["Sport", "Football", "Musculation"];
const languages = [
  { flag: "🇫🇷", name: "Français", level: "Bilingue" },
  { flag: "🇬🇧", name: "Anglais", level: "TOEIC 900" },
  { flag: "🇱🇧", name: "Arabe", level: "Langue maternelle" },
  { flag: "🇪🇸", name: "Espagnol", level: "Débutant" },
];

export default function PortfolioJoeAzar() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_25%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">Joe Azar</p>
            <p className="text-xs text-slate-400">Ingénieur logiciel · Développeur full-stack</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#parcours" className="transition hover:text-white">Parcours</a>
            <a href="#impact" className="transition hover:text-white">Impact</a>
            <a href="#projets" className="transition hover:text-white">Projets</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Un profil technique, autonome et fiable
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Développeur full-stack avec un parcours construit par le travail, l’autonomie et la responsabilité.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Arrivé en France en 2022, j’ai mené de front études d’ingénieur, job étudiant et expériences professionnelles tout en développant une vraie capacité à comprendre les besoins métier et à construire des solutions utiles.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <a href="#parcours">Voir mon parcours</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 text-white hover:bg-white/10">
                <a href="#impact">Voir mon impact</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20">
              <CardContent className="p-8">
                <div className="mb-8 space-y-5">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/10">
                    <div className="flex h-64 items-center justify-center text-center text-slate-300">
                      <div className="max-w-[80%]">
                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Photo principale</p>
                        <p className="mt-3 text-xl font-semibold text-white">Ajoutez ici votre meilleure photo professionnelle</p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">Idéalement un portrait propre, naturel et lumineux, pour humaniser immédiatement votre profil.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-white">Joe Azar</h2>
                    <p className="text-slate-300">Ingénieur logiciel / Développeur full-stack</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-300" /><span>Sèvres, France</span></div>
                  <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-cyan-300" /><span>joe.azar@hotmail.com</span></div>
                  <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cyan-300" /><span>+33 7 52 07 91 18</span></div>
                  <div className="flex items-start gap-3"><Linkedin className="mt-0.5 h-4 w-4 text-cyan-300" /><a href="https://linkedin.com/in/joe-azar-b78835237" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></div>
                  <div className="flex items-start gap-3"><Github className="mt-0.5 h-4 w-4 text-cyan-300" /><a href="https://github.com/Joe-azar" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Qualités</p>
                    <p className="mt-2 text-sm text-white">Organisé, autonome, responsable</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Passions</p>
                    <p className="mt-2 text-sm text-white">Foot, sport, musculation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="parcours" className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Parcours</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Mon parcours en quelques étapes clés</h2>
            </div>

            <div className="grid gap-4">
              {timeline.map((item) => (
                <Card key={item.period + item.title} className="rounded-[1.75rem] border-white/10 bg-white/5 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid gap-5 md:grid-cols-[160px_1fr_220px] md:items-center md:gap-6">
                      <div>
                        <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                      </div>

                      <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/10">
                        <div className="flex h-32 items-center justify-center px-4 text-center">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Image</p>
                            <p className="mt-2 text-sm font-medium text-white">{item.image}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="impact" className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Card className="rounded-[2rem] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Deltexplan</p>
                      <h2 className="text-2xl font-bold text-white">L’importance et l’impact de mon travail</h2>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {highlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/8 bg-slate-900/60 px-4 py-3 leading-7 text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <Card className="rounded-[2rem] border-white/10 bg-white/5">
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <FolderKanban className="h-6 w-6 text-cyan-300" />
                      <h3 className="text-xl font-semibold text-white">Modules clés</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Feuilles d’heures", "Congés", "Coffre-fort salarié", "Statistiques", "Pilotage métier"].map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[2rem] border-white/10 bg-white/5">
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-cyan-300" />
                      <h3 className="text-xl font-semibold text-white">Ce que cela montre</h3>
                    </div>
                    <p className="leading-7 text-slate-300">
                      Au-delà du développement, mon travail montre une vraie capacité à prendre en charge un besoin métier, à structurer une solution et à livrer un outil utile, maintenable et adopté par les utilisateurs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projets" className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Projets</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Projets académiques & techniques</h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {projectGroups.map((group) => (
                <Card key={group.title} className="rounded-[2rem] border-white/10 bg-white/5 overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${group.accent}`} />
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                      <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                        {group.projects.length} projets
                      </span>
                    </div>

                    <div className="grid gap-4">
                      {group.projects.map((project) => (
                        <div key={project.title} className="rounded-[1.5rem] border border-white/8 bg-slate-900/60 p-5">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                            <Code2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          </div>
                          <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="rounded-[2rem] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-cyan-300" />
                    <h2 className="text-2xl font-bold text-white">Mes qualités</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {qualities.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Dumbbell className="h-6 w-6 text-cyan-300" />
                    <h2 className="text-2xl font-bold text-white">Mes passions</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {passions.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-slate-300">
                    <Goal className="h-5 w-5 text-cyan-300" />
                    <p>Le sport reflète ma discipline, ma constance et mon esprit d’équipe.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-cyan-300" />
                    <h2 className="text-2xl font-bold text-white">Langues</h2>
                  </div>
                  <div className="space-y-3">
                    {languages.map((language) => (
                      <div key={language.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{language.flag}</span>
                          <span className="text-white">{language.name}</span>
                        </div>
                        <span className="text-sm text-cyan-200">{language.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-18">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <Card className="rounded-[2.25rem] border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20">
              <CardContent className="p-8 sm:p-10 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Vous cherchez un profil sérieux, autonome et impliqué ?
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                      Je suis ouvert aux opportunités en développement logiciel, full-stack et systèmes d’information métiers.
                    </p>
                  </div>

                  <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/60 p-6">
                    <a href="mailto:joe.azar@hotmail.com" className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-slate-200 transition hover:bg-white/10">
                      <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-300" /> Envoyer un email</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com/in/joe-azar-b78835237" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-slate-200 transition hover:bg-white/10">
                      <span className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="https://github.com/Joe-azar" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-slate-200 transition hover:bg-white/10">
                      <span className="flex items-center gap-3"><Github className="h-4 w-4 text-cyan-300" /> GitHub</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
