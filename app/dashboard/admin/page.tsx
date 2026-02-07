import Cards from "./cards";
import Grafico from "./grafico";
import Eventos from "./eventos";

export default function DashboardPage() {
  return (
    <div>
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cards de Métricas */}
        <Cards />
      </section>
      <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card Taxa de Frequência */}
        <Grafico />
        {/* Card Eventos */}
        <Eventos />
      </section>
    </div>
  );
}
