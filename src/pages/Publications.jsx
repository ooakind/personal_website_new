import { FileText, Github, Video, ExternalLink } from 'lucide-react';
import { publications } from '../data.jsx';
import { PageTitle, Media, AwardChip, HighlightAuthor, EqualContributionNote } from '../components/ui.jsx';

const linkIcons = { paper: FileText, code: Github, video: Video, link: ExternalLink };

export default function Publications() {
  return (
    <div className="animate-fade-in space-y-10">
      <PageTitle>Publications</PageTitle>

      {publications.map((group) => (
        <section key={group.year} className="space-y-6">
          <h3 className="border-b border-slate-100 pb-2 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{group.year}</h3>
          <div className="space-y-8">
            {group.items.map((pub) => (
              <article key={pub.id} id={`pub-${pub.id}`} className="grid scroll-mt-24 gap-5 sm:grid-cols-[12.5rem_minmax(0,1fr)] sm:gap-6">
                {pub.image ? (
                  <Media src={pub.image} alt="" className="aspect-video w-full max-w-[20rem] sm:max-w-none" />
                ) : <div className="hidden sm:block" />}
                <div className="min-w-0 space-y-1.5">
                  <h4 className="text-[1.08rem] font-semibold leading-snug text-slate-900">{pub.title}</h4>
                  <div className="text-[0.92rem] text-slate-600"><HighlightAuthor authors={pub.authors} /></div>
                  <EqualContributionNote authors={pub.authors} />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                    <span className="font-medium italic text-slate-700">{pub.venue}</span>
                    {pub.award && <AwardChip>{pub.award}</AwardChip>}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-1 text-sm">
                    {Object.entries(pub.links).map(([key, url]) => {
                      const Icon = linkIcons[key] || ExternalLink;
                      return (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium capitalize text-slate-500 transition-colors hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600 rounded-sm"
                        >
                          <Icon size={14} aria-hidden="true" /> {key}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
