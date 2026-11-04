import { useState } from "react";
import Card from "../../components/card/Card";
import ProjectModal from "../../components/modal/ProjectModal";
import styles from "./Homepage.module.css";

import { AnimatePresence } from "motion/react";

const projects = [
  {
    id: "update-monitor",
    title: "Update Monitor",
    description: "Een applicatie die beschikbare software-updates detecteert.",
  },
  {
    id: "HomeLab",
    title: "HomeLab",
    description: "",
  },
  {
    id: "1",
    title: "Update Monitor",
    description: "Een applicatie die beschikbare software-updates detecteert.",
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
            description={project.description}
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
