import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const users = [
          { id: 1, username: 'Alice',email: 'admin', password: 'admin', role: 'admin' },
          { id: 2, username: 'Bob', email: 'manager', password: 'manager', role: 'user' },
          { id: 3, username: 'Carol', email: 'user', password: 'user', role: 'user' },
        ];

        return users.find(u =>
          u.username === credentials.username && u.password === credentials.password
        ) || null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
