import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return <section id="contact" className="contact-section"><div><p className="eyebrow"><span className="status-dot" /> LET’S CONNECT</p><h2>Something in mind?<br /><span>Let’s build it.</span></h2><p>Open to backend engineering opportunities,<br />freelance projects, and a good conversation.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a></div><div className="contact-aside"><span className="contact-symbol" aria-hidden="true">↗</span><div className="social-links"><a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub<ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15} /></a></div></div></section>;
}
