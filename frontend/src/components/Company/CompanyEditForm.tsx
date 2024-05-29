/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form"

type CompanyForm = {
    name: string;
    cuit: number;
    webSite: string;
    city: string;
    country: string;
    address: string;
    phone: string;
    email: string;
    sector: string;
};

export const CompanyForm = qwikify$(() => {
    const { handleSubmit, register, formState: { errors }, } = useForm<CompanyForm>()
    const [isLoading, setIsLoading] = useState(false)
    const [messageRes, setMessageRes] = useState("")
    const onSubmit: SubmitHandler<CompanyForm> = async (data) => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/company', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            const message = await response.json()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="grid grid-rows-1 gap-3"
        >
            <p className="text-center font-semibold text-[#f00]">
                {messageRes}
            </p>
            <label className="ounded-xl border border-primary px-3 py-1">
                <p className="text-xs text-primary"> Nombre </p>
                <input
                    className="w-full outline-none"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "El Nombre es obligatorio",
                        },
                    })}
                />
                <p className="h-4 text-xs text-primary900">
                    {" "}
                    {errors.name?.message}
                </p>
            </label>

        </form>
    )
},
    { eagerness: "load" }
)

