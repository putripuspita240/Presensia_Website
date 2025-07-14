import PropTypes from "prop-types"

export default function UserGuideList({ children, no, yellow, title }) {
  return (
    <li className=" w-[75%]  ">
      {/* nomor */}
      <div
        className={`w-10 h-10 flex justify-center items-center rounded-full font-semibold  text-white text-lg p-6 ${
          yellow ? "bg-[#FA8B05]" : "bg-[#187CFF]"
        }`}
        data-aos="zoom-out"
        data-aos-duration="300"
      >
        {no}
      </div>

      {/* card */}
      <div
        className="lg:w-[16vw] md:w-[18vw] md:h-[30vh] w-full mt-1 bg-white rounded-lg shadow-[6px_10px_28px_rgba(0,0,0,.04),20px_36px_117px_rgba(0,0,0,.07)] md:py-3 lg:pt-8 px-3 py-3"
        data-aos="zoom-in-up"
      >
        <h5 className="font-semibold mb-1 lg:text-[1.2vw] md:text-[1.5vw] ">
          {title}
        </h5>
        <p className="lg:text-[1vw] md:text-[1.3vw] leading-relaxed">
          {children}
        </p>
      </div>
    </li>
  )
}

UserGuideList.propTypes = {
  children: PropTypes.any,
  no: PropTypes.any,
  title: PropTypes.any,
  yellow: PropTypes.bool.isRequired,
}
