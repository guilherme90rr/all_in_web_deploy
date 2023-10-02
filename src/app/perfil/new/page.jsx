"use client"

import { create } from "@/actions/perfil";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormPerfil() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/perfil")
    }

    return (
        <>
            <NavBar active="perfil" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Conta</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="saldo_inicial" id="saldoInicial" label="saldo inicial" type="number" inputmode="decimal" />
                    <InputText name="icone" id="icone" label="ícone" />

                    <div className="flex justify-around mt-4">
                        <Button href="/perfil" variant="secundary">
                            cancelar
                        </Button>
                        <Button element="button">
                            salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}