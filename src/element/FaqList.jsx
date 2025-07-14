import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function FaqList({
  title,
  caption,
  imagePath,
  isActive,
  onclick,
}) {
  return (
    <div
      className="w-[85%] h-max  flex flex-col rounded-2xl"
      style={{
        boxShadow: "2px 2px 4px rgba(0,0,0,.2), -2px -2px 8px rgba(0,0,0,.2)",
      }}
      data-aos="zoom-in-up"
    >
      <button
        className={`w-full h-max rounded-2xl p-4 flex flex-row items-center gap-[2vw] text-left font-medium cursor-pointer
        ${
          isActive
            ? "bg-[#187CFF] text-white rounded-br-none rounded-bl-none"
            : "bg-white text-black"
        }`}
        onClick={onclick}
      >
        <div
          className={`min-w-10 min-h-10 rounded-lg flex items-center justify-center 
          ${isActive ? "bg-white" : "bg-[#187CFF]"}`}
        >
          <img src={`faq/${isActive ? "blue" : "white"}/${imagePath}`} />
        </div>
        <div className="flex justify-between items-center w-full">
          {/* title */}
          <p className="cursor-pointer w-[80%]">{title}</p>
          <ChevronDownIcon
            className={`h-5 w-5 transition-rotate duration-300 ${
              isActive ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* caption */}
      <p
        className={`w-full   transition-all duration-300 overflow-hidden
        ${
          isActive ? "max-h-[200px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
        }`}
      >
        {caption}
      </p>
    </div>
  )
}
