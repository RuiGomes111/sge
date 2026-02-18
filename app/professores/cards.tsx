"use client";

import { Icons } from "../constants/icons";
import Link from "next/link";
import { useState } from "react";


export default function ProfessoresCards({ initialProfessores }: { initialProfessores: any[] }) {
  const [search, setSearch]= useState("")
  

  const cardStyle =
    "bg-white p-6 rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow flex flex-col relative";
  const cardIconStyle =
    "text-3xl p-2 bg-[#DDE5F0] text-[#0c3e8a] rounded absolute top-4 right-4";

  const professoresFiltrados = initialProfessores.filter((professor) =>
  (professor.bilhete?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
  (professor.user?.name?.toLowerCase().includes(search.toLowerCase()) ?? false)
);


  

  return (
    <div className="p-4 md:p-0">
      {/* Barra de Pesquisa */}
      <div className="flex flex-col sm:flex-row mb-8 gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full flex-1">
          <input
            type="text"
            placeholder="Buscar pelo nome ou o BI do professor..."
            value={search}            
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
          />
          <Link
            href="/AddProfessores"
            className="flex items-center justify-center gap-2 bg-[#1B4F98] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#153e77] transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span>+ Novo Professor</span>
          </Link>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {professoresFiltrados.map((professor) => (
          <div key={professor.id} className={cardStyle}>
            <Icons.Professores className={cardIconStyle} />
            <div className="mt-4">
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Nome</p>
              <p className="text-lg font-bold text-slate-800 mb-2">
                {professor.user?.name || "Professor sem nome"}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {professor.professorDisciplinas?.length > 0 ? (
                  professor.professorDisciplinas.map((pd: any) => (
                    <span key={pd.disciplina.id} className="text-[10px] bg-[#DDE5F0] text-[#1B4F98] font-bold px-2 py-0.5 rounded uppercase">
                      {pd.disciplina.nome}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded uppercase">
                    Sem disciplinas
                  </span>
                )}
              </div>
              
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Email institucional</p>
              <p className="text-sm text-blue-600 truncate font-medium">
                {professor.user?.email}
              </p>
              <p>Bilhete: {professor.bilhete}</p>
              <span>Idade: {professor.idade}</span>
            </div>
            
            {/* Link para Editar */}
            <Link 
              href={`/professores/editar/${professor.id}`}
              className="mt-4 text-xs font-bold text-gray-400 hover:text-[#1B4F98] transition-colors border-t pt-3 flex items-center justify-between"
            >
              EDITAR PERFIL <span>→</span>
            </Link>
          </div>
        ))}
      </div>

      {initialProfessores.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 mt-4">
          <p className="text-gray-400 italic">Nenhum professor encontrado com esse nome.</p>
        </div>
      )}
    </div>
  );
}