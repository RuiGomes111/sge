import { prisma } from "../../../lib/prisma";
import { editarProfessor } from "../../../actions/professorActions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";



export default async function EditarProfessor({params}:{params: Promise<{id: string}>;}){
    const resolvedParams= await params;
    const id= resolvedParams.id

    const professor= await prisma.professor.findUnique({
        where: {id},
        include: {user: true},
    });


    if(!professor)
        return(
            <div className="p-10 text-center text-red-500 font-bold">Professor Não Encontrado</div>
    );

    return(
        <div className="flex min-h-screen w-full bg-zinc-50 p-6">
            <div className="max-w-2xl w-full mx-auto">
                <Link
                    href="/professores"
                    className="flex items-center gap-2 text-gray-500 hover:text-[#1B4F98] mb-8 transition-colors">
                    <ArrowLeft size={20} /> <span>Voltar para a lista</span>
                </Link>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h1 className="text-2xl font-bold mb-6 text-slate-800">
                        Editar Professor
                    </h1>

                    <form action={editarProfessor} className="flex flex-col gap-5">
                             
                        <input type="hidden" name="id" value={professor.id} />
                         <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Nome Completo
                            </label>
                            <input
                                name="nome"
                                type="text"
                                defaultValue={professor.user?.name || " "}
                                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                name="email"
                                type="text"
                                defaultValue={professor.user?.email || " "}
                                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Bilhete
                            </label>
                            <input
                                name="bilhete"
                                type="text"
                                defaultValue={professor.bilhete || " "}
                                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Data de Nascimento
                            </label>
                            <input
                                name="idade"
                                type="date"
                                required
                                defaultValue={professor.idade || " "}
                                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md mt-4"
                            >
                            Salvar Alterações
            </button>
                    </form>

          </div>

            </div>
        </div>
    )
}