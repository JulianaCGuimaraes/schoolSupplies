import express from "express";
import swaggerUi from "swagger-ui-express";
import {router} from "../src/routes";
import swaggerDocs from "swagger-json";


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", async (req, res) => {
    return res.json({
      message: "Termos de Serviço",
    });
});

app.use("/v1", router);
app.listen(3000, () => console.log("Server is running on port 3000"));
