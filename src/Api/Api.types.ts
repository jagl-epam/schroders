export interface GithubIssues {
  incomplete_results?: boolean;
  items?: GithubIssuesItems[];
}

export type GithubIssuesItems = {
  closed_at: string;
};
