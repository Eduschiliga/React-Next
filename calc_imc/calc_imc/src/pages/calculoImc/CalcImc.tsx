import { useState } from "react";
import CampForm from "../components/form/CampForm";
import InfoTabelaImc from "../components/tabelaImc/InfoTabelaImc";
import Link from "next/link";

export default function CalcImc() {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [imc, setImc] = useState<number>(0);

    function calcular() {
        setImc(peso / (altura * altura));
    }

    return (
        <div className="flex flex-col shadow-lg rounded-lg w-[350px] gap-5">
            <h1 className="w-full text-center font-bold text-lg text-white bg-blue-600 rounded shadow p-2">Cálculo do I.M.C</h1>

            <CampForm label="Peso" id="peso" state={peso} funcState={setPeso} />
            <CampForm label="Altura" id="altura" state={altura} funcState={setAltura} />

            <button onClick={calcular} className="bg-indigo-500 text-white text-lg p-1 rounded-lg shadow mx-4 hover:bg-indigo-600">Calcular</button>

            <h2 className="font-bold w-full text-center bg-slate-200 p-2 text-slate-800 shadow">Resultado: {imc.toFixed(2)}</h2>

            <InfoTabelaImc imc={imc} />

            <Link className="bg-indigo-500 text-white text-lg p-1 rounded-lg shadow mx-4 mb-2 hover:bg-indigo-600 text-center" href={{
                pathname: "/dadosImc/DadosImc",
                query: {
                    p_peso: peso,
                    p_altura: altura,
                    p_imc: imc,
                }

            }}>Dados</Link>
        </div >
    );
};