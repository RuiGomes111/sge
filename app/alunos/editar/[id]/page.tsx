import { prisma } from "../../../lib/prisma";
import { editarAluno } from "../../../actions/alunoActions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditarAluno({ params,}: {  params: Promise<{ id: string }>;}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const aluno = await prisma.aluno.findUnique({
    where: { id },
  });

  if (!aluno)
    return (
      <div className="p-10 text-center text-red-500 font-bold">
        Aluno não encontrado!
      </div>
    );

  return (
    <div className="flex min-h-screen w-full bg-zinc-50 p-6">
      <div className="max-w-2xl w-full mx-auto">
        <Link
          href="/alunos"
          className="flex items-center gap-2 text-gray-500 hover:text-[#1B4F98] mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> <span>Voltar para a lista</span>
        </Link>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">
            Editar Aluno
          </h1>

          <form action={editarAluno} className="flex flex-col gap-5">
            {/* IMPORTANTE: O campo ID precisa de NAME */}
            <input type="hidden" name="id" value={aluno.id} />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                name="nome"
                type="text"
                defaultValue={aluno.nome}
                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Idade (Atual: {aluno.idade})
                </label>
                <input
                  name="idade"
                  type="date"
                  defaultValue={aluno.idade}
                  className="border border-gray-300 p-2.5 rounded-lg outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Turma
                </label>
                <select
                  name="turma"
                  required
                  className="border border-gray-300 rounded-lg outline-none bg-white p-2.5"
                >
                  <option value="">Selecione uma Turma</option>
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noite">Noite</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Curso</label>
              <select
                name="curso"
                required
                className="border border-gray-300 p-2.5 rounded-lg outline-none bg-white"
              >
                <option value="">Selecione um curso</option>
                <option value="Informática">Informática</option>
                <option value="Administração">Administração</option>
                <option value="Economia">Economia</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Nº do B.I
              </label>
              <input
                name="bilhete"
                type="text"
                defaultValue={aluno.bilhete}
                className="border border-gray-300 p-2.5 rounded-lg outline-none bg-gray-50 text-gray-500"
                readOnly // Geralmente o B.I. não se edita, mas você decide
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md mt-4"
            >
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
