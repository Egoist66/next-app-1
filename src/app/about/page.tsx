

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
}

export const dynamic = "force-dynamic"

export default async function About() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json() as Array<any>
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
    
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <Link className="text-blue-500" href="/">Home</Link>
      <p className="text-lg mb-5">
        This is a Next.js project bootstrapped with{" "}
        <a href="https://nextjs.org/docs/app/api-reference/cli/create-next-app">
          create-next-app
        </a>
      
      </p>

      <div>
        {posts.map(post => <p key={post.id}>{post.title}</p>)}
      </div>
    </div>
  );
}
