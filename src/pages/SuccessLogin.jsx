import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessLogin = () => {
  const navigate = useNavigate(); // ✅ Dipanggil di dalam komponen

  const handleSelesai = () => {
    navigate("/"); // arahkan ke halaman onboarding
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-10 px-6 bg-white">
      <div className="flex flex-col items-center gap-4 mt-10">
      {/* Gambar ilustrasi bawah */}
        <img
          src="/succes-login.png"
          alt="Ilustrasi sukses login"
          className="w-60"
        />
  

      {/* Text */}
      <h2 className="text-2xl font-bold text-center mt-8">Berhasil Masuk</h2>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Selamat Datang Kembali di presensia!
      </p>

      {/* Tombol */}
      <button
        onClick={handleSelesai}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg shadow"
      >
        Selesai
      </button>
    </div>
    </div>
  );
};

export default SuccessLogin;
