import { Router } from "express";
import {v4 as uuid } from "uuid"
import {ensuredAuthenticated} from "./middleware";

const router = Router();

interface MaterialsDTO {
    id: string;
    name: string;
    quantity: number;
    //idEducationalUnity: number;
}

const materials: MaterialsDTO[] = [];

router.post("/materials", ensuredAuthenticated, (request, response) => {
    const {name, quantity} = request.body;

    const materialAlreadyExists = materials.find(
    (material) => material.name === name
);

 if (materialAlreadyExists) {
    return response.status(400).json({
        message: "Product already exists!",
    });
}

const material: MaterialsDTO = {
    id: uuid(),
    name,
    quantity,
};

materials.push(material);

return response.json(material);
});

router.get("/materials/findByName", (request, response) => {
    const { name } = request.query;
    const material = materials.filter((m) => m.name.includes(String(name)));
    return response.json(material);
});

router.get("/materials/:id", (request, response) => {
    const { id } = request.params;
    const material = materials.find((material) => material.id === id);
    return response.json(material);
});


router.put("/products/:id", ensuredAuthenticated, (request, response) => {
    const { id } = request.params;
    const {name, quantity} = request.body;

    const materialIndex = materials.findIndex((material) => material.id === id);

    if (materialIndex === -1) {
        return response.status(400).json({
            message: "Product doesn't exists!",
        });
}

const material: MaterialsDTO = Object.assign ({
    name,
    quantity,
});

materials[materialIndex] = material;

return response.json(material);

});

export {router};