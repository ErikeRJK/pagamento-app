import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CreditCard(){
    const [isFlipped, setIsFlipped] = useState(false)
    //const [Variavél, função] = useState(condição inicial da variavel)
    return (
        <div className="w-full max-w-[450px] h-[270px] mx-auto cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-700 transform-3d ${isFlipped && "rotate-y-180"}`}>
                <div className="absolute w-full h-full backface-hidden">
                    <div className="w-full h-full bg-linear-to-br from-[#2a6df4] to-[#a532e8] rounded-2xl
                      p-6 flex flex-col overflow-hidden relative justify-between">
                        <div className="flex justify-between items-center relative z-10">
                            <FcSimCardChip size={62} />
                            <LuNfc size={30} color="white"/>
                        </div>
                        
                        <div className="relative z-10">
                            <p className="font-mono text-[28px] text-white whitespace-nowrap">
                                •••• •••• •••• ••••
                            </p>
                        </div>

                        <div className="flex justify-between items-end relative z-10">
                            <div className="">
                                <p className="text-[10px] uppercase mb-1 text-[#b3bbcc]">Titular do cartão</p>
                                <p className="font-medium text-sm text-white uppercase truncate max-w-[200px]">Jorge Renan</p>
                            </div>
                            
                            <div className="text-right">
                                <p className="text-[10px] uppercase mb-1 text-[#b3bbcc]">Validade</p>
                                <p className="font-mono text-sm text-white">MM/AA</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                        <div className="w-full h-10 bg-black mt-5"></div>

                        <div className="px-6 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-10 bg-slate-200 rounded-md flex items-center justify-end px-4">
                                    <span className="text-slate-800 text-lg font-mono">•••</span>
                                </div>
                                <p className="text-[10px] text-[#b3bbcc]">CVV</p>
                            </div>
                        </div>

                        <div className="px-6 mt-8">
                            <p className="text-[9px] text-[#b3bbcc] leading-relaxed">
                                Este cartão é propriedade do emissor e pode ser cancelado a qualquer momento. 
                                Se encontrado, por favor retorne ao banco emissor mais próximo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}