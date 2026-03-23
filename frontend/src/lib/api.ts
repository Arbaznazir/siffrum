import axios from 'axios';
import type { Project, ContactMessage, LoginResponse } from '../types';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('siffrum_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Public
export const getProjects = () => api.get<Project[]>('/projects');
export const getFeaturedProjects = () => api.get<Project[]>('/projects?featured=true');
export const getProject = (id: number) => api.get<Project>(`/projects/${id}`);

export const submitContact = (data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}) => api.post('/contact', data);

// Auth
export const login = (email: string, password: string) =>
  api.post<LoginResponse>('/auth/login', { email, password });

// Admin
export const getMessages = () => api.get<ContactMessage[]>('/admin/messages');
export const markMessageRead = (id: number) => api.patch(`/admin/messages/${id}/read`);
export const deleteMessage = (id: number) => api.delete(`/admin/messages/${id}`);

export const createProject = (data: FormData) =>
  api.post<Project>('/admin/projects', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateProject = (id: number, data: FormData) =>
  api.put<Project>(`/admin/projects/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteProject = (id: number) => api.delete(`/admin/projects/${id}`);

export default api;
