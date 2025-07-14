function ButtonHeroSection() {
  return (
    <div className="flex  gap-[1vw] font-semibold mdtext-[1.2vw] text-[1.5vh]">
      <button
        className="md:w-70 md:h-14 w-30 h-10 bg-[#187CFF] rounded-lg text-white "
        data-aos="fade-up-right"
      >
        Coba Sekarang
      </button>
      <button
        className=" md:w-70 md:h-14 w-30 h-10 bg-white border border-[#187CFF] rounded-lg text-[#187CFF] "
        data-aos="fade-up-left"
      >
        Lihat Fitur Lengkap
      </button>
    </div>
  )
}

export default ButtonHeroSection
