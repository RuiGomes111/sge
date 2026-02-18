"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline, IoPencilOutline } from "react-icons/io5";

export default function AlunosList({  initialAlunos,}: { initialAlunos: any[];}) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const alunosFiltrados = initialAlunos.filter((aluno) =>
    aluno.bilhete.includes(search),
  );

  return (
    <>
      {/* Barra de Pesquisa */}
      <div className="relative mb-6 w-full max-w-md">
        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Pesquisar aluno por bilhete..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>

      {/* Tabela */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white uppercase text-xs font-semibold tracking-widest">
              <th className="px-6 py-4 text-left">Nome</th>
              <th className="px-6 py-4 text-left">Idade</th>
              <th className="px-6 py-4 text-left">Turma</th>
              <th className="px-6 py-4 text-left">Curso</th>
              <th className="px-6 py-4 text-left">Bilhete</th>
              <th className="px-6 py-4 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {alunosFiltrados.map((aluno) => (
              <tr
                key={aluno.id}
                className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-blue-50/80 transition-all duration-200 group"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {aluno.nome}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {aluno.idade} anos
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-[11px] font-bold uppercase">
                    {aluno.turmaNome}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap italic">
                  {aluno.cursoNome}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 bg-zinc-700 text-zinc-100 rounded-full text-xs font-mono shadow-sm">
                    {aluno.bilhete}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md bg-white border border-blue-100"
                      title="Editar Aluno"
                      onClick={() => router.push(`/alunos/editar/${aluno.id}`)}
                    >
                      <IoPencilOutline size={18} />
                    </button>
                    {/* Sugestão: adicione um botão de apagar aqui depois se precisar */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {alunosFiltrados.length === 0 && (
          <div className="p-10 text-center">
            <p className="text-gray-400 italic">Nenhum aluno encontrado.</p>
          </div>
        )}
      </div>
    </>
  );
}
