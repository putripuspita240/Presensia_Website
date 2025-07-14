import NavbarList from "../element/navbar/NavbarList"
import LoginResgister from "../element/navbar/LoginRegister"
import { useState, useEffect } from "react"
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline"

function Navbar() {
  const listNavbar = [
    {
      path: "#home",
      name: "Beranda",
    },
    {
      path: "#features",
      name: "Fitur",
    },
    {
      path: "#user-guide",
      name: "Penggunaan",
    },
    {
      path: "#testimoni",
      name: "Testimoni",
    },
    {
      path: "#faq",
      name: "FAQ",
    },
    {
      path: "#download",
      name: "Download",
    },
  ]

  const [showNavbar, setShowNavbar] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleSidebar = () => {
    if (showSidebar == false) {
      setShowSidebar(true)
      console.log("oke sidebar jdi true")
    } else setShowSidebar(false)
  }

  useEffect(() => {
    const pageHome = document.querySelector("#home")

    const handleScroll = () => {
      let windowOffsetTop = Math.round(window.scrollY)
      if (windowOffsetTop >= pageHome.offsetTop) {
        setShowSidebar(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setShowNavbar(false)
      } else setShowNavbar(true)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className="navbar flex items-center justify-between px-[4vw] gap-12 w-screen h-[70px] z-50 fixed bg-white">
      <img
        src="presensia-logo.png"
        className={`${showNavbar ? "scale-[.9]" : "scale-[.8]"}`}
        // data-aos="fade-down"
      ></img>
      <ul
        className={`items-center justify-between gap-12  transition-right duration-300
        ${
          showNavbar
            ? " flex flex-row w-full  "
            : " bg-[rgba(255,255,255,.8)]  fixed w-[35vw] border border-[#1D61E7] flex flex-col  py-10 top-0 bottom-0 right-0"
        }
      ${showSidebar ? "right-0 block" : "right-[-500px] "}
      
        `}
      >
        <div
          className={`flex gap-[max(5vw,6vh)]  
          ${showNavbar ? "flex-row " : "flex-col"}`}
        >
          {listNavbar.map((item, index) => (
            <NavbarList
              key={index}
              listClass={`nav-button-${index + 1} ${
                showNavbar
                  ? "text-[max(1.2vw,1.5vh)]"
                  : "text-xs hover:text-[#187CFF] hover:underline "
              }`}
              path={item.path}
            >
              {item.name}
            </NavbarList>
          ))}
        </div>
        <LoginResgister
          containerClass={`${
            showNavbar ? "space-x-5" : "flex flex-col  gap-5"
          }`}
        />
        <XMarkIcon
          className={`h-5 w-5 absolute top-2 left-2 text-[#1D61E7] cursor-pointer ${
            showNavbar ? "hidden" : "block"
          }`}
          strokeWidth="2"
          onClick={handleSidebar}
        />
      </ul>
      <Bars4Icon
        className={`h-6 w-6 text-[#1D61E7] cursor-pointer  ${
          showNavbar || showSidebar ? "hidden" : "block"
        }`}
        strokeWidth="2"
        onClick={handleSidebar}
      />
    </nav>
  )
}

export default Navbar
