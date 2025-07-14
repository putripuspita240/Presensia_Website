import ButtonHeroSection from "../../element/ButtonHeroSection"

function HeroSectionContent() {
  return (
    <div className="h-max  pr-5 flex flex-col gap-7 z-20 md:pt-27  md:pl-21 md:w-1/2 pt-10 pl-12 w-[85%] ">
      <h1
        className="albert-sans text-[#404040] font-semibold md:text-[3.3vw] text-[4vh] tracking-wide md:leading-14   leading-10"
        data-aos="fade-right"
      >
        Kelola{" "}
        <span className="relative z-10 after:absolute after:left-0 md:after:w-[100%] md:after:h-20 after:bg-[url(/highlight.png)] after:bg-contain after:bg-no-repeat after:bg-center after:-z-10 after:top-2 ">
          Kehadiran
        </span>{" "}
        & Produktivitas Karyawan dalam Satu Aplikasi!
      </h1>
      <p
        className="md:text-[1.6vw] text-[#404040] w-full leading-tight"
        data-aos="fade-right"
      >
        Kelola kehadiran karyawan dengan mudah, cepat, dan akurat menggunakan
        teknologi absensi berbasis digital.{" "}
        <span className="text-[#0D74FF] font-semibold">
          Tingkatkan efisiensi dan produktivitas tanpa ribet!
        </span>
      </p>
      <ButtonHeroSection />
    </div>
  )
}

export default HeroSectionContent
