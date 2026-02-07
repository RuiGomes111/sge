import Link from "next/link";
import { Search, Plus, Edit2 } from "lucide-react";

export default function AlunosPage() {
  const alunos = [
    { nome: "João Silva", idade: 20, turma: "10ª A", curso: "Informática", bi: "1234567890" },
    { nome: "Maria Santos", idade: 19, turma: "10ª B", curso: "Administração", bi: "0987654321" },
    { nome: "Pedro Costa", idade: 21, turma: "10ª A", curso: "Informática", bi: "1122334455" },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Alunos</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar aluno..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
            />
          </div>

          <Link 
            href="/AddAlunos"
            className="bg-[#1B4F98] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#153e77] transition-all"
          >
            <Plus size={18} />
            <span>Novo Aluno</span>
          </Link>
        </div>
      </div>

      {/* VERSÃO MOBILE: Cards (visível apenas em ecrãs pequenos) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {alunos.map((aluno, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative">
            <button className="absolute top-4 right-4 text-blue-600">
                <Edit2 size={16} />
            </button>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-tight">{aluno.curso}</span>
              <h2 className="font-bold text-slate-800 text-lg">{aluno.nome}</h2>
              <div className="grid grid-cols-2 mt-2 text-sm">
                <div>
                  <p className="text-gray-500 text-xs">Turma</p>
                  <p className="font-medium">{aluno.turma}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Nº B.I</p>
                  <p className="font-medium">{aluno.bi}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VERSÃO DESKTOP: Tabela (escondida no mobile) */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Idade</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Turma</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Curso</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right px-10">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {alunos.map((aluno, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-center text-slate-600 font-medium">{aluno.idade}</td>
                <td className="px-6 py-4 font-semibold text-slate-800">{aluno.nome}</td>
                <td className="px-6 py-4 text-center text-sm font-medium text-slate-600">{aluno.turma}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{aluno.curso}</td>
                <td className="px-6 py-4 text-right px-10">
                  <button className="text-blue-600 hover:text-blue-800 font-bold text-sm">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}