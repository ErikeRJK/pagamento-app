import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "./CustomInput";
import { BiLock, BiShield } from "react-icons/bi";
import CustomButton from "./CustomButton";
import { LuLock } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";



export default function PaymentForm(){
   const icons = [
    {
        icon: <LuLock />,
        text: "SSL 256-bit"
    },
    {
        icon: <GoShieldCheck />,
        text: "PCI Compliant"
    },
    {
        icon: <IoFlashOutline />,
        text: "Instantâneo"
    }
   ]

    return (
        <form className="space-y-6">
            <CustomInput
                label = "Número do cartão" 
                type = "text"
                placeholder = "0000 0000 0000 0000"
                icon = {<CiCreditCard1 />}
            />
            <CustomInput
                label = "Nome do titular"
                type = "text" 
                placeholder = "COMO APARECE NO CARTÃO"
            />

            <div className="grid grid-cols-2 gap-4">
                <CustomInput
                    label = "Validade"
                    type = "text"
                    placeholder="MM/AA"
                />

                <CustomInput
                    label = "CVV"
                    type = "text"
                    placeholder="•••"
                    rightIcon = {<BiLock />}
                />
            </div>

            <CustomButton>
                <BiLock />
                Pagar agora
            </CustomButton>
            
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <BiShield className="w-4 h-4"/>
                <span>Pagamento 100% seguro e criptografado</span>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-6">
                <div className="grid grid-cols-3 gap-4">
                    {icons.map((item) => {
                        return (
                            <div className="flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-[#2a6df4]/10 flex items-center justify-center text-[#2a6df4] mb-2">
                                    {item.icon}
                                </div>
                                <span className="text-xs text-gray-400">
                                    {item.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>
    )
}