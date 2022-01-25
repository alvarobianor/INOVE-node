import { Router } from "express";

// initial of a route

const adminRouter = Router();

// ROUTES

adminRouter.post("/", async (req, res) => {
  return res.json({ message: "user" });
});

export default adminRouter;
