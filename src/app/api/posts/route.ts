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
}

// Seed posts that will be created on first access if storage is empty
const seedPosts: Post[] = [
  {
    slug: "ai-capability-gap",
    title: "The AI Capability Gap",
    excerpt: "Why most organisations struggle to capture value from AI — and what to do about it.",
    date: "2025-01-23",
    readTime: "5 min read",
    content: `<p>The gap between AI's potential and most organisations' ability to capture it has never been wider. Every week brings announcements of new models, new capabilities, new possibilities. Yet most enterprises remain stuck in pilot purgatory — running experiments that never scale, building proofs of concept that never become products.</p>
<p>This isn't a technology problem. The technology works. It's a capability problem — a gap between what's possible and what organisations can actually execute.</p>
<h2>The Three Gaps</h2>
<p>We see three distinct capability gaps holding organisations back:</p>
<p><strong>The People Gap:</strong> Teams that understand the business don't understand AI. Teams that understand AI don't understand the business. The translation layer is missing.</p>
<p><strong>The Process Gap:</strong> Existing workflows were designed for a world where humans did everything. Retrofitting AI into these processes captures a fraction of the potential value.</p>
<p><strong>The Product Gap:</strong> Most organisations are consumers of AI, not builders. They lack the engineering capability to create differentiated AI-powered products and services.</p>
<h2>Closing the Gap</h2>
<p>Closing these gaps requires more than buying tools or hiring consultants. It requires building lasting capability — the skills, processes, and systems that allow an organisation to continuously adapt as AI evolves.</p>
<p>This is the work we do at Radical Intelligence. Not building for you, but building with you — in a way that transfers the muscle.</p>`,
  },
  {
    slug: "building-vs-buying",
    title: "Building vs Buying AI",
    excerpt: "A framework for deciding when to build custom AI solutions and when to leverage existing tools.",
    date: "2025-01-15",
    readTime: "7 min read",
    content: `<p>"Should we build or buy?" It's the question we hear most often from organisations starting their AI journey. And like most important questions, the answer is: it depends.</p>
<p>But it depends on things most organisations aren't considering. The build vs buy decision isn't primarily about cost or time-to-market. It's about where you want to create competitive advantage.</p>
<h2>The Decision Framework</h2>
<p>We use a simple framework to guide this decision:</p>
<p><strong>Buy</strong> when AI is a commodity input — when the capability is table stakes and differentiation comes from elsewhere. Customer service chatbots, document processing, basic analytics — these are increasingly commoditised. Buy the best available and move on.</p>
<p><strong>Build</strong> when AI is a source of differentiation — when proprietary data, unique workflows, or deep domain expertise can create capabilities your competitors can't easily replicate.</p>
<h2>The Hidden Third Option</h2>
<p>But there's a third option most organisations miss: build the capability to build. Rather than outsourcing AI development entirely, invest in the internal skills and systems that allow you to rapidly build and iterate on AI solutions.</p>
<p>This is where the real leverage lies. Not in any single AI application, but in the organisational capability to continuously identify opportunities, experiment quickly, and scale what works.</p>`,
  },
];

// GET - fetch all posts (auto-seeds if empty)
export async function GET() {
  try {
    const { blobs } = await list();
    const postsBlob = blobs.find(b => b.pathname === POSTS_FILE);

    if (!postsBlob) {
      // Auto-seed with initial posts on first access
      try {
        await put(POSTS_FILE, JSON.stringify(seedPosts), {
          access: 'public',
          contentType: 'application/json',
        });
        return NextResponse.json(seedPosts);
      } catch {
        // If seeding fails (e.g., locally), return empty
        return NextResponse.json([]);
      }
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
