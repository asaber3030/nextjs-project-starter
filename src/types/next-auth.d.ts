import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    id: string,
    username: string,
    email: string,
    photo: string,
    jobTitle: string,
    createdAt: Date,
    updatedAt: Date
  }
  
  interface Session {
    user: User & {
      id: string,
      username: string,
      jobTitle: string,
      email: string,
      photo: string,
      createdAt: Date,
      updatedAt: Date
    }
    token: {
      id: string,
      username: string,
      jobTitle: string,
      email: string,
      photo: string,
      createdAt: Date,
      updatedAt: Date
    }
  }
}