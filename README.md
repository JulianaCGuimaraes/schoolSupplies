# schoolSupplies

# Repository cloned initial to:
Este repositório contém o projeto inicial para o workshop Database Workflows & API Development with Prisma de Nikolas Burk.

# Prisma ORM

## **Models in Prisma Client**

### **Queries (CRUD)**

- Todos os exemplos de modelos que irão ser apresentados, já tem sua migration criada.

### //  MIGRATION INIT    //
  
#### **Tradicional**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

console.log("test");
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  
``````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
test
</div>


-------------------
#### **Find Many**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

const resultado = await prisma.user.findMany();

console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
[<br>
  { id: 1, name: 'Luis Test', email: 'luis1@test.com' },<br>
  { id: 2, name: 'Fernanda Test', email: 'fernanda1@test.com' },
  <br>
  { id: 3, name: 'Bruno Test', email: 'bruno1@test.com' }<br>
]
</div>

----------------------------
#### *Create*

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

const resultado = await prisma.user.create({
  data:{
    email:"luis@test.com",
  },
});
console.log(resultado);


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{ id: 4, name: null, email: 'luis@test.com' }
</div>


-----------------------
#### **Update**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
const resultado = await prisma.user.update({
  data:{
    name: "Luís Atualizado"
    },
    where:{
      id: 4,
    }
});
console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{ id: 4, name: Luís Atualizado, email: 'luis@test.com' }
</div>


### //  MIGRATION ADD_POST    //
#### *Create*

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
const resultado = await prisma.post.create({
  data: {
    title: "Hello World",
  },
});
console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{title: Hello World}
</div>

-------------------------------
#### *Update*

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
const resultado = await prisma.post.update({
  data:{
    author: {
      connect: {
        id: 4,
      },
    }
  },
  where:{
    id: 1,
  },
});
console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{<br>
  id: 1, <br>
  content: null, <br>
  published: false, <br>
  authorId: 4 <br>
}
</div>

--------------------------------

### //  MIGRATION INIT    //

#### **Find Unique**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
const resultado = await prisma.user.findUnique({
  where: {
    email: "luis@test.com",
  },
});
console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{ id: 4, name: 'Luís Atualizado', email: 'luis@test.com' }
</div>

-------------------------------
#### **Find Many**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
const resultado = await prisma.user.findMany({
  select:{
    id: true,
    name: true,
  }
})
console.log(resultado);

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{ id: 1, name: 'Luis Test' },<br>
{ id: 2, name: 'Fernanda Test' },<br>
{ id: 3, name: 'Bruno Test' },<br>
{ id: 4, name: 'Luís Atualizado' }
</div>

--------------------------

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  console.log(resultado[0]);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}
````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
{ id: 1, name: 'Luis Test' }
</div>

--------------------

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.findMany({
    //Procura todos os relacionamentos do tipo (neste caso o USER)
    include:{
      posts:true,
    }
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
[<br>
  { id: 1, name: 'Luis Test', email: 'luis1@test.com', posts: [] },<br>
  {<br>
    name: 'Fernanda Test',<br>
    email: 'fernanda1@test.com',<br>
    posts: []<br>
  },<br>
  { id: 3, name: 'Bruno Test', email: 'bruno1@test.com', posts: [] },<br>
  {<br>
    id: 4,<br>
    name: 'Luís Atualizado',<br>
    email: 'luis@test.com',<br>
    posts: [ [Object] ]<br>
  }<br>
]
</div>

--------------------

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.findMany({
    //Procura todos os relacionamentos do tipo (neste caso o USER)
    include:{
      posts:true,
    }
  });
  console.log(JSON.stringify(resultado, null, 1));
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
[<br>
 {<br>
  "id": 1,<br>
  "name": "Luis Test",<br>
  "email": "luis1@test.com",<br>
  "posts": []<br>
 },<br>
 {<br>
  "id": 2,<br>
  "name": "Fernanda Test",<br>
  "email": "fernanda1@test.com",<br>
  "posts": []<br>
 },<br>
 {<br>
  "id": 3,<br>
  "name": "Bruno Test",<br>
  "email": "bruno1@test.com",<br>
  "posts": []<br>
 },<br>
 {<br>
  "id": 4,<br>
  "email": "luis@test.com",<br>
  "posts": [<br>
   {<br>
    "id": 1,<br>
    "title": "Hello World",<br>
    "content": null,<br>
    "published": false,<br>
    "authorId": 4<br>
   }<br>
  ]<br>
 }<br>
]
</div>

-------------------
#### **Post dentro do User**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.create({
    data:{
      email: 'luis+2@example.com',
      name: "Luís com Post",
      posts:{
        create:{
          title: "Post do Luís",
        },
      },
    },
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  ````````
  **Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">  { id: 5, name: 'Luís com Post', email: 'luis+2@example.com' }</div>

--------------------------------------
#### **Post dentro do User**

```````` ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.create({
    data:{
      email: 'luis+2@example.com',
      name: "Luís com Post",
      posts:{
        create:{
          title: "Post do Luís",
        },
      },
    },
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  ````````

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">  { id: 5, name: 'Luís com Post', email: 'luis+2@example.com' }
<div>                                                                                                                                                                                       ---------------------------------------   

#### **Acha o nome pela letra inicial**

````````ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const resultado = await prisma.user.findMany({
    where: {
      name: {
        startsWith: 'F'
        }
      }
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })                                                                                         

**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
[ { id: 2, name: 'Fernanda Test', email: 'fernanda1@test.com' } ]
</div>   

-----------------------

#### **Consultas paginadas**

- Traga x(take) quantidaddes de registros, ignorando os primerios y(skip) quantidades de registros

````````ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  const resultado = await prisma.user.findMany({
    // esqueça os primeirosd 0 registros, e me tras a quantidade 1 de registro depois
    skip: 0,
    take: 1,
  });
  console.log(resultado);


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
[ { id: 1, name: 'Luis Test', email: 'luis1@test.com' } ]
</div>

-------------------------

#### *Upsert*

````````ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  const resultado = await prisma.user.upsert({
    where: {
      email: "naotem@test.com",
    },
    create: {
      email: "naotem@test.com",
      name: "Create test",
    },
    update: {
      name: "Update test",
    }
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
````````
**Retorno:**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
1. npm run dev
{ id: 6, name: 'Create test', email: 'naotem@test.com' }

2. npm run dev
{ id: 6, name: 'Update test', email: 'naotem@test.com' }
</div>


