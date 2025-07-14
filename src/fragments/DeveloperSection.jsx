import DeveloperCard from "../element/DeveloperCard"

export default function DeveloperSection() {
  return (
    <div className="w-screen h-max absolute bottom-[-250px] flex justify-center items-center">
      <div className="w-max flex items-center justify-center overflow-hidden gap-0">
        <DeveloperCard
          name="Nadia Pratama"
          role="Karyawan"
          image="/developer-story/person-3.png"
          scale=".75"
        >
          “Proses penggajian kini lebih praktis dengan fitur monitoring gaji.
          Semua potongan dan bonus langsung terlihat jelas”
        </DeveloperCard>
        <DeveloperCard
          name="Anisya Firdha"
          role="Supervisor"
          image="/developer-story/person-2.png"
          scale=".85"
        >
          "Fitur gamifikasi dan leaderboard meningkatkan semangat kerja tim.
          Karyawan jadi lebih disiplin dan termotivasi!"
        </DeveloperCard>
        <DeveloperCard
          name="James Moriarty"
          role="HR Manager"
          image="/developer-story/person-1.png"
          scale="1.0"
        >
          "Presensia membuat absensi lebih efisien dan akurat. Tidak perlu lagi
          rekap manual, semua data tersimpan otomatis!"
        </DeveloperCard>
        <DeveloperCard
          name="Nadia Pratama"
          role="Karyawan"
          image="/developer-story/person-3.png"
          scale=".85"
        >
          "Fitur shift dan izin online sangat membantu. Sekarang semua lebih
          transparan dan saya bisa mengajukan izin dengan cepat!"
        </DeveloperCard>
        <DeveloperCard
          name="Anisya Firdha"
          role="Supervisor"
          image="/developer-story/person-2.png"
          scale=".75"
        >
          “Sebagai pemilik bisnis, saya bisa memantau kehadiran dan kinerja tim
          kapan saja. Sistem laporan real-time-nya sangat membantu!”
        </DeveloperCard>
      </div>
    </div>
  )
}
