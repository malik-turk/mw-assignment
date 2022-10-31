import { Repo } from "./octokit";

export interface SearchComponentProps {
    setSelectedRepos: (repos: Repo[]) => void;
    selectedRepos: Repo[]
}
