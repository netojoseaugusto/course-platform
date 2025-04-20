import Link from "next/link";
import { ReactNode } from "react";
import { SignedIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link
          className="mr-auto text-lg hover:underline px-2 flex items-center"
          href="/"
        >
          Course Platform
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <SignedIn>
            <Link
              className="hover:bg-accent/10 flex items-center px-2"
              href="/courses"
            >
              My Courses
            </Link>
            <Link
              className="hover:bg-accent/10 flex items-center px-2"
              href="/purchases"
            >
              Purchase History
            </Link>
          </SignedIn>
        </Suspense>
      </nav>
    </header>
  );
}
