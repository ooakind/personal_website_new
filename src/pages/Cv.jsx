import { useState, useRef } from 'react';
import { Mail, Globe, MapPin, Download, Loader2 } from 'lucide-react';
import { profile, education, experience, publications, patents, awards, invitedTalks, service, cvLastUpdated } from '../data.jsx';
import { PageTitle, parseLinks, HighlightAuthor, EqualContributionNote } from '../components/ui.jsx';

// NOTE: src/cvPdf.js reads the DOM inside #cv-container (header first, then one block
// per section with h3/h4 headings). Keep that structure when editing this file.

const CvSectionTitle = ({ children }) => (
  <h3 className="mb-4 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-slate-900">{children}</h3>
);

const Bullet = () => <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-slate-300" />;

export default function Cv() {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState('');
  const inProgress = useRef(false);

  const downloadCv = async () => {
    if (inProgress.current) return;
    inProgress.current = true;
    setIsExporting(true);
    setError('');
    try {
      const container = document.getElementById('cv-container');
      if (!container) throw new Error('CV content is unavailable.');
      const { createCvPdf } = await import('../cvPdf');
      const pdf = await createCvPdf(container);
      await pdf.save('Hyojin_Ju_CV.pdf', { returnPromise: true });
    } catch (err) {
      console.error('CV PDF export failed:', err);
      setError('Could not create the PDF. Please try again.');
    } finally {
      inProgress.current = false;
      setIsExporting(false);
    }
  };

  const papers = publications.flatMap(g => g.items).filter(p => p.type === 'paper');
  const adjunct = publications.flatMap(g => g.items).filter(p => p.type === 'adjunct');

  const PubEntry = ({ pub }) => (
    <div className="relative pl-4 text-sm text-slate-700">
      <Bullet />
      <span className="font-semibold text-slate-900">{pub.title}</span>. <HighlightAuthor authors={pub.authors} />. <span className="italic">{pub.venue}</span>.
      <EqualContributionNote authors={pub.authors} />
    </div>
  );

  return (
    <div className="animate-fade-in space-y-8">
      <div className="print:hidden">
        <PageTitle
          aside={
            <button
              onClick={downloadCv}
              disabled={isExporting}
              aria-busy={isExporting}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-700 disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
            >
              {isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              <span>{isExporting ? 'Creating PDF…' : 'Download PDF'}</span>
            </button>
          }
        >
          Curriculum Vitae
        </PageTitle>
        <p className="mt-2 text-sm text-slate-500">Last updated: {cvLastUpdated}</p>
      </div>

      {error && <p role="alert" className="text-sm text-red-600 print:hidden">{error}</p>}

      <div id="cv-container" className="rounded-xl border border-slate-200 bg-white p-8 md:p-12 print:border-none print:p-0">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-2xl font-bold uppercase tracking-widest text-slate-900">{profile.name}</h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Mail size={12} /> {profile.email}</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><Globe size={12} /> {profile.website}</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {profile.location}</span>
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Education</CvSectionTitle>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="grid gap-1 sm:grid-cols-[1fr_120px]">
                <div>
                  <div className="font-bold text-slate-900">{edu.school}</div>
                  <div className="text-sm text-slate-700">{edu.degree}</div>
                </div>
                <div className="text-right font-mono text-sm text-slate-500">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Research Experience</CvSectionTitle>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i} className="grid gap-1 sm:grid-cols-[1fr_120px]">
                <div>
                  <div className="font-bold text-slate-900">{parseLinks(job.role, true)}</div>
                  <div className="mb-1 text-sm italic text-slate-700">{job.org}, {job.location}</div>
                </div>
                <div className="text-right font-mono text-sm text-slate-500">{job.dates}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Publications</CvSectionTitle>
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-bold text-slate-800">Full Papers</h4>
            <div className="space-y-4">{papers.map(pub => <PubEntry key={pub.id} pub={pub} />)}</div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-slate-800">Posters & Demos</h4>
            <div className="space-y-4">{adjunct.map(pub => <PubEntry key={pub.id} pub={pub} />)}</div>
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Patents</CvSectionTitle>
          <div className="space-y-4">
            {patents.map((p, i) => (
              <div key={i} className="relative pl-4 text-sm text-slate-700">
                <Bullet />
                <span className="font-semibold text-slate-900">"{p.title}"</span>
                <ul className="mt-1 space-y-0.5">
                  {p.items.map((item, j) => (
                    <li key={j} className="ml-1 border-l-2 border-slate-200 pl-2 text-xs text-slate-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {patents.length === 0 && <p className="text-sm italic text-slate-500">No patents information available.</p>}
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Honors & Awards</CvSectionTitle>
          <div className="space-y-2">
            {awards.map((award, i) => (
              <div key={i} className="flex justify-between gap-4 text-sm">
                <span className="text-slate-700"><span className="font-semibold text-slate-900">{award.title}</span>, {award.org}</span>
                <span className="font-mono text-slate-500">{award.year.split('-')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <CvSectionTitle>Invited Talks</CvSectionTitle>
          <div className="space-y-2">
            {invitedTalks.map((talk, i) => (
              <div key={i} className="flex justify-between gap-4 text-sm">
                <span className="text-slate-700">"<span className="font-semibold text-slate-900">{talk.title}</span>", {talk.event}</span>
                <span className="font-mono text-slate-500">{talk.year}</span>
              </div>
            ))}
            {invitedTalks.length === 0 && <p className="italic text-slate-500">Information pending...</p>}
          </div>
        </div>

        <div>
          <CvSectionTitle>Professional Service</CvSectionTitle>
          <ul className="space-y-1 text-sm text-slate-700">
            {service.map((s, i) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
