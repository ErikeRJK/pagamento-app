export default function CustomInput() {
  return (
    <div className="space-y-2 flex flex-col">
      <label htmlFor="cardNumber" className="text-sm text-[#121721]">
        Número do cartão
      </label>
      <input
        type="text"
        id="cardNumber"
        placeholder="0000 0000 0000 0000"
        className="h-12 font-mono w-[50%] text-base bg-white 
                    border border-[#e5e7eb] rounded-md py-2 px-3 
                    outline-none "
      />
    </div>
  );
}
