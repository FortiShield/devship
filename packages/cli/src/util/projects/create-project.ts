import Client from '../client';
import type { Project, ProjectSettings } from '@khulnasoft-internals/types';

export default async function createProject(
  client: Client,
  settings: ProjectSettings & { name: string }
) {
  const project = await client.fetch<Project>('/v1/projects', {
    method: 'POST',
    body: { ...settings },
  });
  return project;
}
