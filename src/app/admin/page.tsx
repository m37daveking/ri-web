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
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [readTime, setReadTime] = useState("");
  const [content, setContent] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }

    // Load posts from localStorage
    const savedPosts = localStorage.getItem("ri_posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setError("");
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
    setIsEditing(false);
    setEditingSlug(null);
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      slug,
      title,
      excerpt,
      date: new Date().toISOString().split("T")[0],
      readTime: readTime || "5 min read",
      content,
    };

    let updatedPosts: Post[];

    if (editingSlug) {
      // Update existing post
      updatedPosts = posts.map(p => p.slug === editingSlug ? newPost : p);
    } else {
      // Add new post
      updatedPosts = [newPost, ...posts];
    }

    setPosts(updatedPosts);
    localStorage.setItem("ri_posts", JSON.stringify(updatedPosts));

    setSaveMessage(editingSlug ? "Post updated!" : "Post saved!");
    setTimeout(() => setSaveMessage(""), 3000);

    resetForm();
  };

  const handleEditPost = (post: Post) => {
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setReadTime(post.readTime);
    setContent(post.content);
    setIsEditing(true);
    setEditingSlug(post.slug);
  };

  const handleDeletePost = (slugToDelete: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter(p => p.slug !== slugToDelete);
      setPosts(updatedPosts);
      localStorage.setItem("ri_posts", JSON.stringify(updatedPosts));
    }
  };

  const exportPosts = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportName = "ri_posts_" + new Date().toISOString().split("T")[0] + ".json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportName);
    linkElement.click();
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
            <button
              onClick={exportPosts}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)]"
            >
              Export JSON
            </button>
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
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
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
                  className="flex-1 px-4 py-2 bg-[var(--accent)] text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {isEditing ? "Update Post" : "Save Post"}
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
            <h2 className="text-lg font-medium mb-4">Saved Posts ({posts.length})</h2>
            <div className="space-y-3">
              {posts.length === 0 ? (
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

            <div className="mt-6 p-4 bg-[var(--background-secondary)] rounded-lg">
              <p className="text-sm text-[var(--foreground-muted)]">
                <strong>Note:</strong> Posts are saved to your browser&apos;s localStorage. Use &quot;Export JSON&quot; to back up your posts, then add them to the code in <code className="bg-white px-1 rounded">perspectives/page.tsx</code>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
