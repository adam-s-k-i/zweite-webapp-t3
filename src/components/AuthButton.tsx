"use client";

import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <motion.div
        className="rounded-full bg-gray-600 px-6 py-2 font-semibold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading...
      </motion.div>
    );
  }

  if (session) {
    return (
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          {session.user?.image && (
            <motion.img
              src={session.user.image}
              alt={session.user.name ?? "User"}
              className="h-8 w-8 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          )}
          <span className="text-white">Welcome, {session.user?.name}</span>
        </motion.div>
        <motion.button
          onClick={() => signOut()}
          className="rounded-full bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Out
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={() => signIn("discord")}
      className="rounded-full bg-[hsl(280,100%,70%)] px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[hsl(280,100%,60%)]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Sign in with Discord
    </motion.button>
  );
};

export default AuthButton;
