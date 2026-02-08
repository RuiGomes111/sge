"use server"

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function criarAluno(formData: FormData) {
  const nome = formData.get("nome") as string;
  const idade = Number(formData.get("idade"));
  const turma = formData.get("turma") as string;
  const curso = formData.get("curso") as string;
  const bilhete = formData.get("bilhete") as string;

  try {
    await prisma.aluno.create({
      data: { 
        nome, 
        idade, 
        turmaNome: turma, 
        cursoNome: curso, 
        bilhete 
      },
    });
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    throw new Error("Falha ao salvar no banco de dados.");
  }

  revalidatePath("/alunos");
  redirect("/alunos");
}