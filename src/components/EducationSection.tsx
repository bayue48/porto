import { profile } from "@/data/profile";

export default function EducationSection() {
  return <div className="education-grid"><div><p className="eyebrow">THE FOUNDATIONS</p><h3>Learning doesn’t stop<br />at the classroom.</h3></div><div>{profile.education.map(education => <article className="education-row" key={education.institution}><div><h4>{education.institution}</h4><p>{education.degree}</p></div><span className="mono">{education.year}</span></article>)}</div></div>;
}
