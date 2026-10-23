import { Newspaper, FlaskConical } from 'lucide-react';
import { profile, news, themes, publicationById } from '../data.jsx';
import { PageTitle, Section, Media, DateChip, parseLinks } from '../components/ui.jsx';

const ThemeTile = ({ theme, onOpenPublication }) => {
  const pubs = theme.publications
    .map(ref => ({ ...ref, pub: ref.id ? publicationById(ref.id) : null }))
    .filter(ref => ref.pub || ref.label);
  const stacked = pubs.length > 1;
  return (
    <div className="grid gap-x-6 gap-y-3 border-t border-slate-100 py-6 first:border-t-0 first:pt-1 md:grid-cols-[15rem_minmax(0,1fr)]">
      <div className={`mr-3 mb-3 w-full max-w-[22rem] self-start md:max-w-none ${stacked ? 'obj-stack' : ''}`} data-count={stacked ? Math.min(pubs.length, 3) : undefined}>
        <Media src={theme.image} alt="" className="aspect-[4/3]" />
      </div>
      <div className="min-w-0 max-w-[62ch] space-y-3">
        <h4 className="text-[1.03rem] font-semibold leading-snug text-slate-900">{theme.title}</h4>
        <p className="text-[0.92rem] leading-relaxed text-slate-700">{theme.comment}</p>
        <ul className="space-y-2.5 border-t border-slate-100 pt-3">
          {pubs.map(({ id, label, note, pub }, i) => (
            <li key={id || `${label}-${i}`}>
              {pub ? (
                <button
                  type="button"
                  onClick={() => onOpenPublication(id)}
                  className="block w-full rounded-sm text-left text-sm leading-relaxed text-slate-600 transition-colors hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
                >
                  <span className="mr-2 font-mono text-[11px] text-accent-600">{pub.venue}</span>
                  <span>{note || pub.short || pub.title}</span>
                </button>
              ) : (
                <p className="text-sm leading-relaxed text-slate-500">
                  <span className="mr-2 font-mono text-[11px] font-semibold text-pop-strong">{label}</span>
                  <span className="italic">{note}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
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
        <div>
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
