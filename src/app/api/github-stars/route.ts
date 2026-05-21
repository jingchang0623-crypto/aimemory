import { NextResponse } from 'next/server';

// Cache for 1 hour
let cachedData: { stars: number; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
  try {
    // Return cached data if valid
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedData);
    }

    // Fetch from GitHub API
    const response = await fetch(
      'https://api.github.com/repos/jingchang0623-crypto/aimemory',
      {
        headers: {
          'User-Agent': 'aimemory-pro',
          // Optional: add GitHub token to increase rate limit
          // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      // Return cached data if fetch fails
      if (cachedData) {
        return NextResponse.json(cachedData);
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const stars = data.stargazers_count || 0;

    cachedData = { stars, timestamp: Date.now() };

    return NextResponse.json({ stars });
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    
    // Return cached data or default
    if (cachedData) {
      return NextResponse.json(cachedData);
    }
    
    return NextResponse.json({ stars: 0 }, { status: 500 });
  }
}
