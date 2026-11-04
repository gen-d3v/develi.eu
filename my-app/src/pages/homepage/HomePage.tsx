import { useState } from "react";
import Card from "../../components/card/Card";
import ProjectModal from "../../components/modal/ProjectModal";
import styles from "./Homepage.module.css";
import NDALogo from "../../assets/NDA.png";
import git from "../../assets/git.png";
import { AnimatePresence } from "motion/react";

const projects = [
  {
    id: "update-monitor",
    title: "Update Monitor",
    summary: "this is a summary",
    description: "Een applicatie die beschikbare software-updates detecteert.",
    logo: NDALogo,
  },
  {
    id: "HomeLab",
    title: "HomeLab",
    summary: "this is a summary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat nunc eget pretium suscipit. Vestibulum at tincidunt diam. Duis in lectus massa. Quisque luctus est sit amet justo fringilla rhoncus quis vitae orci. Ut accumsan feugiat lorem, at gravida felis consequat sagittis. Aliquam eu laoreet lorem. Sed sed massa eros. Curabitur interdum, massa in aliquam mattis, nisl diam condimentum mi, id vulputate felis magna ac lacus. Cras id fringilla nulla. Duis eget velit sit amet metus mollis vehicula sit amet et odio. Aenean vehicula mi magna, at maximus leo pellentesque ac. Etiam ornare, nunc vel vehicula pulvinar, enim est fermentum enim, id cursus enim nulla euismod dui. Vestibulum aliquet eleifend quam, a ultricies quam rutrum a. Maecenas neque turpis, eleifend et scelerisque id, laoreet eu nunc. Nulla et facilisis arcu. Quisque sed sapien finibus turpis luctus commodo a vel sapien. Proin in magna ac urna pulvinar porta. Proin vitae mi leo. Praesent sollicitudin, magna vitae sollicitudin suscipit, risus ante sodales ante, sodales interdum sapien ex id ex. Phasellus luctus hendrerit euismod. Maecenas commodo lorem ac iaculis venenatis. Nulla ultrices ultricies elementum. Maecenas in sem nibh. Nulla sed imperdiet enim. Quisque convallis luctus elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem metus, interdum luctus orci eget, molestie posuere nulla. Vivamus quam diam, eleifend nec tincidunt a, laoreet ac magna. Donec laoreet sit amet quam sit amet consectetur.Nulla a sapien dolor. Suspendisse potenti. Nulla quis posuere enim. Fusce eu vestibulum leo. Vestibulum tempus sodales est, eget rhoncus purus iaculis dapibus. Aliquam turpis justo, eleifend eget mattis a, finibus ac purus. Aliquam vulputate neque quis sollicitudin cursus. Ut scelerisque urna vitae ultricies lacinia. Donec consectetur, nulla et viverra interdum, magna est efficitur nulla, ut sodales justo nibh nec justo. Vestibulum imperdiet dolor quis purus pellentesque faucibus. Etiam ac risus lacus. Etiam vehicula, dui nec mattis lacinia, nibh mauris faucibus mi, sed cursus metus felis vitae ipsum. Fusce justo ante, dignissim vitae consequat in, interdum ut tortor. Pellentesque convallis metus turpis, eget tincidunt libero gravida ac. Sed consectetur, risus vitae dignissim sagittis, dui orci malesuada orci, at efficitur felis felis vitae purus. Proin a velit dapibus, ultricies enim in, euismod augue. Phasellus vestibulum neque nisl, id tincidunt sem porttitor sit amet. Nunc et nisi eget nisl fringilla ultrices sit amet vel orci. Mauris sed urna nibh. Cras consectetur luctus odio sit amet placerat. Etiam eu ligula urna. Aenean consectetur odio ex, nec posuere ipsum molestie sit amet. Fusce nec maximus sem. Donec maximus scelerisque enim, eget sollicitudin erat pulvinar id. Etiam in nibh sit amet leo egestas fermentum quis eleifend ligula. Integer ut posuere augue. Aliquam efficitur ipsum lectus, vel aliquam ex convallis vitae. In auctor laoreet erat vitae vehicula. Nam sit amet ornare massa. Ut fringilla mollis semper.",
    logo: git,
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
