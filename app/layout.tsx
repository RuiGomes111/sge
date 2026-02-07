import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        {/* O container flex que segura tudo */}
        <div className="flex h-screen w-full bg-zinc-50 overflow-hidden">
          
          {/* Menu Lateral Fixo */}
          <Menu />

          <div className="flex flex-col flex-1 min-w-0">
            {/* Navbar no topo de todas as páginas */}
            <Navbar />

            {/* O 'children' é o conteúdo de cada pasta/page.tsx */}
            <main className="flex-1 overflow-y-auto p-6 min-w-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}