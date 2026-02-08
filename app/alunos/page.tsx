import { prisma } from "../lib/prisma";
import Link from "next/link";

export default async function AlunosPage() {
  const alunos = await prisma.aluno.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Alunos</h1>
        <Link 
          href="/AddAlunos" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Novo Aluno
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="px-6 py-3 text-left">Nome</th>
              <th className="px-6 py-3 text-left">Idade</th>
              <th className="px-6 py-3 text-left">Turma</th>
              <th className="px-6 py-3 text-left">Curso</th>
              <th className="px-6 py-3 text-left">Bilhete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {alunos.map((aluno) => (
              <tr key={aluno.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{aluno.nome}</td>
                <td className="px-6 py-4">{aluno.idade}</td>
                <td className="px-6 py-4">{aluno.turmaNome}</td>
                <td className="px-6 py-4">{aluno.cursoNome}</td>
                <td className="px-6 py-4">{aluno.bilhete}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {alunos.length === 0 && (
          <p className="p-6 text-center text-gray-500">Nenhum aluno cadastrado.</p>
        )}
      </div>
    </div>
  );
}