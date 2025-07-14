import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessRegister = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/login'); // arahkan ke halaman login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-10 px-6 bg-white">
      <div className="flex flex-col items-center gap-4 mt-10">
        {/* Ilustrasi di Bawah */}
      <img
        src="/succes-login.png"
          alt="Ilustrasi sukses login"
          className="w-60"
      />
        <h2 className="text-2xl font-bold text-center text-black">Berhasil Daftar</h2>
        <p className="text-sm text-gray-600 text-center">
          Selamat bergabung di presensia !
        </p>
        <button
          onClick={handleFinish}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md"
        >
          Selesai
        </button>
      </div>

    </div>
  );
};

export default SuccessRegister;
