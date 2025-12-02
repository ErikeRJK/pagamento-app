import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function App(){
  return(
    <div className="w-full min-h-screen bg-[#F0F4FA]">
      <div className="flex w-full min-h-screen">
        <div className="w-[50%] p-16 flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a6df4]/10 text-[#2a6df4] text-sm font-medium mb-4"> <IoShieldCheckmarkOutline/> Pagamento seguro </div>
            <h1 className="text-4xl font-bold text-[#121721] mb-2"> Finalize seu pagamento </h1>
            <p className="text-[#737b8c]">Insira os dados do seu cartão virtual para completar a compra</p>
          </div>
        </div>
      </div>
    </div>
  )
}