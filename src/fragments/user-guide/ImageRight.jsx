export default function ImageRight() {
  return (
    <div className="md:w-[35%] w-full  relative md:h-[120vh] sm:h-[100vh] h-[80vh] ">
      <img
        src="use-presensia/stars.png"
        className="scale-[.9] absolute top-[-60px] right-10"
      />
      <img
        src="use-presensia/Vector-gray.png"
        className="md:scale-[1] scale-[.8] absolute right-[-65px] md:bottom-[-15px] bottom-[-35px]"
      />
      <img
        src="use-presensia/Vector-blue.png"
        className="md:scale-[1.1] scale-[.8] absolute right-[-55px] md:bottom-[-15px] bottom-[-35px]"
      />
      <img
        src="use-presensia/phone.png"
        className="md:scale-[1.1] scale-[.8] absolute md:bottom-0 bottom-[-70px] lg:right-0 md:right-[-20px] right-0"
        data-aos="fade-left"
      />
    </div>
  )
}
