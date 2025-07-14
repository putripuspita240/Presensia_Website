export default function ImageLeft() {
  return (
    <div className="lg:block hidden ">
      <img
        src="why-presensia/Icons.png"
        className="scale-[.9] absolute z-10 top-[10px] left-[-5px]"
      />
      <img
        src="why-presensia/Vector.png"
        className="scale-[.9] absolute z-10 top-[55px] left-[35px]"
      />
      <img
        src="why-presensia/phone.png"
        className="scale-[.9] absolute z-20 top-[140px] left-[-35px]"
        data-aos="fade-up-right"
      />
    </div>
  )
}
