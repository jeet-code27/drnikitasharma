import fs from 'fs';
import path from 'path';
import ClientBlogPage from './ClientBlogPage.jsx';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: 'Urology Health Blogs by Dr. Vishnu Agrawal',
  description: 'Expert articles on urological conditions, treatments, and men\'s health by Dr. Vishnu Agrawal - Urologist in Ajmer (Rajasthan) India',
  authors: [{ name: 'Dr. Vishnu Agrawal', url: 'https://drvishnuagrawal.com' }],
  keywords: 'urology, kidney health, laparoscopic surgery, urologist, Ajmer, Dr. Vishnu Agrawal, andrology, uro-oncology',
  openGraph: {
    title: 'Urology Health Blogs by Dr. Vishnu Agrawal',
    description: 'Expert articles on urological conditions, treatments, and men\'s health by Dr. Vishnu Agrawal',
    type: 'website',
    url: 'https://drvishnuagrawal.com/blog',
  },
  alternates: {
    canonical: 'https://www.drvishnuagrawal.com/blog',
  },
};

export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}