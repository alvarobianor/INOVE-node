import { Router } from "express";

// initial of a route

const usersRouter = Router();

// ROUTES

usersRouter.post("/", async (req, res) => {
  return res.json({ message: "user" });
});

export default usersRouter;
