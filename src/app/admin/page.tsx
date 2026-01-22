"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ADMIN_PASSWORD = "ri2025"; // Change this password

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [readTime, setReadTime] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setSaveMessage("");

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', ADMIN_PASSWORD);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const { url } = await response.json();
        setImage(url);
        setSaveMessage("Image uploaded!");
        setTimeout(() => setSaveMessage(""), 3000);
      } else {
        setSaveMessage("Failed to upload image");
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setSaveMessage("Failed to upload image");
    }

    setIsUploading(false);
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchPosts();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setError("");
      fetchPosts();
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!editingSlug) {
      setSlug(generateSlug(value));
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setReadTime("");
    setContent("");
    setImage("");
    setIsEditing(false);
    setEditingSlug(null);
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const newPost: Post = {
      slug,
      title,
      excerpt,
      date: new Date().toISOString().split("T")[0],
      readTime: readTime || "5 min read",
      content,
      ...(image && { image }),
    };

    let updatedPosts: Post[];

    if (editingSlug) {
      // Update existing post
      updatedPosts = posts.map(p => p.slug === editingSlug ? newPost : p);
    } else {
      // Add new post
      updatedPosts = [newPost, ...posts];
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ posts: updatedPosts, password: ADMIN_PASSWORD }),
      });

      if (response.ok) {
        setPosts(updatedPosts);
        setSaveMessage(editingSlug ? "Post updated!" : "Post saved!");
        setTimeout(() => setSaveMessage(""), 3000);
        resetForm();
      } else {
        setSaveMessage("Error saving post");
      }
    } catch (error) {
      console.error('Error saving post:', error);
      setSaveMessage("Error saving post");
    }

    setIsSaving(false);
  };

  const handleEditPost = (post: Post) => {
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setReadTime(post.readTime);
    setContent(post.content);
    setImage(post.image || "");
    setIsEditing(true);
    setEditingSlug(post.slug);
  };

  const handleDeletePost = async (slugToDelete: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch('/api/posts', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: slugToDelete, password: ADMIN_PASSWORD }),
        });

        if (response.ok) {
          setPosts(posts.filter(p => p.slug !== slugToDelete));
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[var(--border)]">
            <h1 className="text-2xl font-light mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[var(--accent)] text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Login
              </button>
            </form>
            <Link href="/" className="block text-center mt-6 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)]">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--border)] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-light">Perspectives Admin</h1>
          <div className="flex items-center gap-4">
            <Link href="/perspectives" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)]">
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-[var(--border)]">
            <h2 className="text-lg font-medium mb-6">
              {isEditing ? "Edit Post" : "New Post"}
            </h2>

            {saveMessage && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${saveMessage.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {saveMessage}
              </div>
            )}

            <form onSubmit={handleSavePost} className="space-y-4">
              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  required
                  rows={2}
                  className="w-full px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Read Time</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min read"
                  className="w-full px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Image (optional)</label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <label className="flex-1 cursor-pointer">
                      <div className={`px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-center hover:bg-[var(--border)] transition-colors ${isUploading ? 'opacity-50' : ''}`}>
                        {isUploading ? 'Uploading...' : 'Choose Image'}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="hidden"
                      />
                    </label>
                    {image && (
                      <button
                        type="button"
                        onClick={() => setImage("")}
                        className="px-4 py-2 text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {image && (
                    <div className="relative w-full h-32 bg-[var(--background-secondary)] rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground-muted)] mb-1">Content (HTML)</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={12}
                  placeholder="<p>Your content here...</p>"
                  className="w-full px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none font-mono text-sm"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 px-4 py-2 bg-[var(--accent)] text-black font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : isEditing ? "Update Post" : "Save Post"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-[var(--border)] rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Posts List */}
          <div>
            <h2 className="text-lg font-medium mb-4">
              Saved Posts ({posts.length})
              {isLoading && <span className="text-sm font-normal text-[var(--foreground-muted)] ml-2">Loading...</span>}
            </h2>
            <div className="space-y-3">
              {posts.length === 0 && !isLoading ? (
                <p className="text-[var(--foreground-muted)] text-sm">No posts yet. Create your first post!</p>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-white rounded-xl shadow-sm p-4 border border-[var(--border)]"
                  >
                    <h3 className="font-medium mb-1">{post.title}</h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--foreground-subtle)]">{post.date}</span>
                      <div className="flex gap-2">
                        <Link
                          href={`/perspectives/${post.slug}`}
                          className="text-xs text-[var(--foreground-muted)] hover:text-[var(--accent)]"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleEditPost(post)}
                          className="text-xs text-[var(--accent)] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.slug)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
