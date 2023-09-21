import {GithubIssues} from './Api.types';

export const getMergedPulls = async () => {
  let pulls: GithubIssues = {};
  const response = await fetch(
    'https://api.github.com/search/issues?q=repo:applesss/swift+is:pr+is:merged',
  );
  if (response.status === 200) {
    pulls = await response.json();
  }

  return {
    status: response.status,
    pulls,
  };
};
