import { Suspense } from "react";
import Cards from "./cards";
import Grafico from "./grafico";
import Eventos from "./eventos";

// Um esqueleto simples para o loading
const Skeleton = () => (
  <div className="h-40 w-full animate-pulse rounded-lg bg-gray-100" />
);

export default function DashboardPage() {
  return (
    <div>
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Usamos Suspense para que os Cards apareçam mal o count() termine */}
        <Suspense fallback={<Skeleton />}>
          <Cards />
        </Suspense>
      </section>

      <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* O Gráfico costuma ser o mais lento. Com Suspense, ele não trava a página */}
        <Suspense fallback={<Skeleton />}>
          <Grafico />
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <Eventos />
        </Suspense>
      </section>
    </div>
  );
}