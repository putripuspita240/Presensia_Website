import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer() {
  const companyInfoList = [
    {
      title: "Website",
      desc: "www.presensia.com",
    },
    {
      title: "Email",
      desc: "support@presensia.com",
    },
    {
      title: "Office",
      desc: "Graha Pena, Ruang 1503, Jl. Ahmad Yani No.88, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60234",
    },
    {
      title: "Butuh Bantuan ?",
      desc: "Hubungi tim support kami 24 jam melalui email atau WhatsApp.",
    },
  ]

  return (
    <div className="w-screen h-max bg-[#0068FF] lg:mt-35 mt-[-250px]   p-10 md:pt-40 sm:pt-30 pt-20 text-white flex flex-col items-center gap-12 poppins relative z-10">
      <img
        src="wave.png"
        className="absolute lg:top-[-170px] sm:top-[-100px] top-[-50px]  scale-[1.1]"
      />

      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="presensia-logo-white.png" className="scale-[.9]" />
        <p className="text-lg md:text-left text-center">
          Manajemen Karyawan Lebih Mudah & Efisien{" "}
        </p>
      </div>

      {/* services */}
      <div className="flex  md:flex-row flex-col  gap-8 lg:gap-15 w-[85%]">
        {companyInfoList.map((info, index) => (
          <div className=" w-full " key={index}>
            <h5 className=" w-full text-lg font-medium">{info.title}</h5>
            <p className="text-xs md:w-[80%] ">{info.desc}</p>
          </div>
        ))}
      </div>

      {/* follow us */}
      <div className="space-y-4">
        <h3 className="text-center font-medium text-2xl">Ikuti Kami</h3>
        <div className="flex items-center justify-center gap-8">
          <FaInstagram className="w-6 h-6 " />
          <FaTwitter className="w-6 h-6 " />
          <FaYoutube className="w-6 h-6 " />
        </div>
      </div>
      {/* copyright */}
      <p className="text-sm">© 2025 Presensia. Semua Hak Dilindungi.</p>
    </div>
  )
}

export default Footer
