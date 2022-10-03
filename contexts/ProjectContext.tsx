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
  setEmailAsKey: (email: string) => void;
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
      console.log(
        "Inside useEffects IF-statement, meaning it is not first render"
      ); // TODO: Remove console.log before launch

      if (projects.length > 0) {
        console.log(
          "Inside if statement, meaning projects.length > 0, adding to store content for email " +
            email
        ); // TODO: Remove console.log before launch

        let jsonString = JSON.stringify(projects);
        SecureStore.setItemAsync(email, jsonString);
      } else {
        console.log(
          "Inside else statement, meaning projects.length <= 0, deleting store content for email " +
            email
        ); // TODO: Remove console.log before launch
        SecureStore.deleteItemAsync(email);
      }
    }
  }, [projects]);

  useEffect(() => {
    if (!isFirstRender && email != "") {
      console.log(
        "Inside useEffects IF-statement, meaning it is not first render, and email is != empty string"
      ); // TODO: Remove console.log before launch

      settingProjectsAfterEmailUpdate();
    } else {
      console.log(
        "Inside useEffects ELSE-statement, meaning it is first render"
      ); // TODO: Remove console.log before launch

      setIsFirstRender(false);
    }
  }, [email]);

  async function settingProjectsAfterEmailUpdate() {
    console.log("Inside settingProjectsAfterEmailUpdate"); // TODO: Remove console.log before launch
    let result = await SecureStore.getItemAsync(email);

    if (result != null) {
      console.log("Inside if statement where result != null"); // TODO: Remove console.log before launch
      let parsed: Project[] = JSON.parse(result);
      console.log("result has been parsed " + parsed);
      setProjects(parsed);
    } else {
      console.log("Inside else statement where result = null"); // TODO: Remove console.log before launch
      setProjects([]);
    }
  }

  function setEmailAsKey(email: string) {}

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
      value={{
        projects,
        addToProjects,
        removeFromProjects,
        editProject,
        setEmailAsKey,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => useContext(ProjectContext);
