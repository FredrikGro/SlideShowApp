import { createContext, ReactNode, useState } from "react";
import { Project } from "../components/Models";
import { tempProjectsStorage } from "../data";

interface ContextValue {
  projects: Project[];
  addToProjects: (project: Project) => void;
  removeFromProjects: (project: Project) => void;
  editProject: (project: Project) => void;
}

const ProjectContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: ReactNode;
}

export default function ProjectProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>(tempProjectsStorage); // TODO: Add Storage for loading/saving

  // TODO: useEffect for saving projects to Storage

  function addToProjects(project: Project) {
    setProjects((prev) => [...prev, project]);
  }

  function removeFromProjects(project: Project) {
    setProjects((prev) => prev.filter((p) => p.id !== project.id));
  }

  function editProject(project: Project) {
    setProjects((prev) => prev.map((p) => (p.id !== project.id ? p : project)));
  }

  return (
    <ProjectContext.Provider
      value={{ projects, addToProjects, removeFromProjects, editProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}