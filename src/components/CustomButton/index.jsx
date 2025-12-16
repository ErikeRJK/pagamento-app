export default function CustomButton ({ children}) {
    return (
       <button className="w-full h-14 bg-[#2a6df4] text-white font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            {children}
       </button>
    );
}