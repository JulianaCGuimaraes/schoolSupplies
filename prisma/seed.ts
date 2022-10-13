import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const materialData: Prisma.MaterialCreateInput[] = [
    {
        name: "botas",
        quantity: 2,
        disciplines:{
             create:[
             {
                name: "Soldagem",
            },
            ],
        },
    },
    {
        name: "Notebook",
        quantity: 5,
        disciplines:{
             create:[
             {
                name: "Usinagem",
            },
            ],
        },
    },
    {
        name: "Mapa de risco",
        quantity: 10,
        disciplines:{
             create:[
             {
                name: "Desenho técnico",
            },
            ],
        },
    },
    {
        name: "papel milímetrado",
        quantity: 50,
        disciplines:{
             create:[
             {
                name: "Segurança no trabalho",
            },
            ],
        },
    },
]



async function main() {
    console.log(`Start seeding ...`)
    for (const u of materialData) {
      const material = await prisma.material.create({
        data: u,
      })
      console.log(`Created user with id: ${material}`)
    }
    console.log(`Seeding finished.`)
  }
  
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
