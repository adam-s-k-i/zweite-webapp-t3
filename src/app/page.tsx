"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import AuthButton from "~/components/AuthButton";

const AnimatedCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-6 text-white transition-all duration-300 hover:bg-white/20"
        href={href}
        target="_blank"
      >
        <motion.h3
          className="text-2xl font-bold"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title} →
        </motion.h3>
        <motion.div
          className="text-lg"
          animate={{ opacity: isHovered ? 0.8 : 1 }}
        >
          {description}
        </motion.div>
      </Link>
    </motion.div>
  );
};

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="fixed bottom-8 right-8 rounded-full bg-[hsl(280,100%,70%)] px-6 py-3 font-semibold text-white shadow-lg"
      whileHover={{ scale: 1.1, backgroundColor: "hsl(280,100%,60%)" }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => window.open("/api/auth/signin", "_self")}
    >
      <motion.span
        animate={{ x: isHovered ? 2 : 0 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Get Started
      </motion.span>
    </motion.button>
  );
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <motion.h1
          className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </motion.h1>

        <motion.p
          className="max-w-2xl text-center text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A full-stack Next.js application with TypeScript, Prisma, NextAuth.js,
          and Tailwind CSS
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <AnimatedCard
            title="First Steps"
            description="Everything you need to know to set up your database and authentication."
            href="https://create.t3.gg/en/usage/first-steps"
          />
          <AnimatedCard
            title="Documentation"
            description="Learn more about Create T3 App and the libraries it uses."
            href="https://create.t3.gg/en/introduction"
          />
          <AnimatedCard
            title="Deployment"
            description="Deploy your T3 Stack application to production."
            href="https://create.t3.gg/en/deployment"
          />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <AuthButton />
        </motion.div>

        <FloatingButton />
      </div>
    </main>
  );
}
