"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dados de exemplo (Frequência em %)
const dadosFrequencia = [
  { nome: 'Set', freq: 15 },
  { nome: 'Out', freq: 88 },
  { nome: 'Nov', freq: 92 },
  { nome: 'Dez', freq: 80 },
];

export default function Grafico() {
  return (
    
      
     <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:col-span-2">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800">Taxa de Frequência</h2>
          <p className="text-sm text-gray-500">Média Mensal de Presença</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dadosFrequencia}>
              <defs>
                <linearGradient id="colorFreq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#24354C" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#24354C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="nome" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 12}}
                dy={10}
              />
              <YAxis 
                hide={true} 
                domain={[0, 100]} 
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="freq" 
                stroke="#24354C" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorFreq)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        </div>
         
      
)};