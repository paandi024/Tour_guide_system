import type { Destination } from '../types';

// TODO: Replace with actual API endpoint
const API_URL = 'https://api.your-travel-service.com/destinations';

export async function fetchDestinations(): Promise<Destination[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch destinations');
  }
  return response.json();
}

export async function fetchDestination(id: string): Promise<Destination> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch destination ${id}`);
  }
  return response.json();
}
