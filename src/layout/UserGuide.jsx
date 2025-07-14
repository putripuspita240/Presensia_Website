import ImageRight from "../fragments/user-guide/ImageRight"
import UserGuideContent from "../fragments/user-guide/UserGuideContent"

function UserGuide() {
  return (
    <div
      className="poppins w-screen h-max  relative flex flex-col md:flex-row mt-8 "
      id="user-guide"
    >
      {/* left side */}
      <div className="flex flex-col gap-3 md:w-[60%] w-full md:pl-25  md:p-0 p-5">
        {/* line guide */}
        <div className=" w-128 h-65 border-[#187CFF] border-2 border-dashed border-l-0  rounded-lg absolute top-39 left-33 lg:block hidden -z-10"></div>
        <h1
          className="text-3xl font-medium md:text-left text-center"
          data-aos="fade-up"
        >
          Kelola Kehadiran & Produktivitas dalam 6 Langkah Mudah
        </h1>
        <h5
          className="text-[#3C3B3B] md:text-left text-center"
          data-aos="fade-up"
        >
          Manajemen kehadiran, tugas, dan gaji lebih efisien hanya dalam
          hitungan menit!
        </h5>
        <UserGuideContent />
      </div>

      {/* right side */}
      <ImageRight />
    </div>
  )
}

export default UserGuide
