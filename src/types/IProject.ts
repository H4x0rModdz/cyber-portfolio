export interface IProject {
    name: string;
    videoPath: string;
    description: string;
    image: string;
    stacks: string[];
    createdAt: string;
    repositoryPath?: string;
    tag?: string;
  }