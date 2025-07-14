function DownloadNow() {
  return (
    <div
      className=" w-screen  h-max flex mb-[50vh] mt-[30vh] items-center justify-center overflow-hidden lg:pt-30 z-2 sm:mt-0"
      id="download"
    >
      <div className="w-[85%] h-full   flex flex-col p-5  gap-10 relative ">
        <h1 className="font-semibold text-[max(2.2vw,4vh)] lg:w-[40%] poppins">
          Tunggu Apalagi ? Buruan Download Gratis Sekarang !
        </h1>
        {/* card blue */}
        <div className="w-full h-max bg-[#0068FF] rounded-2xl  lg:p-15 p-10 text-white flex flex-col gap-5 lg:text-left text-center ">
          <h2 className="text-3xl lg:w-[30%] font-medium">
            Tingkatkan Efisiensi Dan Produktivitasmu
          </h2>
          <p className="text-sm lg:w-[25%] ">
            Presensia : Solusi Absensi Digital Modern untuk Perusahaan Anda
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center  gap-5 ">
            <button className="scroll lg:w-max md:w-[35%] sm:w-[45%] w-[60%]">
              <img
                src="download-now/google-play.png"
                className=" lg:w-[12vw] w-full"
              />
            </button>
            <button className="lg:w-max md:w-[35%] sm:w-[45%] w-[60%]">
              <img
                src="download-now/app-store.svg"
                className="lg:scale-[1] lg:w-[12vw] w-full"
              />
            </button>
          </div>
        </div>
        <img
          src="download-now/phone.png"
          className="absolute scale-[.8] right-[-150px] bottom-[-15px] lg:block hidden"
        />
      </div>
    </div>
  )
}

export default DownloadNow
