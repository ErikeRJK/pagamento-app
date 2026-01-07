import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "./CustomInput";
import { BiLock, BiShield } from "react-icons/bi";
import CustomButton from "./CustomButton";
import { LuLock } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";

export default function PaymentForm({
  handlePay,
  setName,
  setNumber,
  setExpiration,
  setCvv,
  name,
  number,
  expiration,
  cvv,
}) {
  const icons = [
    {
      icon: <LuLock />,
      text: "SSL 256-bit",
    },
    {
      icon: <GoShieldCheck />,
      text: "PCI Compliant",
    },
    {
      icon: <IoFlashOutline />,
      text: "Instantâneo",
    },
  ];

  function formatNumber(value) {
    const format = value
      .replace(/\D/g, "") //remove todos os caracteres não numéricos
      .slice(0, 16) //limita a 16 caracteres
      .replace(/(.{4})/g, "$1 ") //separa em grupos de 4 caracteres
      .trim();

    setNumber(format);
  }

  function formatExpiration(event) {
    const value = event.target.value.replace(/\//g, "");

    if (value.length > 4) return;

    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    if (v.length > 2) {
      setExpiration(v.substring(0, 2) + "/" + v.substring(2, 4));
      return;
    }

    setExpiration(v);
  }

  function formatCvv(event){
    const value = event.target.value.replace(/\D/g, "")

    if(value.length > 3) return;

    setCvv(value)
  }

  return (
    <form className="space-y-6">
      <CustomInput
        value={number}
        onChange={(event) => formatNumber(event.target.value)}
        label="Número do cartão"
        type="text"
        placeholder="0000 0000 0000 0000"
        icon={<CiCreditCard1 />}
      />
      <CustomInput
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Nome do titular"
        type="text"
        placeholder="Nome do títular do cartão"
      />

      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          value={expiration}
          onChange={formatExpiration}
          label="Validade"
          type="text"
          placeholder="MM/AA"
        />

        <CustomInput
          value={cvv}
          onChange={formatCvv}
          label="CVV"
          type="text"
          placeholder="•••"
          rightIcon={<BiLock />}
        />
      </div>

      <CustomButton onClick={handlePay}>
        <BiLock />
        Pagar agora
      </CustomButton>

      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <BiShield className="w-4 h-4" />
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
                <span className="text-xs text-gray-400">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
