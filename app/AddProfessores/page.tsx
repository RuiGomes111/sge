"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { criarProfessor } from "../actions/professorActions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#1B4F98] text-white p-3 rounded-lg font-bold hover:bg-[#153e77] disabled:opacity-50 flex justify-center items-center gap-2 shadow-md transition-all active:scale-95"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" size={20} /> Guardando...
        </>
      ) : (
        "Adicionar Professor"
      )}
    </button>
  );
}

export default function AddProfessores() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await criarProfessor(formData);

    if (result?.success) {
      formRef.current?.reset();
      alert("Professor cadastrado com sucesso! Pode inserir o próximo.");
    } else if (result?.error) {
      alert(result.error);
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-zinc-50 text-black p-6">
      <div className="max-w-2xl w-full mx-auto">
        <Link
          href="/professores"
          className="flex items-center gap-2 text-gray-500 hover:text-[#1B4F98] mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> <span>Voltar para a lista</span>
        </Link>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">
            Cadastro de Professor
          </h1>

          <form ref={formRef} action={handleAction} className="flex flex-col gap-5">
            {/* NOME */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">*Nome do Professor</label>
              <input
                name="nome"
                type="text"
                required
                placeholder="Ex: João Silva"
                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">*Email Institucional</label>
              <input
                name="email"
                type="email"
                required
                placeholder="professor@escola.com"
                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* BILHETE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Nº do B.I</label>
                <input
                  name="bilhete"
                  type="text"
                  placeholder="001234567LA041"
                  className="border border-gray-300 p-2.5 rounded-lg outline-none"
                />
              </div>

              {/* IDADE (Data de Nascimento para calcular) */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Data de Nascimento</label>
                <input
                  name="dataNascimento"
                  type="date"
                  className="border border-gray-300 p-2.5 rounded-lg outline-none uppercase text-xs"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Senha de Acesso (opcional)</label>
              <input
                name="password"
                type="password"
                placeholder="Padrão: 123456"
                className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}