export interface Project {
  id: number;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  tags: string[];
  category: string;
  client: string;
  live_url: string;
  featured: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface LoginResponse {
  token: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
}
