import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await

async function main() {

  const result = await prisma.aluno.create({
    data: {
      nome: "Vitor",
      turma:{
        create:{
          qntd: 20,
          unidadeEducacional:{
            create:{
              nome: "Camaragibe",
              material:{
                create:{
                  nome: "Ficha",
                  quantidade: 3,
                  disciplina:{
                    create:{
                      nome: "Empreendendorismo",
                      professor:{
                        create:{
                          nome: "Thiago",
                    },
                  },
                },
              },
            },
          },
        },
      }
    }
  }
}
});
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
