function HeroSectionImage() {
  return (
    <div className="relative md:w-1/2 md:h-[110vh] w-full sm:h-[60vh] h-[50vh]">
      <img
        src="gradient.png"
        className="absolute  lg:rotate-0 lg:right-70 lg:scale-[2]  md:rotate-270 md:scale-[3]  md:right-[-0px] md:bottom-[0px] md:top-50 rotate-270 scale-[3] right-[-30px] bottom-[-30px] top-[-30px]"
      />
      <div className="w-full h-full" data-aos="fade-up">
        <img
          src="hero-section/8.png"
          className="md:scale-[1] sm:scale-[.7] scale-[.6] absolute z-30 md:bottom-0 md:right-30 sm:bottom-[-120px] bottom-[-100px] right-10"
        />
        <img
          src="hero-section/mockup-1.png"
          className="md:scale-[1] sm:scale-[.7] scale-[.6] absolute  z-20 md:bottom-0 md:right-0 right-[-40px] bottom-[-140px]"
        />
      </div>
    </div>
  )
}

export default HeroSectionImage
