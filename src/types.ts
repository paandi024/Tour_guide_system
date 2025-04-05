export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
}