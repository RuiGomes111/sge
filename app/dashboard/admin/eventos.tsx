import { Icons } from "../../constants/icons";

export default function Eventos() {
    const atividades = [
        {
          id: 1,
          title: "Reunião de Pais",
          date: "15 Dez",
          time: "18:30h",
          color: "green",
          icon: Icons.Atividades,
        },
        {
          id: 2,
          title: "Workshop de Tecnologia",
          date: "20/09",
          time: "",
          color: "blue",
          icon: Icons.Atividades,
        },
        {
          id: 3,
          title: "Feira de Ciências",
          date: "25/09",
          time: "",
          color: "orange",
          icon: Icons.Atividades,
        },
      ];
  return (
    
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-1">
    <div className="mb-4 text-left border-b border-gray-300 pb-3">
      <h2 className="text-lg font-bold text-slate-800">Eventos</h2>
      <p className="text-sm text-gray-500">Agenda Mensal</p>
    </div>
    
    <ul className="space-y-2">
      {atividades.map((atividade) => (
        <li
          key={atividade.id}
          className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all duration-200 group border  hover:border-gray-100 border-b border-gray-300"
        >
         
          <div className={`p-2.5 rounded-lg shrink-0 transition-transform group-hover:scale-110`} 
               style={{ backgroundColor: `${atividade.color}15` }}> 
            <atividade.icon
              size={20}
              style={{ color: atividade.color }}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-slate-700 leading-none mb-1.5">
              {atividade.title}
            </span>
            
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold">
              
              <span style={{ color: atividade.color }} className="brightness-90">
                {atividade.date}
              </span>
              
              {atividade.time && (
                <>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">{atividade.time}</span>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
    
    
  )}