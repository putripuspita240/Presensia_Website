import PropTypes from "prop-types"

export default function ListOfCompany({ path, aosDirect }) {
  return (
    <img
      src={path}
      className="w-[max(8vw,6vh)] h-[max(4vw,4.8vh)] md:scale-[1] scale-[1.1]"
      data-aos={`${aosDirect === "left" ? "fade-up-right" : "fade-up-left"}`}
    />
  )
}

ListOfCompany.propTypes = {
  path: PropTypes.any,
  aosDirect: PropTypes.bool.isRequired,
}
