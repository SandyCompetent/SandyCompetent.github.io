import { Project } from '../types';

const GITHUB_USERNAME = 'SandyCompetent';

// Repos to hide from the portfolio — common weak/boilerplate names
const BLOCKED_REPOS = [
  'test',
  'hello-world',
  'learning-repo',
  'temp',
  'notes',
  'practice',
  'demo',
  'tutorial',
  'first-repo',
  'readme',
  '.github',
  'config',
  'dotfiles',
];

export const fetchGitHubRepos = async (): Promise<Project[]> => {
  try {
    // Fetch 30 repos to have a large pool after filtering
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=30&type=owner`
    );

    if (!response.ok) {
      console.warn('GitHub API limit reached or error');
      return [];
    }

    const data = await response.json();

    const projects: Project[] = data
      .filter((repo: any) => {
        const isFork = repo.fork;
        const nameLower = repo.name.toLowerCase();
        const isBlocked = BLOCKED_REPOS.some((blocked) => nameLower.includes(blocked));
        // Filter out the profile repo (name matches username)
        const isProfileRepo = nameLower === GITHUB_USERNAME.toLowerCase();
        // Filter out repos with 0 stars AND no description (likely empty/unused)
        const isEmptyRepo = repo.stargazers_count === 0 && !repo.description;

        return !isFork && !isBlocked && !isProfileRepo && !isEmptyRepo;
      })
      // Sort by stars descending (most popular first)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .map((repo: any) => {
        // Use repo topics for tech stack, fallback to language
        const stack =
          repo.topics && repo.topics.length > 0
            ? repo.topics
            : repo.language
              ? [repo.language]
              : ['GitHub'];

        return {
          id: `gh-${repo.id}`,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          description: 'Open Source Contribution',
          valueProposition: repo.description || 'A useful utility or application component.',
          achievement: `${repo.stargazers_count} Stars • ${repo.forks_count} Forks`,
          techStack: stack,
          imageUrl: `https://opengraph.githubassets.com/1/${repo.full_name}`,
          repoUrl: repo.html_url,
          demoUrl: repo.homepage,
          details: `
            Fetched dynamically from GitHub.
            Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}
            
            ${repo.description || ''}
            
            Check out the code directly on GitHub to see the latest commits and implementation details.
          `,
        };
      });

    return projects;
  } catch (e) {
    console.error('Failed to fetch GitHub repos', e);
    return [];
  }
};