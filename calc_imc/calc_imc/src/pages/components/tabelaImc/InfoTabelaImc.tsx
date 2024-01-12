import TableProps from "@/interfaces/TableProps";

export default function InfoTabelaImc({ imc }: TableProps) {
    return (
        <div className="m-2">
            <table className="border border-gray-600 shadow p-1 w-full">
                <thead>
                    <tr className="text-center bg-gray-200 border-b border-gray-600">
                        <th className="border-r border-gray-600">Classificacao</th>
                        <th>I.M.C</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={"text-center border-b border-gray-600 " + (imc < 18.5 && imc != 0 && "text-white bg-indigo-500")}>
                        <td className="border-r border-gray-600">Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>

                    <tr className={"text-center border-b border-gray-600" + (imc >= 18.5 && imc < 25 && "text-white bg-indigo-500")}>
                        <td className="border-r border-gray-600">Peso Normal</td>
                        <td>Entre 18,5 e 24,9</td>
                    </tr>

                    <tr className={"text-center border-b border-gray-600" + (imc >= 25 && imc < 30 && "text-white bg-indigo-500")}>
                        <td className="border-r border-gray-600">Sobrepeso</td>
                        <td>Entre 25 e 29,9</td>
                    </tr>

                    <tr className={"text-center border-b border-gray-600" + (imc >= 30 && imc < 35 && "text-white bg-indigo-500")}>
                        <td className="border-r border-gray-600">Obsidade Grau I</td>
                        <td>Entre 30 e 34,9</td>
                    </tr>

                    <tr className={"text-center border-b border-gray-600" + (imc >= 35 && imc < 40 && "text-white bg-indigo-500")}>
                        <td className="border-r border-gray-600">Obsidade Grau II</td>
                        <td>Entre 35 e 39,9</td>
                    </tr>

                    <tr className={"text-center" + (imc >= 40 && "text-white bg-blue-600")}>
                        <td className="border-r border-gray-600">Obsidade Grau III</td>
                        <td>Maior que 40</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};
