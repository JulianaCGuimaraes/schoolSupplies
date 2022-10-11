import { response, Router } from "express";
import {v4 as uuid } from "uuid"
import {ensuredAuthenticated} from "./modules/materiais/infra/http/middlewares/middleware";

const router = Router();

interface ProductsDTO {
    name: string;
    description: string;
    price: number;
    id: string;
}

const products: ProductsDTO[] = [];

router.get("/products/findByName", (req, res) => {
    const { name } = req.query;
    const product = products.filter((p) => p.name.includes(String(name)));
    return response.json(product);
});

router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    return response.json(product);
});

router.post("/products", ensuredAuthenticated, (req, res) => {
    const { name, description, price } = req.body;

    const productAlreadyExists = products.find(
    (product) => product.name === name
);

 if (productAlreadyExists) {
    return res.status(400).json({
        message: "Product already exists!",
    });
}

const product: ProductsDTO = {
    description,
    name,
    price,
    id: uuid(),
};

products.push(product);

return res.json(product);
});

router.put("/products/:id", ensuredAuthenticated, (req, res) => {
    const { id } = req.params;
    const {name, description, price} = req.body;

    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
        return res.status(400).json({
            message: "Product doesn't exists!",
        });
}

const product: ProductsDTO = Object.assign ({
    name,
    description,
    price,
});

products[productIndex] = product;

return response.json(product);

});

export {router};