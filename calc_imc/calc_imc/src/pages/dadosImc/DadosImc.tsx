import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const dadosImc = () => {
    const [peso, setPeso] = useState<any>("");
    const [altura, setAltura] = useState<any>("");
    const [imc, setImc] = useState<any>("");
    const [nome, setNome] = useState<any>("");
    const [data, setData] = useState<any>("");


    const router = useRouter();
    const { p_peso, p_altura, p_imc } = router.query;

    useEffect(() => {
        setPeso(p_peso);
        setAltura(p_altura);
        setImc(p_imc);
        const dataAtual = new Date().toISOString().split('T')[0]; // obtém a data atual no formato 'aaaa-mm-dd'
        setData(dataAtual);
    }, [p_peso, p_altura, p_imc]);
    

    const [todosImc, setTodosImc] = useState<any[]>([]);

    const gravarImc = () => {
        const dataAtual = new Date().toISOString().split('T')[0]; // obtém a data atual no formato 'aaaa-mm-dd'
        setData(dataAtual);
        const novoImc = { nome, peso, altura, imc, data: dataAtual };
        setTodosImc([...todosImc, novoImc]);
        localStorage.setItem('todosImc', JSON.stringify([...todosImc, novoImc]));
    };

    useEffect(() => {
        const imcsSalvos = JSON.parse(localStorage.getItem("todosImc") || "[]");
        setTodosImc(imcsSalvos);
    }, [todosImc]);

    return (
        <div className='grid place-items-center h-screen w-full'>
            
            <section className='flex flex-col gap-5 items-center justify-center shadow rounded-lg p-3'>

                <div className="flex items-center justify-end w-full"> 
                    <button className="bg-blue-600 text-white text-lg p-2 rounded-lg shadow mt-4 hover:bg-blue-500 w-[100px] text-center" onClick={() => window.location.href = '/'}>Voltar</button>
                </div>
            

                <form action="" className="flex flex-col gap-1 items-start justify-center w-[500px]">
                    <label htmlFor="nome" className="font-bold">Nome</label>
                    <input type="text" name="nome" id="nome" className="border p-1 w-full rounded-md shadow" value={nome} onChange={(evt) => setNome(evt.target.value)} />

                    <label htmlFor="peso" className="font-bold">Peso</label>
                    <input type="text" name="peso" id="peso" className="border p-1 w-full rounded-md shadow" value={peso} readOnly />

                    <label htmlFor="altura" className="font-bold">Altura</label>
                    <input type="text" name="altura" id="altura" className="border p-1 w-full rounded-md shadow" value={altura} readOnly />

                    <label htmlFor="imc" className="font-bold">Imc</label>
                    <input type="text" name="imc" id="imc" className="border p-1 w-full rounded-md shadow" value={imc} readOnly />

                    <label htmlFor="data" className="font-bold">Data</label>
                    <input type="text" name="data" id="data" className="border p-1 w-full rounded-md shadow" value={data} readOnly />

                    <button className="bg-indigo-500 text-white text-lg p-1 rounded-lg shadow mt-4 hover:bg-indigo-600 text-center w-full" onClick={gravarImc}>Gravar</button>
                </form>

                <table className="border border-gray-600 shadow p-1 w-[500px]">
                    <thead >
                        <tr className="text-center bg-gray-200 border-b border-gray-600">
                            <th className="border border-gray-600">Nome</th>
                            <th className="border border-gray-600">Peso</th>
                            <th className="border border-gray-600">I.M.C</th>
                            <th className="border border-gray-600">Data</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todosImc.map((imc, index) => (
                            <tr key={index} className='text-center'>
                                <td className="border border-gray-600">{imc.nome}</td>
                                <td className="border border-gray-600">{imc.peso}</td>
                                <td className="border border-gray-600">{imc.altura}</td>
                                <td className="border border-gray-600">{imc.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </div>
    );
};

export default dadosImc;
