import { Icons } from "../../constants/icons";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { prisma } from "../../lib/prisma";
const TrendBadge = ({ value, isUp }: { value: number; isUp: boolean }) => {
  return (
    <div
      className={`flex items-center gap-1 text-sm font-medium ${
        isUp ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
      } px-2 py-1 rounded-full`}
    >
      {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span>{value}%</span>
    </div>
  );
};
export default async function Cards() {
    const cardStyle =
    "bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow flex flex-col relative p-10";
  const cardIconStyle =
    "text-4xl p-2 bg-[#DDE5F0] text-[#0c3e8a] rounded absolute top-4 right-4";

    const alunos = await prisma.aluno.findMany({
        orderBy: { createdAt: 'desc' }
      });

      const porcentual = (alunos.length / 500) * 100;      
      const taxa= porcentual > 250? <TrendBadge value={porcentual} isUp={true}/>: <TrendBadge value={porcentual} isUp={false}/>
      
    return (
        <>
            <div className={cardStyle}>
          <p className="text-gray-500">Total de Alunos</p>
          <p className="text-2xl font-bold">{alunos.length}</p>
          <Icons.Alunos className={cardIconStyle} />
          {taxa}
        </div>
        <div className={cardStyle}>
          <p className="text-gray-500">Total de Professores</p>
          <p className="text-2xl font-bold">20</p>
          <Icons.Professores className={cardIconStyle} />
          <TrendBadge value={-5} isUp={false} />
        </div>
        <div className={cardStyle}>
          <p className="text-gray-500">Turmas Ativas</p>
          <p className="text-2xl font-bold">10</p>
          <Icons.Turmas className={cardIconStyle} />
          <TrendBadge value={8} isUp={true} />
        </div>
        <div className={cardStyle}>
          <p className="text-gray-500">Cursos Disponíveis</p>
          <p className="text-2xl font-bold">5</p>
          <Icons.Cursos className={cardIconStyle} />
          <TrendBadge value={-2} isUp={false} />
        </div>
        <div className={cardStyle}>
          <p className="text-gray-500">Taxa de Frequência</p>
          <p className="text-2xl font-bold">5</p>
          <Icons.Cursos className={cardIconStyle} />
          <TrendBadge value={-2} isUp={false} />
        </div>
        </>
    )
}