import UserGuideList from "../../element/UserGuideList"
export default function UserGuideContent() {
  const userGuide = [
    {
      no: "1",
      title: "Daftar & Buat Akun",
      description:
        "Registrasi melalui aplikasi atau website Presensia dan verifikasi akun untuk mulai mengelola kehadiran tim dengan lebih mudah.",
      yellow: false,
    },
    {
      no: "2",
      title: "Tambah Karyawan",
      description:
        "Undang tim Anda dan atur struktur organisasi dengan cepat, memastikan semua anggota terdaftar dalam sistem.",
      yellow: true,
    },
    {
      no: "3",
      title: "Atur Jadwal & Shift",
      description:
        "Sesuaikan jadwal kerja dan shift karyawan sesuai kebutuhan perusahaan untuk kelancaran operasional yang lebih baik.",
      yellow: false,
    },
    {
      no: "4",
      title: "Mulai Absen Digital",
      description:
        "Gunakan GPS, Face Recognition, atau Selfie Verification untuk melakukan absensi secara akurat dan bebas manipulasi.",
      yellow: false,
    },
    {
      no: "5",
      title: "Kelola Tugas dan Gaji",
      description:
        "   Tetapkan tugas, pantau progres kerja, serta hitung gaji dan insentif karyawan secara otomatis melalui satu platform.",
      yellow: true,
    },
    {
      no: "6",
      title: "Tingkatkan Kinerja",
      description:
        "Tingkatkan produktivitas tim dengan leaderboard, gamifikasi, serta penilaian kinerja yang lebih transparan.",
      yellow: false,
    },
  ]
  return (
    <div className="w-full h-max pb-8">
      <ul className="flex flex-col md:gap-0 gap-5">
        {/* col 1 */}
        <div className="flex md:flex-row flex-col p-2 gap-5 items-center justify-center ">
          {userGuide.slice(0, 3).map((item, index) => {
            return (
              <UserGuideList
                key={index}
                no={item.no}
                title={item.title}
                yellow={item.yellow}
              >
                {item.description}
              </UserGuideList>
            )
          })}
        </div>
        {/* col 2 */}
        <div className="flex md:flex-row-reverse  flex-col items-center justify-center p-2 gap-5">
          {userGuide.slice(3, 6).map((item, index) => {
            return (
              <UserGuideList
                key={index}
                no={item.no}
                title={item.title}
                yellow={item.yellow}
              >
                {item.description}
              </UserGuideList>
            )
          })}
        </div>
      </ul>
    </div>
  )
}
