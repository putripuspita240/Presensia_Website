import ImageLeft from "../fragments/why-presensia/ImageLeft"
import Reason from "../fragments/why-presensia/Reason"

function WhyPresensia() {
  return (
    <div
      className=" w-screen h-max flex flex-col items-center pt-12 relative bg-white  "
      id="features"
    >
      <div className="text-center h-max relative px-5">
        <h1
          className="poppins text-[max(2.6vw,3vh)] font-bold "
          data-aos="fade-up"
        >
          Kenapa harus menggunakan Presensia ?
        </h1>
        <h3
          className="poppins text-[#3C3B3B] text-[max(1.5vw,2vh)] font-semibold relative z-20 mt-4"
          data-aos="fade-up"
        >
          Masih ragu? Ini 6 alasan kenapa Presensia adalah solusi terbaik untuk
          perusahaanmu!
        </h3>
      </div>
      <div className=" w-screen h-max flex lg:flex-row flex-col md:justify-end justify-center  ">
        <ImageLeft />
        <Reason />
      </div>
    </div>
  )
}

export default WhyPresensia
