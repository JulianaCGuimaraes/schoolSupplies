import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await

async function main() {

/*
  const result = await prisma.aluno.create({
    data: {
      nome: "Vitor",
      turma:{
        create:{
          qntd: 20,
          unidadeEducacional:{
            create:{
              nome: "Santo Amaro",
              material:{
                create:{
                  nome: "livro didatico",
                  quantidade: 1,
                  disciplina:{
                    create:{
                      nome: "Técnico em Administração",
                      professor:{
                        create:{
                          nome: "Carla",
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
*/

const result1 = await prisma.disciplina.findMany({
    where:{
      id: 1,
    },
});
console.log(result1);

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
