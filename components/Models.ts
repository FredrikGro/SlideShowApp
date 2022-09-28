export interface Project {
  id: string; // Value when stored, generated by nanoid
  userEmail: string; // Key when stored
  name: string;
  imagesURI: string[];
}

export type ProjectCreate = Omit<Project, "id">;
