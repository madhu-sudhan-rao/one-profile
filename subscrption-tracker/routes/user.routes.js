import { Router } from "express";

const userRouter = Router();

userRouter.get("/all", (req, res) => {
  res.send({
    title: "Get all users",
  });
});

userRouter.get("/:id", (req, res) => {
  res.send({
    title: `Get user details ${id}`,
  });
});

userRouter.post("/", (req, res) => {
  res.send({
    title: `Create user`,
  });
});

userRouter.put("/:id", (req, res) => {
  res.send({
    title: `update user details ${id}`,
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    title: `Delete user details ${id}`,
  });
});

export default userRouter;