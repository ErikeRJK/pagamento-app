import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft, LuEye } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import requestApi from "../../helpers/requestApi";
import { toast } from "react-toastify";
import CreditCard from "../../components/CreditCard";
import { formatCardNumber } from "../../helpers/formatCard";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function getCards(){
      try {
        const response = await requestApi({
        url: "/creditcards",
        method: "GET"
      })
      toast.success("Cartões encontrados")
      setCards(response.data)
      } catch (error) {
        console.error(error)
        toast.error("Erro ao buscar cartões")
      }
    }
    getCards()
  }, [])

  return (
    <div className="min-h-screen bg-[#f0f4fa] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#B447EB] hover:text-white">
                <LuArrowLeft size={20} />
              </button>
            </Link>

            <div>
              <h1 className="text-3xl font-bold text-[#121721] flex items-center gap-2">
                <CiCreditCard1 size={40} color="#2a6df4" />
                Meus Cartões
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {cards.length} Cartões cadastrados
              </p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="w-auto px-4 h-[45px] bg-[#2a6df4] rounded-lg text-white flex items-center justify-center gap-2">
              <CiCreditCard1 size={24} />
              Adicionar Cartão
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cards.map((card) => {
            return(
              <div key={card._id} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#e2e4e980] hover:border-[#2a6df4]/30 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg">
                <CreditCard 
                  name={card.name}
                  number={formatCardNumber(card.number)}
                  cvv={card.cvv}
                  expiration={card.expiration}
                />

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">Clique para ver mais detalhes </p>
                  <button 
                    onClick={() => navigate(`/card/${card._id}`)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#2a6df4]/10"
                  >
                    <LuEye size={20}/>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="CARDS"></div>
      </div>
    </div>
  );
}
