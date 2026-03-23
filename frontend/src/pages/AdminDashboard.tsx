import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  X,
  Save,
  Image,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { Project, ContactMessage } from '../types';
import {
  getProjects,
  getMessages,
  createProject,
  updateProject,
  deleteProject,
  markMessageRead,
  deleteMessage,
} from '../lib/api';

type Tab = 'overview' | 'projects' | 'messages';

interface ProjectForm {
  title: string;
  description: string;
  long_description: string;
  tags: string;
  category: string;
  client: string;
  live_url: string;
  featured: boolean;
  image: File | null;
}

const emptyForm: ProjectForm = {
  title: '',
  description: '',
  long_description: '',
  tags: '',
  category: 'Web App',
  client: '',
  live_url: '',
  featured: false,
  image: null,
};

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ProjectForm>(emptyForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [isAuthenticated, navigate]);

  const loadData = async () => {
    try {
      const [projRes, msgRes] = await Promise.all([getProjects(), getMessages()]);
      if (projRes.data) setProjects(projRes.data);
      if (msgRes.data) setMessages(msgRes.data);
    } catch {
      // If unauthorized, redirect to login
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const openCreateForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (project: Project) => {
    setForm({
      title: project.title,
      description: project.description,
      long_description: project.long_description,
      tags: project.tags.join(', '),
      category: project.category,
      client: project.client,
      live_url: project.live_url,
      featured: project.featured,
      image: null,
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('title', form.title);
      fd.append('description', form.description);
      fd.append('long_description', form.long_description);
      fd.append('tags', form.tags);
      fd.append('category', form.category);
      fd.append('client', form.client);
      fd.append('live_url', form.live_url);
      fd.append('featured', String(form.featured));
      if (form.image) fd.append('image', form.image);

      if (editingId) {
        await updateProject(editingId, fd);
      } else {
        await createProject(fd);
      }
      setShowForm(false);
      loadData();
    } catch {
      alert('Failed to save project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id);
      loadData();
    } catch {
      alert('Failed to delete project.');
    }
  };

  const handleMarkRead = async (id: number) => {
    try {
      await markMessageRead(id);
      loadData();
    } catch {
      // silent fail
    }
  };

  const handleDeleteMessage = async (id: number) => {
    if (!confirm('Delete this message?')) return;
    try {
      await deleteMessage(id);
      loadData();
    } catch {
      alert('Failed to delete message.');
    }
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  const tabs = [
    { id: 'overview' as Tab, label: 'Overview', icon: LayoutDashboard },
    { id: 'projects' as Tab, label: 'Projects', icon: FolderKanban },
    { id: 'messages' as Tab, label: `Messages${unreadCount > 0 ? ` (${unreadCount})` : ''}`, icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-heading">Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your projects and messages</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-xl border border-gray-100 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-siffrum-500 text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-siffrum-50 flex items-center justify-center">
                    <FolderKanban className="w-6 h-6 text-siffrum-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                    <p className="text-sm text-gray-500">Total Projects</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
                    <p className="text-sm text-gray-500">Total Messages</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
                    <p className="text-sm text-gray-500">Unread Messages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent messages */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 font-heading">Recent Messages</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {messages.slice(0, 5).map((msg) => (
                  <div key={msg.id} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{msg.name}</p>
                      <p className="text-sm text-gray-500 truncate max-w-md">{msg.message}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!msg.read && (
                        <span className="w-2 h-2 rounded-full bg-siffrum-500" />
                      )}
                      <span className="text-xs text-gray-400">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="px-6 py-8 text-center text-gray-400">No messages yet</div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-end mb-6">
              <button
                onClick={openCreateForm}
                className="flex items-center gap-2 px-5 py-2.5 bg-siffrum-500 text-white rounded-xl font-medium hover:bg-siffrum-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-siffrum-50 flex items-center justify-center flex-shrink-0">
                              {project.image_url ? (
                                <img src={project.image_url} alt="" className="w-10 h-10 rounded-lg object-cover" />
                              ) : (
                                <span className="text-sm font-bold text-siffrum-400">{project.title.charAt(0)}</span>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{project.title}</p>
                              <p className="text-sm text-gray-500 truncate max-w-xs">{project.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-siffrum-50 text-siffrum-600 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{project.client || '—'}</td>
                        <td className="px-6 py-4">
                          {project.featured ? (
                            <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">Yes</span>
                          ) : (
                            <span className="text-xs text-gray-400">No</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEditForm(project)}
                              className="p-2 text-gray-400 hover:text-siffrum-500 hover:bg-siffrum-50 rounded-lg transition-colors"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {projects.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-400">
                  No projects yet. Click "Add Project" to create one.
                </div>
              )}
            </div>

            {/* Project Form Modal */}
            {showForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 font-heading">
                      {editingId ? 'Edit Project' : 'New Project'}
                    </h3>
                    <button
                      onClick={() => setShowForm(false)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmitProject} className="p-6 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                      <input
                        type="text"
                        required
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
                      <input
                        type="text"
                        required
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
                      <textarea
                        rows={3}
                        value={form.long_description}
                        onChange={(e) => setForm({ ...form, long_description: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100 resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                          value={form.category}
                          onChange={(e) => setForm({ ...form, category: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100 bg-white"
                        >
                          <option value="Web App">Web App</option>
                          <option value="Mobile App">Mobile App</option>
                          <option value="UI/UX">UI/UX</option>
                          <option value="Backend">Backend</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                        <input
                          type="text"
                          value={form.client}
                          onChange={(e) => setForm({ ...form, client: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                      <input
                        type="text"
                        value={form.tags}
                        onChange={(e) => setForm({ ...form, tags: e.target.value })}
                        placeholder="React, Node.js, PostgreSQL"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Live URL</label>
                      <input
                        type="url"
                        value={form.live_url}
                        onChange={(e) => setForm({ ...form, live_url: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-siffrum-400 focus:ring-2 focus:ring-siffrum-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                      <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-siffrum-300 transition-colors">
                        <Image className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {form.image ? form.image.name : 'Click to upload an image'}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            setForm({ ...form, image: e.target.files?.[0] || null })
                          }
                        />
                      </label>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-siffrum-500 focus:ring-siffrum-500"
                      />
                      <span className="text-sm text-gray-700">Feature on homepage</span>
                    </label>
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-5 py-2.5 text-gray-600 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-5 py-2.5 bg-siffrum-500 text-white rounded-xl font-medium hover:bg-siffrum-600 transition-colors disabled:opacity-70"
                      >
                        <Save className="w-4 h-4" />
                        {loading ? 'Saving...' : editingId ? 'Update Project' : 'Create Project'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-6 ${!msg.read ? 'bg-siffrum-50/30' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{msg.name}</h4>
                          {!msg.read && (
                            <span className="px-2 py-0.5 bg-siffrum-500 text-white text-xs rounded-full font-medium">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                          <span>{msg.email}</span>
                          {msg.company && <span>{msg.company}</span>}
                          {msg.phone && <span>{msg.phone}</span>}
                          {msg.service && (
                            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                              {msg.service}
                            </span>
                          )}
                          {msg.budget && (
                            <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs">
                              {msg.budget}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed">{msg.message}</p>
                        <p className="text-xs text-gray-400 mt-3">
                          {new Date(msg.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {!msg.read && (
                          <button
                            onClick={() => handleMarkRead(msg.id)}
                            className="p-2 text-gray-400 hover:text-siffrum-500 hover:bg-siffrum-50 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {messages.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-400">
                  No messages yet. They will appear here when customers contact you.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
