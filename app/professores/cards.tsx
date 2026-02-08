import { Icons } from "../constants/icons";
import Link from "next/link";

const professores = [
  { id: 1, nome: "Ana Silva", disciplina: "Matemática", email: "ana.silva@escola.com" },
  { id: 2, nome: "Carlos Oliveira", disciplina: "Física", email: "carlos.oliveira@escola.com" },
  { id: 3, nome: "Mariana Costa", disciplina: "Química", email: "mariana.costa@escola.com" },
];

export default function Cards() {
  const cardStyle =
    "bg-white p-6 rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow flex flex-col relative";
  const cardIconStyle =
    "text-3xl p-2 bg-[#DDE5F0] text-[#0c3e8a] rounded absolute top-4 right-4";

  return (
    <div className="p-4 md:p-0">
      <div className="flex flex-col sm:flex-row mb-8 gap-4 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="flex flex-col sm:flex-row gap-3 w-full flex-1">
            <input
              type="text"
              placeholder="Buscar pelo nome..."
              className="px-4 py-2 w-full border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
            />
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-[#1B4F98] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#153e77] transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <span>+ Novo Professor</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {professores.map((professor) => (
          <div key={professor.id} className={cardStyle}>
            <Icons.Professores className={cardIconStyle} />
            <div className="mt-4">
              <p className="text-gray-500 text-xs">Nome</p>
              <p className="text-lg font-bold text-slate-800">{professor.nome}</p>
              
              <p className="text-sm bg-[#DDE5F0] text-[#1B4F98] font-medium px-2 py-0.5 rounded w-fit my-3">
                {professor.disciplina}
              </p>
              
              <p className="text-gray-500 text-xs">Email</p>
              <p className="text-sm text-blue-600 truncate">{professor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}