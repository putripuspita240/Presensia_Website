import PropTypes from "prop-types"
// import { useState } from "react"

export default function DeveloperCard({ children, image, name, role, scale }) {
  const widthClasses = {
    "1.0": "w-90",
    ".85": "w-80",
    ".75": "w-70",
  }

  const scaleWidth = widthClasses[scale]
  let marginX = ""
  if (scale == ".75") marginX = "mx-[-25px]"

  return (
    <div
      className={`card-container ${scaleWidth} ${marginX} h-max box-border p-2 pb-8  bg-white rounded-2xl border border-[#005DE5] flex flex-col flex-shrink-0 items-center gap-2 `}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="flex flex-col items-center ">
        <img src={image} className="scale-[.9] rounded-3xl" />
        <img
          src="/developer-story/five-star.png"
          className="stars scale-[.9]"
        />
      </div>
      <div className="flex flex-col items-center">
        <h5 className="font-semibold text-2xl">{name}</h5>
        <h6 className="text-[#005DE5]">{role}</h6>
      </div>
      <blockquote className="w-[90%] text-center text-sm text-[#5A5A5A]">
        {children}
      </blockquote>
    </div>
  )
}

DeveloperCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  scale: PropTypes.string,
}
