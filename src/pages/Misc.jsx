import { FileText, BookOpen, Users, Newspaper, ExternalLink } from 'lucide-react';
import { patents, teaching, service, mediaCoverage } from '../data.jsx';
import { PageTitle, Section, TextLink, DateLabel, EmptyNote } from '../components/ui.jsx';

export default function Misc() {
  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle>Miscellaneous</PageTitle>

      <Section icon={FileText} id="patents-heading" title="Patents">
        <ul className="divide-y divide-slate-100">
          {patents.map((p, i) => (
            <li key={i} className="py-4 first:pt-1 last:pb-0">
              <h4 className="text-[0.98rem] font-semibold leading-snug text-slate-900">{p.title}</h4>
              <ul className="mt-2 space-y-1.5 border-l-2 border-slate-200 pl-3">
                {p.items.map((item, j) => (
                  <li key={j} className="text-sm leading-relaxed text-slate-600">{item}</li>
                ))}
              </ul>
            </li>
          ))}
          {patents.length === 0 && <li><EmptyNote>No patents listed yet.</EmptyNote></li>}
        </ul>
      </Section>

      <Section icon={BookOpen} id="teaching-heading" title="Teaching">
        <ul className="divide-y divide-slate-100">
          {teaching.map((t, i) => (
            <li key={i} className="grid gap-x-5 gap-y-1 py-4 first:pt-1 last:pb-0 sm:grid-cols-[5.5rem_minmax(0,1fr)]">
              <DateLabel className="pt-1 font-medium">{t.term}</DateLabel>
              <div className="min-w-0">
                <h4 className="text-[0.98rem] font-semibold leading-snug text-slate-900">{t.course}</h4>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">{t.role}</span>
                  {t.instructor && (
                    <>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="inline-flex flex-wrap items-baseline gap-x-1.5">
                        <span className="text-slate-500">Instructor:</span>
                        {t.instructorUrl ? (
                          <TextLink href={t.instructorUrl} aria-label={`${t.instructor} — personal website (opens in a new tab)`} className="inline-flex items-center gap-1">
                            {t.instructor}
                            <ExternalLink size={11} aria-hidden="true" className="shrink-0" />
                          </TextLink>
                        ) : <span>{t.instructor}</span>}
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-slate-500">{t.uni}</div>
              </div>
            </li>
          ))}
          {teaching.length === 0 && <li><EmptyNote>No teaching experience listed yet.</EmptyNote></li>}
        </ul>
      </Section>

      <Section icon={Users} id="service-heading" title="Professional Service">
        <ul className="divide-y divide-slate-100">
          {service.map((s, i) => (
            <li key={i} className="flex items-start gap-3 py-3 first:pt-1 last:pb-0 text-sm leading-relaxed text-slate-700">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600/70" />
              <span>{s}</span>
            </li>
          ))}
          {service.length === 0 && <li><EmptyNote>No service listed yet.</EmptyNote></li>}
        </ul>
      </Section>

      <Section icon={Newspaper} id="media-heading" title="Media Coverage">
        <ul className="divide-y divide-slate-100">
          {mediaCoverage.map((item, i) => (
            <li key={i} className="py-4 first:pt-1 last:pb-0">
              <h4 className="text-[0.98rem] font-semibold leading-snug text-slate-900">
                <TextLink href={item.link} className="text-slate-900 decoration-slate-300">
                  {item.title}<ExternalLink size={12} aria-hidden="true" className="ml-1 inline-block align-baseline" />
                </TextLink>
              </h4>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-medium text-slate-700">{item.source}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
                <DateLabel>{item.date}</DateLabel>
              </div>
            </li>
          ))}
          {mediaCoverage.length === 0 && <li><EmptyNote>No information posted yet.</EmptyNote></li>}
        </ul>
      </Section>
    </div>
  );
}
