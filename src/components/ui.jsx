/* eslint-disable react-refresh/only-export-components -- shared helpers live beside the primitives on purpose */
import React from 'react';
import { Award, Play } from 'lucide-react';

// ------------------------------------------------------------------
// Shared building blocks. Rules:
//  - text is flat: no cards, fills or shadows around text
//  - every image is an "object" (.obj): the only elevated thing on the page
//  - the accent color is used as text/line color only
// ------------------------------------------------------------------

export const PageTitle = ({ children, aside }) => (
  <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
    <h2 className="text-3xl font-bold tracking-tight text-slate-900">{children}</h2>
    {aside}
  </div>
);

export const SectionHeading = ({ icon: Icon, id, children }) => (
  <h3 id={id} className="flex items-center gap-3 border-b border-slate-100 pb-3 text-lg font-semibold text-slate-900">
    {Icon && (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-accent-600 ring-1 ring-inset ring-slate-200">
        <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
      </span>
    )}
    {children}
  </h3>
);

export const Section = ({ icon, id, title, children, className = '' }) => (
  <section aria-labelledby={id} className={`space-y-5 ${className}`}>
    <SectionHeading icon={icon} id={id}>{title}</SectionHeading>
    {children}
  </section>
);

// An image lifted off the paper. Becomes a link when `href` is given.
export const Media = ({ src, alt = '', href, video = false, className = '', children, ...rest }) => {
  const content = (
    <>
      <img src={src} alt={alt} loading="lazy" />
      {video && (
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-pop shadow-md">
            <Play size={16} fill="currentColor" strokeWidth={0} className="translate-x-px" />
          </span>
        </span>
      )}
      {children}
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`obj focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600 ${className}`} {...rest}>
        {content}
      </a>
    );
  }
  return <div className={`obj ${className}`} {...rest}>{content}</div>;
};

export const DateLabel = ({ children, className = '' }) => (
  <span className={`font-mono text-xs tabular-nums text-slate-500 ${className}`}>{children}</span>
);

export const DateChip = ({ children }) => (
  <span className="font-mono text-xs font-semibold tracking-wide text-accent-600">{children}</span>
);

export const AwardChip = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-pop-strong ring-1 ring-inset ring-pop-strong/40">
    <Award size={12} aria-hidden="true" /> {children}
  </span>
);

const linkClass =
  'text-accent-600 underline decoration-accent-200 underline-offset-[3px] transition-colors hover:text-accent-700 hover:decoration-accent-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600 rounded-sm';

export const TextLink = ({ href, children, className = '', ...rest }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`${linkClass} ${className}`} {...rest}>
    {children}
  </a>
);

// Parses [text](url) markup inside a string.
export const parseLinks = (text, noUrl = false) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
    parts.push(noUrl
      ? <span key={lastIndex}>{match[1]}</span>
      : <TextLink key={lastIndex} href={match[2]}>{match[1]}</TextLink>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts.length > 0 ? parts : text;
};

export const EqualContributionNote = ({ authors }) => (
  /\{[^{}]+\}/.test(authors) ? <div className="text-xs text-slate-500">{'{}: equal contributions'}</div> : null
);

export const HighlightAuthor = ({ authors }) => {
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

// One row of the Experience page. Items with a photo use a third column; items without let the text span.
export const ExperienceRow = ({ date, location, title, subtitle, desc, image }) => (
  <div className={`grid gap-x-6 gap-y-2 border-t border-slate-100 py-5 first:border-t-0 first:pt-1 ${image ? 'md:grid-cols-[9.5rem_minmax(0,1fr)_15rem]' : 'md:grid-cols-[9.5rem_minmax(0,1fr)]'}`}>
    <div className="grid content-start gap-0.5">
      <span className="font-mono text-[13px] font-semibold tabular-nums text-slate-900">{date}</span>
      {location && <span className="text-xs leading-snug text-slate-500">{location}</span>}
    </div>
    {image && (
      <Media src={image} alt={title} className="aspect-[3/2] w-full max-w-[22rem] md:order-last md:max-w-none" />
    )}
    <div className="min-w-0 max-w-[62ch] space-y-1">
      <h4 className="text-[1.03rem] font-semibold leading-snug text-slate-900">{title}</h4>
      {subtitle && <div className="text-[0.92rem] font-medium text-slate-700">{parseLinks(subtitle)}</div>}
      {desc && <p className="pt-1 text-sm leading-relaxed text-slate-600">{parseLinks(desc)}</p>}
    </div>
  </div>
);

export const EmptyNote = ({ children }) => (
  <p className="py-4 text-sm italic text-slate-500">{children}</p>
);
