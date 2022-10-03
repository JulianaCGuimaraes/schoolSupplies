-- CreateTable
CREATE TABLE "Turma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qntd" INTEGER NOT NULL,
    "idAluno" INTEGER NOT NULL,
    CONSTRAINT "Turma_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UnidadeEducacional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idTurma" INTEGER,
    CONSTRAINT "UnidadeEducacional_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    "idUnidadeOperacional" INTEGER,
    CONSTRAINT "Material_idUnidadeOperacional_fkey" FOREIGN KEY ("idUnidadeOperacional") REFERENCES "UnidadeEducacional" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" INTEGER NOT NULL,
    "idMaterial" INTEGER,
    "idProfessor" INTEGER,
    CONSTRAINT "Disciplina_idMaterial_fkey" FOREIGN KEY ("idMaterial") REFERENCES "Material" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Disciplina_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
