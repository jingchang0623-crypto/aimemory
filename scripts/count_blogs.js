const fs = require('fs');
const content = fs.readFileSync('src/lib/blog-data.ts', 'utf8');

// Find the blogPosts array
const start = content.indexOf('export const blogPosts: BlogPost[] = [');
const arrayStart = content.indexOf('[', start);
// Find the closing ]; that ends the array
let depth = 1;
let pos = arrayStart + 1;
while (depth > 0 && pos < content.length) {
  if (content[pos] === '[') depth++;
  if (content[pos] === ']') depth--;
  pos++;
}
const arrayContent = content.substring(arrayStart, pos);
const slugs = [...arrayContent.matchAll(/slug:\s*'([^']+)'/g)];
console.log('Total blog posts in blog-data.ts:', slugs.length);
slugs.forEach(m => console.log(m[1]));
