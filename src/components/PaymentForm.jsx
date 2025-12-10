import { CiCreditCard1 } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import CustomInput from "./customInput";
import CustomButton from "./CustomButton";

export default function PaymentForm() {
  return (
    <form className="space-y-6">
      <CustomInput
        label="Número do cartão"
        type="text"
        placeholder="0000 0000 0000 0000"
        icon={<CiCreditCard1 />}
      />

      <CustomInput
        label="Nome do titular"
        type="text"
        placeholder="Nome do títular do cartão"
      />

      <div className="grid grid-cols-2 gap-4">
        <CustomInput label="Validade" type="text" placeholder="MM/AA" />

        <CustomInput
          label="CVV"
          type="text"
          placeholder="•••"
          rightIcon={<BiLock />}
        />
      </div>
      <CustomButton>
        Pagar Agora
      </CustomButton>
    </form>
  );
}
