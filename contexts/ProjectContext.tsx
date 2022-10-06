import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Project } from "../components/Models";

interface ContextValue {
  projects: Project[];
  addToProjects: (project: Project) => void;
  removeFromProjects: (project: Project) => void;
  editProject: (project: Project) => void;
  email: string;
  setEmailAsKey: (email: string) => void;
  numberOfProjects: () => number;
}

const ProjectContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: ReactNode;
}

export default function ProjectProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [email, setEmail] = useState<string>("");
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (!isFirstRender) {
      if (projects.length > 0) {
        let jsonString = JSON.stringify(projects);
        SecureStore.setItemAsync(email, jsonString);
      } else SecureStore.deleteItemAsync(email);
    }
  }, [projects]);

  useEffect(() => {
    async function settingProjectsAfterEmailUpdate() {
      let result = await SecureStore.getItemAsync(email);

      if (result != null) {
        let parsed: Project[] = JSON.parse(result);
        setProjects(parsed);
      } else setProjects([]);
    }
    if (!isFirstRender && email != "") {
      settingProjectsAfterEmailUpdate();
    } else setIsFirstRender(false);
  }, [email]);

  function setEmailAsKey(email: string) {
    setEmail(email.replace("@", "_"));
  }

  function addToProjects(project: Project) {
    setProjects((prev) => [...prev, project]);
  }

  function removeFromProjects(project: Project) {
    setProjects((prev) => prev.filter((p) => p.id !== project.id));
  }

  function editProject(project: Project) {
    if (project !== undefined) {
      setProjects((prev) =>
        prev.map((p) => (p.id !== project.id ? p : project))
      );
    }
  }

  function numberOfProjects() {
    return projects.length;
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addToProjects,
        removeFromProjects,
        editProject,
        email,
        setEmailAsKey,
        numberOfProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => useContext(ProjectContext);
