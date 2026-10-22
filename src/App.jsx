import { useState, useEffect, useRef, createElement } from 'react';
import { User, FlaskConical, Briefcase, Award, FileText, Menu, X, Mail, Linkedin, GraduationCap, MapPin } from 'lucide-react';
import { profile } from './data.jsx';
import About from './pages/About.jsx';
import Publications from './pages/Publications.jsx';
import Experience from './pages/Experience.jsx';
import Misc from './pages/Misc.jsx';
import Cv from './pages/Cv.jsx';

const NAV = [
  { id: 'home', label: 'About', icon: User },
  { id: 'publications', label: 'Publications', icon: FlaskConical },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'misc', label: 'Misc', icon: Award },
  { id: 'cv', label: 'CV', icon: FileText },
];

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="rounded-lg p-1.5 text-slate-500 transition-colors hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
    target="_blank"
    rel="noreferrer"
  >
    {createElement(icon, { size: 19, strokeWidth: 1.75 })}
  </a>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainRef = useRef(null);
  const pendingAnchor = useRef(null);

  const goTo = (id, anchorId = null) => {
    pendingAnchor.current = anchorId;
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  // After a section switch, either scroll to a requested anchor or back to the top.
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const anchor = pendingAnchor.current;
    pendingAnchor.current = null;
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) { el.scrollIntoView({ block: 'start' }); return; }
    }
    main.scrollTo(0, 0);
  }, [activeSection]);

  const openPublication = (pubId) => goTo('publications', `pub-${pubId}`);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 md:flex-row">

      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 transform overflow-y-auto border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out print:hidden
        md:static md:h-screen md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col p-8">
          <div className="mb-8">
            <div className="obj mx-auto mb-6 h-36 w-36 rounded-full">
              <img src={profile.avatar} alt={profile.name} />
            </div>

            <h1 className="text-center text-2xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
            <p className="mt-0.5 text-center text-sm text-slate-500">{profile.pronouns}</p>

            <div className="mt-4 space-y-1 text-center">
              <p className="text-sm font-semibold text-slate-700">{profile.role}</p>
              <a href={profile.labUrl} target="_blank" rel="noreferrer" className="block text-xs leading-snug text-slate-500 transition-colors hover:text-accent-600">
                {profile.lab}
              </a>
              <a href={profile.institutionUrl} target="_blank" rel="noreferrer" className="block text-xs leading-snug text-slate-500 transition-colors hover:text-accent-600">
                {profile.institution}
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-1 border-t border-slate-100 pt-5">
              <SocialIcon href={`mailto:${profile.email}`} icon={Mail} label="Email" />
              <SocialIcon href={profile.social.scholar} icon={GraduationCap} label="Google Scholar" />
              <SocialIcon href={profile.social.linkedin} icon={Linkedin} label="LinkedIn" />
            </div>

            <div className="mt-3 flex items-center justify-center gap-1 text-xs text-slate-500">
              <MapPin size={12} aria-hidden="true" /> {profile.location}
            </div>
          </div>

          <nav className="flex-1 space-y-0.5" aria-label="Main">
            {NAV.map(({ id, label, icon }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => goTo(id)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex w-full items-center gap-3 rounded-md px-4 py-2 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600
                    ${active ? 'font-semibold text-slate-900' : 'font-medium text-slate-500 hover:text-slate-900'}`}
                >
                  {active && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-pop" />}
                  {createElement(icon, { size: 16, strokeWidth: 1.75, className: active ? 'text-slate-900' : 'opacity-80' })}
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {profile.name}
          </div>
        </div>
      </aside>

      {/* --- MOBILE HEADER --- */}
      <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white p-4 md:hidden print:hidden">
        <span className="text-lg font-bold">{profile.name}</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-slate-600 focus-visible:outline-2 focus-visible:outline-accent-600"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/20 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* --- MAIN CONTENT --- */}
      <main ref={mainRef} className="relative mx-auto h-screen max-w-4xl flex-1 overflow-y-auto p-6 pt-20 md:p-16 md:pt-14">
        {activeSection === 'home' && <About onOpenPublication={openPublication} />}
        {activeSection === 'publications' && <Publications />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'misc' && <Misc />}
        {activeSection === 'cv' && <Cv />}
      </main>
    </div>
  );
}
