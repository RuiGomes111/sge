"use server"

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function criarAluno(formData: FormData) {
  const nome = formData.get("nome") as string;
  const dataNascimentoRaw = formData.get("idade") as string; 
  const turma = formData.get("turma") as string;
  const curso = formData.get("curso") as string;
  const bilhete = formData.get("bilhete") as string;

  // Lógica para converter data em idade numérica
  const nascimento = new Date(dataNascimentoRaw);
  const hoje = new Date();
  let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
  
  // Ajuste fino: verifica se já fez anos este ano
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idadeCalculada--;
  }

  try {
    await prisma.aluno.create({
      data: { 
        nome, 
        idade: idadeCalculada, 
        turmaNome: turma, 
        cursoNome: curso, 
        bilhete 
      },
    });
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    return { error: "Falha ao salvar no banco de dados." };
  }

  revalidatePath("/alunos");
  redirect("/alunos");
}