import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const materialData: Prisma.MaterialCreateInput[] = [
    {
        nome: "botas",
        quantidade: 2,
        disciplina:{
             create:[
             {
                nome: "Soldagem",
            },
            ],
        },
    },
    {
        nome: "Notebook",
        quantidade: 5,
        disciplina:{
             create:[
             {
                nome: "Usinagem",
            },
            ],
        },
    },
    {
        nome: "Mapa de risco",
        quantidade: 10,
        disciplina:{
             create:[
             {
                nome: "Desenho técnico",
            },
            ],
        },
    },
    {
        nome: "papel milímetrado",
        quantidade: 50,
        disciplina:{
             create:[
             {
                nome: "Segurança no trabalho",
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
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
