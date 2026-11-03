import Card from "../components/card/Card";
import { useState } from "react";
const projects = [
  {
    id: "update-monitor",
    title: "Update Monitor",
    description: "Een applicatie die beschikbare software-updates detecteert.",
  },
  {
    id1: "HomeLab",
    title: "HomeLab",
    description: "",
  },
  {
    id: "update-monitor",
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

      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          onClick={() => setSelectedProject(project)}
        />
      ))}

      {selectedProject && <p>Geselecteerd: {selectedProject.title}</p>}
    </>
  );
}
