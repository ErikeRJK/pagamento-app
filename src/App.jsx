import { GoShieldCheck } from "react-icons/go";
import PaymentForm from "./components/PaymentForm";
import CreditCard from "./components/CreditCard";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  function handlePay(event) {
    event.preventDefault();
    const cleanNumber = number.replace(/\s+/g, "")

    if (!name || !cleanNumber || !expiration || !cvv) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (expiration.length !== 5){
      toast.error("Campo validade está inválido");
      return;
    }

    if (cleanNumber.length !== 16){
      toast.error("Número do cartão inválido");
      return;
    }

    if (cvv.length < 3 || cvv.length > 3){
      toast.error("O campo CVV deve conter exatamente os 3 dígitos do seu cartão");
      return;
    }

    // try {
    //   axios.post()
    // } catch (error) {
      
    // }

    toast.success("Pagamento realizado !");

    setName("")
    setNumber("")
    setExpiration("")
    setCvv("")
  }

  return (
    <div className="w-full min-h-screen bg-[#f0f4fa]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        pauseOnHover
        hideProgressBar
        closeOnClick
      />
      <div className="flex w-full min-h-screen">
        <div className="w-[50%] p-16 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a6df4]/10 text-[#2a6df4] text-sm mb-4">
                <GoShieldCheck />
                Pagamento seguro
              </div>

              <h1 className="text-4xl font-bold text-[#121721] mb-2">
                Finalize seu pagamento
              </h1>

              <p className="text-[#737b8c]">
                Insira os dados do seu cartão para completar a compra
              </p>
            </div>

            <PaymentForm
              handlePay={handlePay}
              setName={setName}
              setNumber={setNumber}
              setExpiration={setExpiration}
              setCvv={setCvv}
              name={name}
              number={number}
              expiration={expiration}
              cvv={cvv}
            />
          </div>
        </div>

        <div className="w-[50%] flex items-center justify-center p-12 bg-[#0f131c]">
          <div className="w-full max-w-lg">
            <CreditCard 
              name={name}
              number={number}
              expiration={expiration}
              cvv={cvv}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
