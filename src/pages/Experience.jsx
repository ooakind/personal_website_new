import { FlaskConical, Award, Globe, Mic, Briefcase } from 'lucide-react';
import { experience, awards, conferenceAttendance, invitedTalks, internships } from '../data.jsx';
import { PageTitle, Section, ExperienceRow } from '../components/ui.jsx';

export default function Experience() {
  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle>Experience</PageTitle>

      <Section icon={FlaskConical} id="research-heading" title="Research Experience">
        <div>
          {experience.map((job, i) => (
            <ExperienceRow key={i} date={job.dates} location={job.location} title={job.org} subtitle={job.role} desc={job.desc} image={job.image} />
          ))}
        </div>
      </Section>

      <Section icon={Award} id="awards-heading" title="Honors & Awards">
        <div>
          {awards.map((a, i) => (
            <ExperienceRow key={i} date={a.year} title={a.title} subtitle={a.org} />
          ))}
        </div>
      </Section>

      <Section icon={Globe} id="conference-heading" title="Conference Attendance">
        <div>
          {conferenceAttendance.map((item, i) => (
            <ExperienceRow key={i} date={item.year} location={item.location} title={item.event} subtitle={item.role} image={item.image} />
          ))}
        </div>
      </Section>

      <Section icon={Mic} id="talks-heading" title="Invited Talks">
        <div>
          {invitedTalks.map((talk, i) => (
            <ExperienceRow key={i} date={talk.year} location={talk.location} title={talk.event} subtitle={`“${talk.title}”`} image={talk.image} />
          ))}
        </div>
      </Section>

      <Section icon={Briefcase} id="internships-heading" title="Internships">
        <div>
          {internships.map((job, i) => (
            <ExperienceRow key={i} date={job.dates} location={job.location} title={job.org} subtitle={job.role} desc={job.desc} image={job.image} />
          ))}
        </div>
      </Section>
    </div>
  );
}
