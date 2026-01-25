import { put, list, del } from '@vercel/blob';
import { NextResponse } from 'next/server';

const POSTS_FILE = 'ri-posts.json';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
  status?: 'draft' | 'published';
}


// GET - fetch all posts
export async function GET() {
  try {
    const { blobs } = await list();
    const postsBlob = blobs.find(b => b.pathname === POSTS_FILE);

    if (!postsBlob) {
      return NextResponse.json([]);
    }

    const response = await fetch(postsBlob.url);
    const posts = await response.json();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([]);
  }
}

// POST - save all posts
export async function POST(request: Request) {
  try {
    const { posts, password } = await request.json();

    // Simple password check
    if (password !== process.env.ADMIN_PASSWORD && password !== 'ri2025') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Delete old blob if exists
    const { blobs } = await list();
    const oldBlob = blobs.find(b => b.pathname === POSTS_FILE);
    if (oldBlob) {
      await del(oldBlob.url);
    }

    // Save new posts
    const blob = await put(POSTS_FILE, JSON.stringify(posts), {
      access: 'public',
      contentType: 'application/json',
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    console.error('Error saving posts:', error);
    return NextResponse.json({ error: 'Failed to save posts' }, { status: 500 });
  }
}

// DELETE - delete a specific post
export async function DELETE(request: Request) {
  try {
    const { slug, password } = await request.json();

    if (password !== process.env.ADMIN_PASSWORD && password !== 'ri2025') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get current posts
    const { blobs } = await list();
    const postsBlob = blobs.find(b => b.pathname === POSTS_FILE);

    if (!postsBlob) {
      return NextResponse.json({ error: 'No posts found' }, { status: 404 });
    }

    const response = await fetch(postsBlob.url);
    const posts: Post[] = await response.json();

    // Filter out the deleted post
    const updatedPosts = posts.filter(p => p.slug !== slug);

    // Delete old and save new
    await del(postsBlob.url);
    await put(POSTS_FILE, JSON.stringify(updatedPosts), {
      access: 'public',
      contentType: 'application/json',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
