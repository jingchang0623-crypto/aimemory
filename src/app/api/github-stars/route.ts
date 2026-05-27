import { NextRequest, NextResponse } from 'next/server';

// Cache for GitHub stars (cache for 1 hour)
let cachedStars: number | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

async function getGitHubStars(): Promise<number> {
  const now = Date.now();
  
  // Return cached value if still valid
  if (cachedStars !== null && (now - cacheTime) < CACHE_DURATION) {
    return cachedStars;
  }

  try {
    const response = await fetch(
      'https://api.github.com/repos/jingchang0623-crypto/aimemory',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'aimemory-pro',
        },
        // 3 second timeout
        signal: AbortSignal.timeout(3000),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    cachedStars = data.stargazers_count ?? 0;
    cacheTime = now;
    return cachedStars as number;
  } catch (error) {
    console.error('Failed to fetch GitHub stars:', error);
    // Return cached value if available, otherwise return 0
    if (cachedStars !== null) {
      return cachedStars;
    }
    return 0;
  }
}

export async function GET(request: NextRequest) {
  const stars = await getGitHubStars();
  
  return NextResponse.json(
    { stars },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    }
  );
}
