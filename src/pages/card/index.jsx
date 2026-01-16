import { useEffect, useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { fakeRequestApi } from "../../helpers/fakeRequestApi";
import { toast } from "react-toastify";
import { CiCreditCard1 } from "react-icons/ci";
import maskedNumber from "../../helpers/maskedNumber";
import CreditCard from "../../components/CreditCard";

export default function Card() {
  const navigate = useNavigate();

  const [card, setCard] = useState([]);

  useEffect(() => {
    async function getCard() {
      try {
        const response = await fakeRequestApi({
          url: "/creditcards/1",
          method: "GET",
        });

        setCard(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao buscar cartão");
      }
    }
    getCard();
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4fa] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/cards")}
            className="w-10 h-10 rounded-full flex items-center 
                        justify-center hover: bg-[#B447EB] hover:text-white"
          >
            <LuArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <CiCreditCard1 size={40} color="#2a6df4" />
              Detalhes do cartão
            </h1>
            <p className="text-gray-500 text-sm mt-1">{maskedNumber(card?.number || "1000 0000 0000 0001")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
                <CreditCard 
                    name={card?.name}
                    number={maskedNumber(card?.number)}
                    expiration={card?.expiration}
                    cvv={card?.cvv}
                />
            </div>
        </div>

      </div>
    </div>
  );
}
