import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/userModel";
import { compare } from "bcrypt";
import dbConnect from "@/dbconnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        dbConnect().catch((error) => {
          error: "Connection Failed...!";
        });

        // check user existance
        const user = await Users.findOne({ email: credentials.email });

        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        if (user && checkPassword) {
          delete user.password;
          return Promise.resolve(user);
        } else {
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token._doc._id;
        session.user.isDoctor = token._doc.isDoctor;
        session.user.name = token._doc.fullname;
        session.user.email = token._doc.email;
        session.user.profile = token._doc.profile;
      }
      return { ...session };
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
