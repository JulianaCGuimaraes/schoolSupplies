import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/list/material/", async (req, res) => {
  const result1 = await prisma.material.findMany();
      res.json(result1);
});

app.get("/get/:id/material", async (req, res) => {
  const {id} = req.params;
    const result2 = await prisma.material.findMany({
      where: {
        id: Number(id),
      },
    });
        res.json(result2);
});

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
