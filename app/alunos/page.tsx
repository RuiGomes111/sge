import { prisma } from "../lib/prisma";
import Link from "next/link";
import AlunosList from "./alunosList";

export default async function AlunosPage() {
  const alunos = await prisma.aluno.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const percentualOcupacao = (alunos.length / 500) * 100;

  return (
    
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Lista de Alunos</h1>
          <p className="text-gray-500 font-medium">Total: {alunos.length} registados</p>
        </div>
        
        <Link 
          href="/AddAlunos" 
          className="bg-blue-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
        >
          + Novo Aluno
        </Link>
      </div>

      <div className="w-full">
        
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 p-6 bg-white rounded-2xl shadow-sm border-l-8 ${
          alunos.length > 500 ? 'border-red-500' : 'border-green-500'
        }`}>
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg lg:text-xl font-bold text-gray-800">Capacidade do Sistema</h2>
            <p className="text-sm text-gray-500 font-medium">Limite: 500 alunos</p>
          </div>
          
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 sm:text-right border-t sm:border-t-0 pt-4 sm:pt-0">
            <div>
              <span className={`text-3xl font-black block ${alunos.length > 500 ? 'text-red-600' : 'text-green-600'}`}>
                {percentualOcupacao.toFixed(1)}%
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                {alunos.length > 500 ? 'Superlotado' : 'Ocupação Atual'}
              </p>
            </div>
          </div>
        </div>

        <AlunosList initialAlunos={alunos} />
      </div>
    </div>
  );
}