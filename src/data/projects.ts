export interface Project {
  name: string;
  description: string | null;
  stargazers_count?: number;
  forks_count?: number;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at?: string;
  pushed_at?: string;
  created_at?: string;
}

export const projectDetails: Record<string, { description: string; stack: string[]; category: string }> = {
  gitSdm: { description: "Explore a codebase without getting lost in it. A visual tool for mapping repository structure, dependencies, and the connections between files.", stack: ["TypeScript", "Next.js", "AI"], category: "Web apps" },
  "pia-scrap": { description: "From web content to your reading list. A Python scraper that collects content and brings it into a cleaner EPUB workflow.", stack: ["Python", "Beautiful Soup", "EPUB"], category: "Tools" },
  keking: { description: "A little more life in the server. A Discord music bot with playback commands and community utilities.", stack: ["Node.js", "Discord.js"], category: "Automation" },
  "novelpia-reader": { description: "A desktop reader and command-line downloader for Novelpia novels, with offline reading, background downloads, and EPUB export.", stack: ["Rust", "Tauri", "React"], category: "Desktop apps" },
  "sketchbook_": { description: "A single-page art timelapse portfolio — a compact gallery for sketches and finished pieces, live at sketchbook.bayue.my.id.", stack: ["React", "Vite", "Tailwind CSS"], category: "Web apps" },
  "pixeldrain-bypasser": { description: "A batch downloader for Pixeldrain albums and lists, with resumable downloads, completed-file skipping, and download status tracking.", stack: ["PowerShell", "aria2c"], category: "Tools" },
  porto: { description: "The portfolio you’re exploring: a responsive site with an interactive terminal, filterable projects, and GitHub activity, built with Next.js and Tailwind CSS.", stack: ["TypeScript", "Next.js", "Tailwind CSS"], category: "Web apps" },
};

export function getProjectCategory(project: Project) {
  if (projectDetails[project.name]) return projectDetails[project.name].category;
  const name = [project.name, ...project.topics].join(" ").toLowerCase();
  if (/api|server|backend/.test(name)) return "Backend";
  if (/bot|discord|automation/.test(name)) return "Automation";
  if (/scrap|tool|cli/.test(name)) return "Tools";
  if (/web|app|frontend/.test(name)) return "Web apps";
  return "Other";
}
