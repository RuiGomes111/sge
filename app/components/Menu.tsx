"use client"; 
import {Icons} from"../constants/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function Menu() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // Memorizamos a lista para não recriar o array em todo render
  const menuItems = useMemo(() => [
    { href: "/dashboard/admin", icon: <Icons.Dashboard />, label: "Dashboard" },
    { href: "/alunos", icon: <Icons.Alunos />, label: "Alunos" },
    { href: "/professores", icon: <Icons.Professores />, label: "Professores" },
    { href: "/turmas", icon: <Icons.Turmas />, label: "Turmas" },
    { href: "/cursos", icon: <Icons.Cursos />, label: "Cursos" },
    { href: "/calendario", icon: <Icons.Calendario />, label: "Horários" },
    { href: "/mensagens", icon: <Icons.Mensagens />, label: "Comunicação" },
  ], []);

  return (
    <aside 
      className={`bg-[#24354C] h-screen p-4 text-white shadow-xl relative
        transition-[width] duration-300 ease-in-out will-change-[width]
        ${isCollapsed ? "w-20" : "w-64"}`}
    >
      <header className="flex items-center gap-2 border-b border-gray-600 pb-4 mb-6 h-12 overflow-hidden">
        <Link href={"/"} className="shrink-0">
           <Icons.Professores className="text-3xl text-[#24354C] bg-white rounded p-1" />
        </Link>
        {!isCollapsed && (
          <Link href={"/"} className="text-2xl font-bold tracking-tight whitespace-nowrap opacity-100 transition-opacity duration-300">
            TechSchool
          </Link>
        )}
      </header>

      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 group
                    ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/10"}`}
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  {!isCollapsed && (
                    <span className="font-medium whitespace-nowrap transition-opacity duration-200">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button 
  onClick={() => setIsCollapsed(!isCollapsed)}
  className={`absolute bottom-6 flex items-center transition-all duration-300 hover:bg-white/10 rounded-lg
    ${isCollapsed 
      ? "left-1/2 -translate-x-1/2 w-10 h-10 justify-center" 
      : "left-4 right-4 px-3 py-2 justify-start gap-3"
    }`}
>
  <span className="shrink-0">
    {isCollapsed ? <Icons.MenuOpen size={24} /> : <Icons.MenuClose size={24} />}
  </span>
  
  {!isCollapsed && (
    <span className="text-sm font-medium whitespace-nowrap animate-fadeIn">
      Recolher
    </span>
  )}
</button>
    </aside>
  );
}