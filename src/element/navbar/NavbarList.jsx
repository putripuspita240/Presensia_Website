import PropTypes from "prop-types"

function NavbarList({ children, path, listClass }) {
  const scrollTo = () => {
    const element = document.querySelector(path)
    const navbar = document.querySelector(".navbar") // pastikan navbar kamu punya class .navbar

    if (element) {
      const navbarHeight = navbar?.offsetHeight || 0
      const y =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <li
      className="roboto cursor-pointer"
      onClick={scrollTo}
      data-aos="fade-down"
    >
      <a className={`transition-all duration-200 ${listClass}`}>{children}</a>
    </li>
  )
}

NavbarList.propTypes = {
  children: PropTypes.any,
  path: PropTypes.any,
  listClass: PropTypes.any,
}

export default NavbarList
