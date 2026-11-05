import { useState } from "react";
import Card, { type ProjectStatus } from "../../components/card/Card";
import ProjectModal from "../../components/modal/ProjectModal";
import styles from "./Homepage.module.css";
import { NDA, git, kilic, auas } from "../../assets";
import { AnimatePresence } from "motion/react";

type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  logo?: string;
  status: ProjectStatus;
};

const projects: Project[] = [
  {
    id: "update-monitor",
    title: "Update Monitor",
    summary: "Detecteert beschikbare software-updates.",
    description: "De volledige beschrijving van het project...",
    logo: NDA,
    status: "in-progress",
  },
  {
    id: "home-lab",
    title: "Proxmox Home Lab",
    summary: "Three-node home cluster automated with OpenTofu and Ansible",
    description: "De volledige beschrijving van het project...",
    logo: git,
    status: "in-progress",
  },
  {
    id: "kilic",
    title: "Privacy-Focused Workforce CRM",
    summary:
      "A web application for securely managing workers and employment relationships.",
    description: "De volledige beschrijving van het project...",
    logo: kilic,
    status: "on-hold",
  },
  {
    id: "Studio CR Cloud — Private Cloud for Cyber Resilience",
    title: "Studio CR Cloud — Private Cloud for Cyber Resilience",
    summary: "Proxmox-based platform for cybersecurity education and exercises",
    description: "De volledige beschrijving van het project...",
    logo: auas,
    status: "completed",
  },
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <>
      <h1>Home page</h1>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Card
            id={project.id}
            key={project.id}
            title={project.title}
            summary={project.summary}
            logo={project.logo}
            status={project.status}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
