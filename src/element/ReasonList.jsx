import PropTypes from "prop-types"

export default function ReasonList({ children, title, iconPath }) {
  return (
    <div
      className="w-full lg:w-[25vw] md:w-[28vw] bg-white flex h-max  p-2 rounded-2xl space-x-2  "
      data-aos="fade-up "
    >
      <img src={iconPath} className="lg:scale-[.8] md:scale-[.6] scale-[.8]" />
      <div className=" text-left">
        <h5 className="font-semibold lg:text-lg md:text-base">{title}</h5>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  )
}

ReasonList.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  iconPath: PropTypes.any,
}
