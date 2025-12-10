export default function CustomInput({ label, type, placeholder, icon, rightIcon }) {
  const id = label.toLowerCase().trim().replace(/ /g, "-")

  return (
    <div className="space-y-2 flex flex-col">
      <label htmlFor={id} className="text-sm text-[#121721]">
        {label}
      </label>
    
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`h-12 font-mono text-base w-full
                    bg-white border border-[#e5e7eb]
                    rounded-md py-2 px-3 outline-none ${icon && "pl-10"}`}
        />

        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2
           text-[#737b8c] text-2xl">
            {icon}
          </div>
        )}

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2
           text-[#737b8c] text-2xl">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}
