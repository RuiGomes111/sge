-- CreateEnum
CREATE TYPE "Trimestre" AS ENUM ('PRIMEIRO', 'SEGUNDO', 'TERCEIRO');

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "turmaNome" TEXT NOT NULL,
    "cursoNome" TEXT NOT NULL,
    "bilhete" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "turmaId" TEXT,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnoLetivo" (
    "id" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnoLetivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cursoId" TEXT NOT NULL,
    "anoLetivoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bilhete" TEXT,
    "idade" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessorTurma" (
    "id" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "ProfessorTurma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessorDisciplina" (
    "id" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "ProfessorDisciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "id" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "trimestre" "Trimestre" NOT NULL,
    "alunoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_bilhete_key" ON "Aluno"("bilhete");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_userId_key" ON "Aluno"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_userId_key" ON "Professor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_bilhete_key" ON "Professor"("bilhete");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_anoLetivoId_fkey" FOREIGN KEY ("anoLetivoId") REFERENCES "AnoLetivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorTurma" ADD CONSTRAINT "ProfessorTurma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorTurma" ADD CONSTRAINT "ProfessorTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorDisciplina" ADD CONSTRAINT "ProfessorDisciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorDisciplina" ADD CONSTRAINT "ProfessorDisciplina_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
