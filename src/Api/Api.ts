import {GithubIssues} from './Api.types';

export const getMergedPulls = async (
  owner: string,
  repository: string,
  perPage: number,
  page: number,
  year: number = new Date().getFullYear(),
) => {
  let pulls: GithubIssues = {};
  const response = await fetch(
    `https://api.github.com/search/issues?q=repo:${owner}/${repository}+is:pr+is:merged+merged:>${year}-01-01&sort=created&order=asc&per_page=${perPage}&page=${page}`,
  );
  console.log({response});
  if (response.status === 200) {
    pulls = await response.json();
  }

  return {
    status: response.status,
    pulls,
  };
};
