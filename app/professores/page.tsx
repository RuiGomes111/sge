import { prisma } from "../lib/prisma";
import ProfessoresCards from "./cards";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";

  const professores = await prisma.professor.findMany({
    where: {
      user: {
        name: { contains: query, mode: "insensitive" },
      },
    },
    include: {
      user: true,
      professorDisciplinas: {
        include: { disciplina: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gestão de Professores</h1>
      <ProfessoresCards initialProfessores={professores} />
    </div>
  );
}