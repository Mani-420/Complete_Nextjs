import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-3 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <p className="text-lg">This is the home page.</p>
    </div>
  );
}
