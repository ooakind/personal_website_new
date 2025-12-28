import React, { useState, useRef, useEffect } from 'react';
import {
  Flag,
  User,
  BookOpen,
  Award,
  Briefcase,
  GraduationCap,
  FileText,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MapPin,
  Download,
  Beaker,
  Globe,
  Mic,
  Newspaper,
  MessageSquare,
  Send,
  Sparkles,
  Loader2,
  Copy,
  Check,
  Video,
  Users
} from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Real Data (Hyojin Ju) ---

  const profile = {
    name: "Hyojin Ju",
    pronouns: "she/her",
    role: "Ph.D. Student",
    department: "Computer Science and Engineering",
    lab: "Human-centered Intelligent Systems Lab (HIS Lab)",
    labUrl: "https://his-lab.org",
    institution: "Dept. of Computer Science and Engineering, POSTECH",
    institutionUrl: "https://cse.postech.ac.kr/csepostech/index.do",
    location: "Pohang, South Korea",
    email: "hyojin.ju@postech.ac.kr",
    website: "hyojinju.com",
    bio: (
      <>
        <p className="mb-6">
          I am actively exploring human-centered intelligent systems, asking the long-term research question:
        </p>
        <blockquote className="border-l-4 border-slate-200 pl-6 py-2 my-8 italic font-semibold text-slate-800 bg-slate-50/50 rounded-r-lg">
          “Could highly intelligent AI systems reduce social conflicts by mitigating the inevitable human errors behind them?”
        </blockquote>
        <p className="mb-6">
          I have been delving into the follow-up questions of what kinds of AI systems would be effective in addressing various real-life social challenges and how to design and develop such systems.
        </p>
        <p>
          My current research interests include <span className="font-semibold text-slate-900">personal AI assistants</span>, <span className="font-semibold text-slate-900">AI agents that understand human cognitive and emotional processes</span>, and <span className="font-semibold text-slate-900">personality and social psychology</span>.
        </p>
      </>
    ),
    interests: ["Personal AI Assistants", "Human-AI Interaction", "Social Psychology", "Intelligent Systems"],
    social: {
      scholar: "https://scholar.google.com/citations?user=TTwSuscAAAAJ&hl=ko",
      github: "https://github.com/ooakind",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/hyojinju"
    }
  };

  // const skills = {
  //   languages: "Python, JavaScript, HTML/CSS",
  //   frameworks: "React, Node.js",
  //   tools: "Git, LaTeX"
  // };

  const news = [
    { date: "Dec 2025", text: "'EmoSync' won BK21 Best Paper Award!" },
    { date: "June 2025", text: "Featured in a [live radio interview on KBS Pohang](https://program.kbs.co.kr/1radio/local/morningpoh/pc/board.html?smenu=154e2b&bbs_loc=R2006-0309-03-121830,read,,2760,1918681) regarding our EmoSync research." },
    { date: "Apr 2025", text: "'EmoSync' won Popular Choice Honorable Mention Award (Top 5%) at CHI '25 Interactivity!" },
    { date: "Jan 2025", text: "My first, first-authored paper ['Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression'](https://dl.acm.org/doi/10.1145/3706598.3714122) (a.k.a. 'EmoSync') accepted to CHI 2025!" }
  ];

  const experience = [
    {
      role: "Integrated MS/Ph.D. Program (Advisor: Prof. Inseok Hwang)",
      org: "Human-centered Intelligent Systems Lab (HIS Lab), POSTECH",
      location: "Pohang, South Korea",
      dates: "Feb 2023 - Present",
      desc: "Conducting research on human-centered intelligent systems, focusing on AI agents that understand human cognitive and emotional processes.",
    }
  ];

  const publications = [
    {
      year: 2025,
      items: [
        {
          title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
          authors: "Hyojin Ju, Jungeun Lee, Seungwon Yang, Jungseul Ok, Inseok Hwang",
          venue: "CHI 2025",
          type: "paper",
          award: null,
          image: "/research_images/Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression.png",
          links: {
            paper: "https://dl.acm.org/doi/10.1145/3706598.3714122",
            video: "https://www.youtube.com/watch?v=sT1gxhITWyU"
          }
        },
        {
          title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
          authors: "Hyojin Ju, Jungeun Lee, Seungwon Yang, Jungseul Ok, Inseok Hwang",
          venue: "CHI Interactivity '25",
          type: "adjunct",
          award: "Popular Choice Honorable Mention Award (Top 5%)",
          image: "/research_images/Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression (Interactivity).png",
          links: {
            link: "https://programs.sigchi.org/chi/2025/program/content/194724"
          }
        }
      ]
    },
    {
      year: 2022,
      items: [
        {
          title: "SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability",
          authors: "Jungeun Lee, Sungnam Kim, Minki Cheon, Hyojin Ju, JaeEun Lee, Inseok Hwang",
          venue: "UIST 2022",
          type: "paper",
          image: "/research_images/SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability.png",
          links: {
            paper: "https://dl.acm.org/doi/10.1145/3526113.3545709",
            video: "https://www.youtube.com/watch?v=7NrRZHVA1eI"
          }
        },
        {
          title: "Demonstrating SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability",
          authors: "Jungeun Lee, Hyojin Ju, Sungnam Kim, Minki Cheon, JaeEun Lee, Inseok Hwang",
          venue: "UIST '22 Adjunct",
          type: "adjunct",
          image: "/research_images/Demonstrating SleepGuru: Personalized Sleep Planning System for Real-life Actionability and Negotiability.png",
          links: {
            paper: "https://dl.acm.org/doi/10.1145/3526114.3558664"
          }
        }
      ]
    }
  ];

  const teaching = [
    { course: "Mobile Ubiquitous Computing (CSED404)", role: "Teaching Assistant", term: "2024-2", uni: "Dept. of CSE, POSTECH" },
    { course: "Human-Computer Interaction (CSED402)", role: "Teaching Assistant", term: "2025-2", uni: "Dept. of CSE, POSTECH" },
  ];

  const education = [
    { degree: "Integrated MS/Ph.D. Program in Computer Science and Engineering", school: "POSTECH", year: "Feb 2023 - Present" },
    { degree: "B.S. in Electrical Engineering", school: "POSTECH", year: "Feb 2023" },
  ];

  const awards = [
    { title: "Popular Choice Honorable Mention Award (Top 5%)", org: "CHI Interactivity", year: "2025" },
    { title: "BK21 Best Paper Award", org: "Dept. of CSE, POSTECH", year: "2025" },
    { title: "Undergraduate Group Research Program (3rd)", org: "POSTECH", year: "2021" },
  ];

  const service = [
    "External Reviewer, CHI 2026 Papers",
    "External Reviewer, CHI 2025 Case Studies",
    "External Reviewer, IMWUT 2024 (November)"
  ];

  const invitedTalks = [
    {
      title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
      event: "Top Conference Session at KCC (Korea Computer Congress)",
      location: "Jeju, South Korea",
      year: "2025",
      image: "/photos/kcc2025.png"
    },
    {
      title: "Toward Affective Empathy via Personalized Analogy Generation: A Case Study on Microaggression",
      event: "POSTECH-Keio Joint Workshop",
      location: "Keio University (Shonan-Fujisawa Campus), Japan",
      year: "2025",
      image: "/photos/keio3.png"
    }
  ];

  const internships = [
    {
      role: "Development Intern",
      org: "Recommendation Team, Kakao Corp.",
      location: "Seongnam, South Korea (Remote)",
      dates: "Jun 2021 - Aug 2021",
      desc: "Developed and tested recommendation systems for KakaoTalk and Melon using ML/DL techniques.",
      image: "/photos/kakao_2021.png"
    }
  ];

  const conferenceAttendance = [
    {
      role: "Paper / Demo Presenter",
      event: "CHI 2025",
      location: "Yokohama, Japan",
      year: "2025",
      image: "/photos/chi2025.png"
    },
    { role: "Demo Presenter, Student Volunteer", event: "UIST 2022", location: "Bend, OR, USA", year: "2022", image: "/photos/uist2022_sv.jpg" }
  ];

  const patents = [
    {
      title: "Electronic device and method for providing similar situation for emotional empathy using artificial intelligence model",
      items: [
        "Korea Patent Pending. Application No. 10-2025-0107924 (Application Date: Aug. 6, 2025)"
      ]
    },
    {
      title: "Personalized Sleep Planning System Considering Individual Dynamic Constraints and Sleep Schedule Creating Method Using Same",
      items: [
        "U.S. Patent Pending. Application No. 17/886446 (Application Date: Aug. 11, 2022)"
      ]
    },
    {
      title: "Personalized Sleep Planning System Considering Individual Dynamic Constraints and Sleep Schedules Creation Method Therefore",
      items: [
        "Korea Patent No. 10-2839271. (Issue Date: Jul. 23, 2025; Application Date: Jun. 28, 2022)"]
    }
  ];

  // Dummy data. Not used in the website yet.
  const mediaCoverage = [
    {
      title: "Live Radio Interview on EmoSync Research",
      source: "KBS Pohang",
      date: "June 2025",
      link: "https://program.kbs.co.kr/1radio/local/morningpoh/pc/board.html?smenu=154e2b&bbs_loc=R2006-0309-03-121830,read,,2760,1918681"
    }
  ];

  // --- Helper Components ---

  const ExperienceItem = ({ date, location, title, subtitle, desc, image }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {/* Date Column */}
        <div className="md:col-span-1 py-2">
          <div className="font-bold text-slate-900">{date}</div>
          <div className="text-sm text-slate-500 mt-1">{location}</div>
        </div>

        {/* Content Column */}
        <div className={`md:col-span-3 ${image ? 'relative rounded-xl overflow-hidden p-6 shadow-md group min-h-[160px] flex flex-col justify-center' : 'py-2 space-y-2'}`}>

          {/* Background Image if present */}
          {image && (
            <>
              <div className="absolute inset-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/20"></div>
              </div>
            </>
          )}

          {/* Text Content */}
          <div className={`relative z-10`}>
            <div>
              <h3 className="text-lg font-bold leading-tight text-slate-900">
                {title}
              </h3>
              <div className="font-medium mt-1 text-primary-700">
                {subtitle}
              </div>
            </div>
            {desc && (
              <p className="leading-relaxed text-sm mt-2 text-slate-700">
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- Components ---

  const SocialIcon = ({ href, icon: Icon }) => (
    <a
      href={href}
      className="text-primary-600 transition-colors p-1"
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={20} />
    </a>
  );

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center space-x-3
        ${activeSection === id
          ? 'text-slate-900 bg-slate-100 font-semibold'
          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
        }`}
    >
      <Icon size={16} className={`opacity-70 ${activeSection === id ? 'text-primary-600' : ''}`} />
      <span>{label}</span>
    </button>
  );

  // Helper to parse [text](url) links
  const parseLinks = (text) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={lastIndex}
          href={match[2]}
          target="_blank"
          rel="noreferrer"
          className="text-primary-600 hover:underline font-medium"
        >
          {match[1]}
        </a>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const HighlightAuthor = ({ authors }) => {
    const parts = authors.split('Hyojin Ju');
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && <span className="font-semibold text-slate-900">Hyojin Ju</span>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col md:flex-row">

      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 transform transition-transform duration-300 ease-in-out overflow-y-auto print:hidden
        md:translate-x-0 md:static md:h-screen
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-8 flex flex-col h-full">

          {/* Profile Header */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-slate-100 rounded-full mb-6 overflow-hidden relative group border-4 border-slate-50 shadow-sm">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h1 className="text-2xl font-bold text-center text-slate-900 tracking-tight">{profile.name}</h1>
            <p className="text-center text-slate-500 text-sm mt-1">{profile.pronouns}</p>

            <div className="mt-4 text-center space-y-1">
              <p className="text-sm font-medium text-slate-800">{profile.role}</p>
              <a
                href={profile.labUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-500 tracking-wide hover:text-primary-600 transition-colors block"
              >
                {profile.lab}
              </a>
              <a
                href={profile.institutionUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-500 tracking-wide hover:text-primary-600 transition-colors block"
              >
                {profile.institution}
              </a>
            </div>

            <div className="mt-6 flex justify-center space-x-3 border-t border-slate-100 pt-6">
              <SocialIcon href={`mailto:${profile.email}`} icon={Mail} />
              <SocialIcon href={profile.social.scholar} icon={GraduationCap} />
              {/* <SocialIcon href={profile.social.github} icon={Github} /> */}
              <SocialIcon href={profile.social.linkedin} icon={Linkedin} />
            </div>

            <div className="mt-4 flex items-center justify-center text-xs text-slate-400">
              <MapPin size={12} className="mr-1" /> {profile.location}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            <NavItem id="home" label="About" icon={User} />
            <NavItem id="publications" label="Publications" icon={Beaker} />
            <NavItem id="experience" label="Experience" icon={Briefcase} />
            <NavItem id="misc" label="Misc" icon={Award} />
            <NavItem id="cv" label="CV" icon={FileText} />
          </nav>

          <div className="mt-8 text-xs text-center text-slate-400">
            &copy; 2025 {profile.name}
          </div>
        </div>
      </aside>

      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-100 p-4 z-40 flex justify-between items-center print:hidden">
        <span className="font-bold text-lg">{profile.name}</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- OVERLAY for Mobile --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-6 pt-20 md:p-16 md:pt-16 max-w-4xl mx-auto overflow-y-auto h-screen relative">

        {/* ABOUT / HOME */}
        {activeSection === 'home' && (
          <div className="animate-fade-in space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">About Me</h2>
              <div className="text-lg text-slate-700 leading-relaxed font-light">
                {profile.bio}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">News</h3>
              <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
                {news.map((item, i) => {
                  let Icon = Newspaper;
                  if (item.text.toLowerCase().includes('paper')) Icon = FileText;
                  if (item.text.toLowerCase().includes('award')) Icon = Award;
                  if (item.text.toLowerCase().includes('started')) Icon = Flag;

                  return (
                    <div key={i} className="relative pl-8">
                      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-4 border-slate-300 flex items-center justify-center">
                      </span>

                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full w-fit">
                          {item.date}
                        </span>
                      </div>
                      <div className="text-slate-700 text-sm leading-relaxed flex items-start gap-2">
                        <Icon size={16} className="mt-0.5 text-slate-400 shrink-0" />
                        <span>{parseLinks(item.text)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* PUBLICATIONS */}
        {activeSection === 'publications' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Publications</h2>

            <div className="space-y-12">
              {publications.map((group, gIdx) => (
                <div key={gIdx}>
                  <h3 className="text-xl font-bold text-slate-300 mb-6 border-b border-slate-50 pb-2">{group.year}</h3>
                  <div className="space-y-8">
                    {group.items.map((pub, pIdx) => (
                      <div key={pIdx} className="flex flex-col sm:flex-row gap-6 group">

                        {/* Thumbnail Image */}
                        {pub.image && (
                          <div className="sm:w-48 shrink-0">
                            <div className="aspect-video w-full overflow-hidden rounded-lg border border-slate-100 shadow-sm">
                              <img
                                src={pub.image}
                                alt={pub.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col gap-1 flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">
                            {pub.title}
                          </h4>
                          <div className="text-slate-600">
                            <HighlightAuthor authors={pub.authors} />
                          </div>
                          <div className="flex flex-wrap items-center gap-x-3 text-sm mt-1">
                            <span className="font-medium italic text-slate-800">{pub.venue}</span>
                            {pub.award && (
                              <span className="text-amber-600 font-medium flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-xs">
                                <Award size={12} /> {pub.award}
                              </span>
                            )}
                          </div>
                          <div className="flex gap-3 mt-3 text-sm">
                            {Object.entries(pub.links).map(([key, url]) => (
                              <a
                                key={key}
                                href={url}
                                className="text-slate-500 hover:text-primary-600 hover:underline capitalize font-medium flex items-center gap-1 transition-colors"
                              >
                                {key === 'paper' && <FileText size={14} />}
                                {key === 'code' && <Github size={14} />}
                                {key === 'video' && <Video size={14} />}
                                {key === 'link' && <ExternalLink size={14} />}
                                {key}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE (Timeline View) */}
        {activeSection === 'experience' && (
          <div className="animate-fade-in max-w-4xl space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Experience</h2>

            {/* Reusable ExperienceItem Component */}
            {/* This component should be defined elsewhere, e.g., in a components folder,
                but for the purpose of this edit, we'll assume it's available or define it inline. */}
            {/*
              const ExperienceItem = ({ date, location, title, subtitle, desc, image }) => {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <div className="font-bold text-slate-900">{date}</div>
                      <div className="text-sm text-slate-500 mt-1">{location}</div>
                    </div>
                    <div className="md:col-span-3">
                      {image ? (
                        <div className="relative rounded-lg overflow-hidden p-6 text-white flex flex-col justify-end min-h-[150px] shadow-md">
                          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
                          <div className="absolute inset-0 bg-black/40 z-10"></div>
                          <div className="relative z-20">
                            <h3 className="text-xl font-bold leading-tight">{title}</h3>
                            <div className="text-lg font-medium mt-1">{subtitle}</div>
                            {desc && <p className="leading-relaxed text-[15px] mt-2">{desc}</p>}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-slate-900 leading-tight">{title}</h3>
                          <div className="text-lg text-primary-600 font-medium mt-1">{subtitle}</div>
                          {desc && <p className="text-slate-600 leading-relaxed text-[15px]">{desc}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              };
            */}

            {/* Research Experience */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Beaker size={20} className="text-slate-400" /> Research Experience
              </h3>
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <ExperienceItem
                    key={idx}
                    date={job.dates}
                    location={job.location}
                    title={job.org}
                    subtitle={job.role}
                    desc={job.desc}
                    image={job.image}
                  />
                ))}
              </div>
            </section>

            {/* Honors & Awards */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Award size={20} className="text-slate-400" /> Honors & Awards
              </h3>
              <div className="space-y-6">
                {awards.map((award, i) => (
                  <ExperienceItem
                    key={i}
                    date={award.year}
                    title={award.title}
                    subtitle={award.org}
                  />
                ))}
              </div>
            </section>

            {/* Conference Attendance */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Globe size={20} className="text-slate-400" /> Conference Attendance
              </h3>
              <div className="space-y-6">
                {conferenceAttendance.map((item, i) => (
                  <ExperienceItem
                    key={i}
                    date={item.year}
                    location={item.location}
                    title={item.event}
                    subtitle={item.role}
                    image={item.image}
                  />
                ))}
              </div>
            </section>

            {/* Invited Talks */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Mic size={20} className="text-slate-400" /> Invited Talks
              </h3>
              <div className="space-y-6">
                {invitedTalks.map((talk, i) => (
                  <ExperienceItem
                    key={i}
                    date={talk.year}
                    location={talk.location}
                    title={talk.event}
                    subtitle={`"${talk.title}"`}
                    image={talk.image}
                  />
                ))}
              </div>
            </section>

            {/* Internships */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Briefcase size={20} className="text-slate-400" /> Internships
              </h3>
              <div className="space-y-8">
                {internships.map((job, idx) => (
                  <ExperienceItem
                    key={idx}
                    date={job.dates}
                    location={job.location}
                    title={job.org}
                    subtitle={job.role}
                    desc={job.desc}
                    image={job.image}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* FULL CV View */}
        {activeSection === 'cv' && (
          <div className="animate-fade-in space-y-8">
            {/* CV Header with Download & Actions */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-slate-200 pb-6 mb-8 gap-4 print:hidden">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h2>
                <p className="text-slate-500 mt-1">Last updated: 2025.12.27</p>
              </div>
              <div className="flex gap-3">
                {/* <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-2 text-sm font-medium text-white bg-slate-900 hover:bg-primary-600 px-4 py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <Download size={16} /> <span>Download PDF</span>
                </button> */}
              </div>
            </div>



            <div id="cv-container" className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12 print:shadow-none print:border-none print:p-0">

              {/* Header inside CV paper */}
              <div className="text-center mb-12">
                <h1 className="text-2xl font-bold uppercase tracking-widest text-slate-900 mb-2">{profile.name}</h1>
                <div className="text-sm text-slate-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1"><Mail size={12} /> {profile.email}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1"><Globe size={12} /> {profile.website}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {profile.location}</span>
                </div>
              </div>

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="grid sm:grid-cols-[1fr_120px] gap-1">
                      <div>
                        <div className="font-bold text-slate-900">{edu.school}</div>
                        <div className="text-slate-700 text-sm">{edu.degree}</div>
                      </div>
                      <div className="text-slate-500 text-sm font-mono text-right">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Research Experience</h3>
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <div key={i} className="grid sm:grid-cols-[1fr_120px] gap-1">
                      <div>
                        <div className="font-bold text-slate-900">{job.role}</div>
                        <div className="text-slate-700 text-sm italic mb-1">{job.org}, {job.location}</div>
                      </div>
                      <div className="text-slate-500 text-sm font-mono text-right">{job.dates}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Publications</h3>

                {/* Papers */}
                <div className="mb-6">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm">Full Papers</h4>
                  <div className="space-y-4">
                    {publications.flatMap(g => g.items).filter(p => p.type === 'paper').map((pub, i) => (
                      <div key={i} className="text-sm text-slate-700 pl-4 relative">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        <span className="font-semibold text-slate-900">{pub.title}</span>. <HighlightAuthor authors={pub.authors} />. <span className="italic">{pub.venue}</span>.
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demos & Posters */}
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-sm">Posters & Demos</h4>
                  <div className="space-y-4">
                    {publications.flatMap(g => g.items).filter(p => p.type === 'adjunct').map((pub, i) => (
                      <div key={i} className="text-sm text-slate-700 pl-4 relative">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        <span className="font-semibold text-slate-900">{pub.title}</span>. <HighlightAuthor authors={pub.authors} />. <span className="italic">{pub.venue}</span>.
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patents for CV */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Patents</h3>
                <div className="space-y-4">
                  {patents.map((p, i) => (
                    <div key={i} className="text-sm text-slate-700 pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      <span className="font-semibold text-slate-900">"{p.title}"</span>
                      <ul className="list-none mt-1 space-y-0.5">
                        {p.items.map((item, j) => (
                          <li key={j} className="text-slate-500 text-xs pl-2 border-l-2 border-slate-200 ml-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {patents.length === 0 && <p className="text-slate-500 italic text-sm">No patents information available.</p>}
                </div>
              </div>

              {/* Awards */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Honors & Awards</h3>
                <div className="space-y-2">
                  {awards.map((award, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-slate-700"><span className="font-semibold text-slate-900">{award.title}</span>, {award.org}</span>
                      <span className="text-slate-500 font-mono">{award.year.split('-')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invited Talks for CV */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Invited Talks</h3>
                <div className="space-y-2">
                  {invitedTalks.map((talk, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-slate-700">"<span className="font-semibold text-slate-900">{talk.title}</span>", {talk.event}</span>
                      <span className="text-slate-500 font-mono">{talk.year}</span>
                    </div>
                  ))}
                  {invitedTalks.length === 0 && <p className="text-slate-500 italic">Information pending...</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">Professional Service</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  {service.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )
        }

        {/* MISC */}
        {
          activeSection === 'misc' && (
            <div className="animate-fade-in space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Miscellaneous</h2>

              <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <FileText size={24} />
                  </div>
                  Patents
                </h3>
                <ul className="space-y-6 list-none">
                  {patents.map((p, i) => (
                    <li key={i} className="text-slate-900 leading-tight">
                      <div className="font-bold text-base mb-2">"{p.title}"</div>
                      <ul className="list-none space-y-2 pl-4 border-l-2 border-slate-100">
                        {p.items.map((item, j) => (
                          <li key={j} className="text-primary-600 text-sm flex items-start gap-2">
                            {/* <span className="mt-1 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span> */}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  {patents.length === 0 && <p className="text-slate-500 italic">No patents listed yet.</p>}
                </ul>
              </section>

              <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <BookOpen size={24} />
                  </div>
                  Teaching
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {teaching.map((t, i) => (
                    <li key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold tracking-wide text-primary-700 bg-primary-500 px-2 py-1 rounded-md uppercase">
                          {t.term}
                        </span>
                        <span className="text-xs text-slate-400">{t.uni}</span>
                      </div>
                      <div className="font-bold text-slate-900 text-base mb-1">{t.course}</div>
                      <div className="text-slate-600 text-sm font-medium">{t.role}</div>
                    </li>
                  ))}
                  {teaching.length === 0 && <p className="text-slate-500 italic">No teaching experience listed yet.</p>}
                </ul>
              </section>

              <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <Users size={24} />
                  </div>
                  Professional Service
                </h3>
                <ul className="space-y-3">
                  {service.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 group">
                      <Check size={18} className="mt-1 text-primary-600 shrink-0" />
                      <span className="text-sm font-medium group-hover:text-slate-900 transition-colors">{s}</span>
                    </li>
                  ))}
                  {service.length === 0 && <p className="text-slate-500 italic">No service listed yet.</p>}
                </ul>
              </section>

              <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <Newspaper size={24} />
                  </div>
                  Media Coverage
                </h3>
                <ul className="space-y-6 list-none">
                  {mediaCoverage.map((item, i) => (
                    <li key={i} className="group">
                      <div className="font-bold text-slate-900 text-base group-hover:text-primary-600 transition-colors">
                        <a href={item.link}>{item.title}</a>
                      </div>
                      <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                        <span className="font-semibold text-slate-700">{item.source}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="font-mono text-xs">{item.date}</span>
                      </div>
                    </li>
                  ))}
                  {mediaCoverage.length === 0 && <div className="text-slate-500 italic p-4 bg-slate-50 rounded-lg border border-dashed border-slate-200 text-center">No information posted yet.</div>}
                </ul>
              </section>
            </div>
          )
        }
      </main >
    </div >
  );
};

export default Website;
