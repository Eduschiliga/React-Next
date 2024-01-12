import FormProps from "@/interfaces/FormProps";

export default function CompForm({ label, state, funcState, id }: FormProps & { id: string }) {
    return (
        <div className="flex flex-col mx-2 gap-1 items-start justify-center">
            <label htmlFor={id} className="font-bold">{label}</label>
            <input name={id} id={id} onChange={(evt) => {funcState(evt.target.value)}} type="number" className="border p-1 w-full rounded-md shadow" placeholder="0.00"></input>
        </div>
    );
};
