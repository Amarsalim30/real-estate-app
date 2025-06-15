import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/data/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {},
        password: {},
      },
      async authorize(credentials) {
        const { identifier, password } = credentials;

        const user = users.find(
          u =>
            (u.email === identifier || u.username === identifier) &&
            u.password === password
        );

        if (!user) return null;

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // optional
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // ✅ Required for JWT encryption/decryption
  session: {
    strategy: "jwt", // ✅ Required since you're using token-based sessions
  },
};
