import { useState } from "react";
import Card, { type ProjectStatus } from "../../components/card/Card";
import ProjectModal from "../../components/modal/ProjectModal";
import styles from "./Homepage.module.css";
import NDALogo from "../../assets/NDA.png";
import git from "../../assets/git.png";
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
    logo: NDALogo,
    status: "in-progress",
  },
  {
    id: "home-lab",
    title: "HomeLab",
    summary: "Een zelfgebouwd Proxmox-cluster.",
    description: "De volledige beschrijving van het project...",
    logo: git,
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
