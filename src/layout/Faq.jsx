import FaqImage from "../fragments/faq/FaqImage"
import FaqContent from "../fragments/faq/FaqContent"

function Faq() {
  return (
    <div className="w-screen lg:h-[200vh] h-[150vh]  lg:pt-[50vh] pt-[15vh] ">
      <div className="w-screen h-100 flex flex-col " id="faq">
        <div className="w-screen h-max  p-5 flex flex-col items-center gap-5 poppins">
          <h1
            className="font-semibold text-[max(3vw,4vh)] text-center "
            data-aos="fade-up"
          >
            Hmmm, Kamu Punya Pertanyaan?
          </h1>
          <p
            className="text-[#252525] text-lg lg:text-left text-center"
            data-aos="fade-up"
          >
            Sambil mikir-mikir, mungkin kamu juga perlu membaca beberapa FAQ
            seputar Presensia
          </p>
        </div>
        <div className="w-screen h-[100vh] flex items-center justify-center ">
          <FaqImage />
          <FaqContent />
        </div>
      </div>
    </div>
  )
}

export default Faq
