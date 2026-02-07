"use client";

import { useState } from "react";
// CORREÇÃO: Importar o Link do Next.js para navegação e o Ícone com nome diferente
import Link from "next/link"; 
import { ArrowLeft } from "lucide-react"; 

type Aluno = {
  id: number;
  nome: string;
  idade: number;
  turma: string;
  curso: string;
  bilhete: string;
};

export default function AlunosPage() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number | "">(""); // Iniciar vazio para o placeholder aparecer
  const [turma, setTurma] = useState("");
  const[curso, setCurso] = useState("");
  const[bilhete, setBilhete] = useState("");
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !idade) return; 
    const novoAluno: Aluno = {
      id: Date.now(),
      nome: nome,
      idade: new Date().getFullYear() - Number(idade), 
      turma: turma,
      curso: curso,
      bilhete: bilhete,
    };

    setAlunos([...alunos, novoAluno]);
    
    
    setNome("");
    setIdade("");
    setTurma("");
    setCurso("");
    setBilhete("");
  };

  return (
    <div className="flex min-h-screen w-full bg-zinc-50 text-black p-6">
      <div className="max-w-2xl w-full mx-auto">
        
        
        <Link href="../alunos" className="flex items-center gap-2 text-gray-500 hover:text-[#1B4F98] mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Voltar para a lista de Alunos</span>
        </Link>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">Cadastro de Alunos</h1> 
          
          <form className="flex flex-col gap-5" onSubmit={handleClick}>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Nome do Aluno</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: João Silva"
                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Idade</label>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0"
                  className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Turma</label>
                <input
                  type="text"
                  value={turma}
                  onChange={(e) => setTurma(e.target.value)}
                  placeholder="Ex: 10ª A"
                  className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Curso</label>
                <select name="" id="" value={curso} onChange={(e) => setCurso(e.target.value)} className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="">Selecione um curso</option>
                  <option value="Informática">Informática</option>
                  <option value="Administração">Administração</option>
                  <option value="Economia">Economia</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Nº do B.I</label>
                <input
                  type="text"
                  value={bilhete}
                  onChange={(e) => setBilhete(e.target.value)}
                  placeholder="Ex: 1234567890"
                  className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="bg-[#1B4F98] text-white p-3 rounded-lg font-bold hover:bg-[#153e77] transition-all mt-2 shadow-md"
            >
              Adicionar Aluno
            </button>
          </form>
        </div>
      </div>
    </div>  
  );
}