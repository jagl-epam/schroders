export interface GithubIssues {
  total_count?: number;
  incomplete_results?: boolean;
  items?: GithubIssuesItems[];
}

export type GithubIssuesItems = {
  closed_at: string;
  pull_request: {
    merged_at: string;
  };
};
