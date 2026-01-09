import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";

export default function Cards() {
  return (
    <div className="min-h-screen bg-[#f0f4fa] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#B447EB] hover:text-white">
                    <LuArrowLeft size={20}/>
                </button>
            </Link>

            <div>
                <h1 className="text-3xl font-bold text-[#121721] flex items-center gap-2">
                    <CiCreditCard1 size={40} color="#2a6df4" />
                    Meus Cartões
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                   2 Cartões cadastrados
                </p>
            </div>

          </div>
        </div>

        <div className="CARDS"></div>
      </div>

    </div>
  );
}
