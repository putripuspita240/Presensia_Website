import HeroSectionContent from "../fragments/hero-section/HeroSectionContent"
import HeroSectionImage from "../fragments/hero-section/HeroSectionImage"

function HeroSection() {
  return (
    <div
      className="w-full h-max pb-0 bg-[#D1EFFF] flex md:flex-row flex-col lg:pt-15 mt-11 "
      id="home"
    >
      <HeroSectionContent />
      <HeroSectionImage />
    </div>
  )
}

export default HeroSection
