import { Newspaper, FlaskConical } from 'lucide-react';
import { profile, news, themes, publicationById } from '../data.jsx';
import { PageTitle, Section, Media, DateChip, parseLinks } from '../components/ui.jsx';

const ThemeTile = ({ theme, onOpenPublication }) => {
  const pubs = theme.publications.map(publicationById).filter(Boolean);
  const stacked = pubs.length > 1;
  return (
    <div className="grid content-start grid-cols-[8rem_minmax(0,1fr)] gap-x-4 gap-y-1.5 sm:grid-cols-1 sm:gap-y-2.5">
      <div className={`mr-3 mb-3 max-sm:row-span-3 max-sm:self-start ${stacked ? 'obj-stack' : ''}`} data-count={stacked ? Math.min(pubs.length, 3) : undefined}>
        <Media src={theme.image} alt="" className="aspect-[4/3]" />
      </div>
      <h4 className="text-[0.95rem] font-semibold leading-snug text-slate-900">{theme.title}</h4>
      <p className="text-[13px] leading-relaxed text-slate-600">{theme.desc}</p>
      <ul className="grid gap-2 border-t border-slate-100 pt-2.5 max-sm:col-start-2 sm:mt-0.5">
        {pubs.map(pub => (
          <li key={pub.id}>
            <button
              type="button"
              onClick={() => onOpenPublication(pub.id)}
              className="block w-full rounded-sm text-left text-[12.5px] leading-snug text-slate-600 transition-colors hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
            >
              <span className="block font-mono text-[11px] text-accent-600">{pub.venue}</span>
              <span>{pub.short || pub.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NewsItem = ({ item, latest = false }) => {
  const hasMedia = Boolean(item.image);
  return (
    <li className={`relative grid items-start gap-x-6 gap-y-3 ${hasMedia ? 'sm:grid-cols-[minmax(0,1fr)_9.5rem]' : ''}`}>
      <span aria-hidden="true" className={`absolute -left-[33px] top-[5px] h-3 w-3 rounded-full border-[2.5px] ${latest ? 'border-pop bg-pop' : 'border-accent-600 bg-white'}`} />
      <div className="min-w-0 space-y-1.5">
        <DateChip>{item.date}</DateChip>
        <p className="text-[0.92rem] leading-relaxed text-slate-700">{parseLinks(item.text)}</p>
      </div>
      {hasMedia && (
        <Media src={item.image} alt="" href={item.link} video={item.video} className="aspect-[16/10] w-full max-w-[16rem] sm:max-w-none" />
      )}
    </li>
  );
};

export default function About({ onOpenPublication }) {
  return (
    <div className="animate-fade-in space-y-12">
      <section className="space-y-6">
        <PageTitle>About Me</PageTitle>
        <div className={profile.photo ? 'grid items-start gap-x-9 gap-y-4 md:grid-cols-[minmax(0,1fr)_14rem]' : ''}>
          <div className="max-w-[68ch] space-y-4">
            <p className="relative pl-7 text-[1.4rem] font-bold leading-snug tracking-tight text-slate-900 sm:pl-9">
              <span aria-hidden="true" className="absolute -top-2 left-0 select-none font-serif text-[3.4rem] leading-none text-pop">“</span>
              {profile.question}
              <span aria-hidden="true" className="ml-1 font-serif text-[1.6em] leading-none text-pop align-[-0.3em]">”</span>
            </p>
            <div className="space-y-4 text-[1.02rem] font-light leading-relaxed text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900">
              {profile.bio}
            </div>
          </div>
          {profile.photo && (
            <Media src={profile.photo} alt={profile.name} className="aspect-[4/5] max-w-[11rem] rounded-2xl md:max-w-none" />
          )}
        </div>
      </section>

      <Section icon={FlaskConical} id="themes-heading" title="Research Themes">
        <div className="grid gap-6 sm:grid-cols-3">
          {themes.map((t, i) => <ThemeTile key={i} theme={t} onOpenPublication={onOpenPublication} />)}
        </div>
      </Section>

      <Section icon={Newspaper} id="news-heading" title="News">
        <ul className="ml-2 space-y-7 border-l-2 border-slate-200 pl-[26px]">
          {news.map((item, i) => <NewsItem key={i} item={item} latest={i === 0} />)}
        </ul>
      </Section>
    </div>
  );
}
