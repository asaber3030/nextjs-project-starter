export type Timestamps = {
  createdAt: Date,
  updatedAt: Date
}

export type User = Timestamps& {
  id: number,
  name: string,
  username: string,
  jobTitle: string,
  email: string,
  photo: string,
}