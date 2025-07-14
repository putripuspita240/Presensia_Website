import FaqList from "../../element/FaqList"
import { useState } from "react"

export default function FaqContent() {
  const [showCaption, setShowCaption] = useState(null)

  const handleClick = (index) => {
    setShowCaption(showCaption === index ? null : index)
  }

  const items = [
    {
      imagePath: "building.png",
      title: "Apa itu Presensia?",
      caption:
        "Presensia adalah aplikasi manajemen karyawan yang mempermudah absensi, tugas, penggajian, izin, shift kerja, serta meningkatkan produktivitas dengan sistem leaderboard dan gamifikasi.",
    },
    {
      imagePath: "person.png",
      title: "Apa saja fitur utama yang tersedia di Presensia?",
      caption:
        "Presensia adalah aplikasi manajemen karyawan yang mempermudah absensi, tugas, penggajian, izin, shift kerja, serta meningkatkan produktivitas dengan sistem leaderboard dan gamifikasi.",
    },
    {
      imagePath: "thumb.png",
      title: "Bagaimana cara kerja absensi di Presensia ",
      caption:
        "Presensia adalah aplikasi manajemen karyawan yang mempermudah absensi, tugas, penggajian, izin, shift kerja, serta meningkatkan produktivitas dengan sistem leaderboard dan gamifikasi.",
    },
    {
      imagePath: "settings.png",
      title:
        "Bagaimana jika saya mengalami kendala dalam menggunakan aplikasi?  ",
      caption:
        "Presensia adalah aplikasi manajemen karyawan yang mempermudah absensi, tugas, penggajian, izin, shift kerja, serta meningkatkan produktivitas dengan sistem leaderboard dan gamifikasi.",
    },
    {
      imagePath: "shield-check.png",
      title: "Apakah data di Presensia aman? ",
      caption:
        "Presensia adalah aplikasi manajemen karyawan yang mempermudah absensi, tugas, penggajian, izin, shift kerja, serta meningkatkan produktivitas dengan sistem leaderboard dan gamifikasi.",
    },
  ]

  return (
    <div className="lg:w-[55%] md:w-[70%] w-full  h-[100vh]  p-5 flex flex-col gap-5 pl-15 lg:pt-30 pt-10">
      {items.map((item, index) => (
        <FaqList
          key={index}
          title={item.title}
          caption={item.caption}
          imagePath={item.imagePath}
          isActive={showCaption === index}
          onclick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}
