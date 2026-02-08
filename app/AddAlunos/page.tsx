// src/app/AddAlunos/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { criarAluno } from "../actions/alunoActions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-[#1B4F98] text-white p-3 rounded-lg font-bold hover:bg-[#153e77] disabled:opacity-50 flex justify-center items-center gap-2 shadow-md">
      {pending ? <><Loader2 className="animate-spin" size={20}/> Guardando...</> : "Adicionar Aluno"}
    </button>
  );
}

export default function AddAlunosPage() {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50 text-black p-6">
      <div className="max-w-2xl w-full mx-auto">
        <Link href="/alunos" className="flex items-center gap-2 text-gray-500 hover:text-[#1B4F98] mb-8 transition-colors">
          <ArrowLeft size={20} /> <span>Voltar para a lista</span>
        </Link>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">Cadastro de Alunos</h1> 
          
          <form action={criarAluno} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Nome do Aluno</label>
              <input name="nome" type="text" required placeholder="Ex: João Silva" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Idade</label>
                <input name="idade" type="number" required placeholder="Ex: 20" className="border border-gray-300 p-2.5 rounded-lg outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Turma</label>
                <input name="turma" type="text" required placeholder="Ex: 10ª A" className="border border-gray-300 p-2.5 rounded-lg outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Curso</label>
                <select name="curso" required className="border border-gray-300 p-2.5 rounded-lg outline-none bg-white">
                  <option value="">Selecione um curso</option>
                  <option value="Informática">Informática</option>
                  <option value="Administração">Administração</option>
                  <option value="Economia">Economia</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Nº do B.I</label>
                <input name="bilhete" type="text" required placeholder="Ex: 001234567LA041" className="border border-gray-300 p-2.5 rounded-lg outline-none" />
              </div>
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}