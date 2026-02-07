"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();

  // Memoriza os títulos para evitar re-processamento de strings
  const currentTitle = useMemo(() => {
    const routeNames = {
      "/dashboard": "Dashboard",
      "/alunos": "Gestão de Alunos",
      "/professores": "Corpo Docente",
      "/turmas": "Minhas Turmas",
      "/cursos": "Cursos Ativos",
      "/calendario": "Horários",
      "/mensagens": "Comunicação",
    };
    return routeNames[pathname] || "TechSchool";
  }, [pathname]);

  return (
    <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 md:px-8 shrink-0 dark:bg-zinc-900 dark:border-zinc-800 transition-colors duration-200">
      
      {/* LADO ESQUERDO: Título fixo com min-width para evitar que o texto 'pule' */}
      <div className="flex items-center gap-4 min-w-37.5">
        <button className="md:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors">
          <HiMenuAlt3 className="text-2xl text-zinc-600" />
        </button>
        <h2 className="text-lg md:text-xl font-bold text-[#24354C] dark:text-white truncate">
          {currentTitle}
        </h2>
      </div>

      {/* LADO DIREITO: Elementos com shrink-0 para não sofrerem deformação */}
      <div className="flex items-center gap-3 md:gap-6 shrink-0">
        
        {/* Busca: Usando container fixo para evitar redimensionamento do input */}
        <div className="relative hidden lg:block w-48 xl:w-80">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            className="w-full pl-10 pr-4 py-2 bg-zinc-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:bg-zinc-800 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="relative p-2 text-zinc-500 hover:bg-zinc-50 rounded-full transition-transform active:scale-95">
            <IoNotificationsOutline className="text-2xl" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="hidden sm:block h-8 w-[px] bg-zinc-200 dark:bg-zinc-700"></div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-gray-800 dark:text-zinc-200">Admin Tech</p>
              <p className="text-[11px] text-gray-500">Administrador</p>
            </div>
            {/* Avatar com tamanho fixo e will-change para suavidade */}
            <div className="w-10 h-10 bg-[#24354C] rounded-full flex items-center justify-center text-white font-bold cursor-pointer will-change-transform hover:brightness-110 shadow-sm shrink-0">
              AT
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}