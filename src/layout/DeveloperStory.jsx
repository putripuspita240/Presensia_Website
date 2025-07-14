import DeveloperSection from "../fragments/DeveloperSection"

function DeveloperStory() {
  return (
    <div
      className="w-screen h-max relative bg-[url('/developer-story/banner/banner.png')] bg-cover flex flex-col"
      id="testimoni"
    >
      {/* gradient */}
      <div className="w-full md:w-[80%] h-full bg-[rgba(24,124,255,.9)] md:bg-transparent md:bg-gradient-to-r md:from-[rgba(24,124,255,1)] md:from-[5%] md:via-[rgba(24,124,255,.83)] md:via-[25%] md:to-[rgba(24,124,255,0)] md:to-[100%]">
        {/* gradient */}
        <div className="lg:w-[70%] md:w-85% h-full text-white flex flex-col gap-10  pt-20 md:pb-50 pb-20 md:pl-30 pl-10 md:pr-10 ">
          <h5
            className="font-semibold lg:text-[2.5vw] md:text-[3vw] text-[4vh]"
            data-aos="fade-right"
          >
            Developer Story
          </h5>
          <blockquote
            className="font-semibold text-[max(3vw,4vh)]"
            data-aos="fade-right"
          >
            “Kami membuat aplikasi presensia agar dapat membantu kinerja
            perusahaan dengan berbagai fitur dalam satu aplikasi”
          </blockquote>
          <cite className="not-italic text-xl" data-aos="fade-right">
            <p>Khoiru Rizki Bani Adam</p>
            <p>UI/UX Developer | PT. Otak Kanan</p>
          </cite>
        </div>
      </div>
      <img
        src="/developer-story/banner/developer.png"
        className="absolute right-15 bottom-[-50px] scale-[.8] lg:block hidden"
      />
      <div className="lg:block hidden">
        <DeveloperSection />
      </div>
    </div>
  )
}

export default DeveloperStory
