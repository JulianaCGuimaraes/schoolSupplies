import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/material", async (req, res) => {
    const result = await prisma.material.findMany();
        res.json(result);
});

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
