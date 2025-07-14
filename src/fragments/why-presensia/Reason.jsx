import ReasonList from "../../element/ReasonList"

export default function Reason() {
  const reasonList = [
    {
      title: "Absensi Digital",
      desc: "GPS, Face Recognition, & Selfie Verification",
      iconPath: "icon-fitur/absensi.png",
    },
    {
      title: "Managemen Tugas",
      desc: "Atur tugas karyawan dengan mudah",
      iconPath: "icon-fitur/manage-tasks.png",
    },
    {
      title: "Monitoring Gaji",
      desc: "Transparansi penggajian & insentif kinerja",
      iconPath: "icon-fitur/monitoring-fee.png",
    },
    {
      title: "Gamifikasi",
      desc: "Motivasi karyawan dengan reward & ranking",
      iconPath: "icon-fitur/gamifikasi.png",
    },
    {
      title: "Pengajuan Izin & Cuti",
      desc: "Proses lebih cepat, tanpa ribet!",
      iconPath: "icon-fitur/izin-cuti.png",
    },
    {
      title: "Atur Shift Kerja",
      desc: "Fleksibel sesuai kebutuhan bisnis!",
      iconPath: "icon-fitur/shift.png",
    },
  ]

  return (
    <div className="w-full lg:w-[55vw] md:w-[95vw] md:ml-7 md:mr-0 h-max   bg-[#F5F8FF] rounded-4xl border border-gray-200 p-6  z-20 lg:ml-0 lg:mr-20  mt-10 gap-5">
      <div className="flex flex-wrap flex-col justify-center items-center space-y-7 w-full h-max  md:flex-row md:justify-between md:items-stretch ">
        {reasonList.map((item, index) => {
          return (
            <ReasonList title={item.title} iconPath={item.iconPath} key={index}>
              {item.desc}
            </ReasonList>
          )
        })}
      </div>
    </div>
  )
}
