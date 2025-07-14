import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Efek untuk memantau scroll dan menampilkan tombol kembali
  useEffect(() => {
    const pageHome = document.querySelector("#home")

    const handleScroll = () => {
      let windowOffsetTop = Math.round(window.scrollY)
      setShow(windowOffsetTop >= pageHome.offsetTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Tombol Scroll */}
      <div
        className={`w-10 h-10 bg-[#333] rounded-full flex items-center justify-center fixed z-50 right-10 cursor-pointer transition-all duration-200 group
        ${show ? "opacity-100 bottom-10" : "opacity-0 bottom-[-10px]"}`}
        onClick={scrollToTop}
      >
        <ChevronDoubleUpIcon className="h-6 w-6 text-white" strokeWidth={2} />

        {/* Tooltip */}
        <span className="absolute bottom-12  bg-[#333] text-white text-xs px-2 py-1 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
          Kembali
        </span>
      </div>
    </div>
  )
}
