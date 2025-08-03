import { connectDB } from "../utils/db.js";
import User from "../models/User.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello from SecondHandStore API" });
  }

  if (req.method === "POST") {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    return res.status(201).json({ message: "User created" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
