import DashboardPage from "./dashboard/admin/page";

export default function Home() {
  return (
    <>
      <head>
        <title>SGE - Sistema de Gestão Escolar</title>
        <meta name="description" content="SGE - Sistema de Gestão Escolar" />
        <meta
          name="keywords"
          content="gestão escolar, SGE, alunos, professores, administração"
        />
        <meta name="author" content="Rui Gomes" />

        <meta property="og:title" content="SGE - Sistema de Gestão Escolar" />
        <meta
          property="og:description"
          content="Organize e gerencie sua escola de forma simples e eficiente."
        />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/beca.svg" type="image/x-icon" />
        <meta property="og:url" content="https://meusite.com" />
      </head>
      <DashboardPage />
    </>
  );
}
