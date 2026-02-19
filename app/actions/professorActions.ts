"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs"; 

export async function criarProfessor(formData: FormData) {
  const name = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string || "mudar123";
  const dataNascimentoRaw = formData.get("idade") as string;  
  const bilhete = formData.get("bilhete") as string;

  // Validação simples
  if (!name || !email) {
    return { error: "Nome e Email são obrigatórios." };
  }

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
    // Hash da senha (segurança básica)
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.professor.create({
      data: {
        user: {
          create: {
            name,
            email,
            password: hashedPassword,            
            role: "PROFESSOR", // Enum definido no teu schema
          },
        },
        idade: idadeCalculada,
        bilhete,
      },
    });
  } catch (error: any) {
    console.error("Erro ao criar professor:", error);
    
    
    if (error.code === "P2002") {
      return { error: "Este email já está em uso por outro usuário." };
    }
    
    return { error: "Falha técnica ao salvar professor." };
  }

  revalidatePath("/professores");
  redirect("/professores");
}

export async function editarProfessor(formData: FormData) {
  const id = formData.get("id") as string; // ID do Professor
  const name = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const dataNascimentoRaw = formData.get("idade") as string;  
  const bilhete = formData.get("bilhete") as string;

  
 // Lógica para converter data em idade numérica
  const nascimento = new Date(dataNascimentoRaw);
  const hoje = new Date();
  const idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();

  if (!id || !name || !email) {
    return { error: "Dados insuficientes para atualização." };
  }

  try {
    await prisma.professor.update({
      where: { id },      
      data: {
        user: {
          update: {
            name,
            email,
          },
        },
        idade: idadeCalculada,
        bilhete
      },
    });
  } catch (error) {
    console.error("Erro ao editar professor:", error);
    return { error: "Não foi possível atualizar os dados." };
  }

  revalidatePath("/professores");
  redirect("/professores");
}