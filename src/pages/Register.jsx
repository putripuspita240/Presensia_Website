import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiCalendar } from 'react-icons/fi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      dob,
      phoneNumber,
      password,
      confirmPassword,
    });

    alert('Kamu berhasil daftar!');
    setTimeout(() => {
      navigate("/success-register");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0052D4] flex flex-col items-center justify-start py-8 px-4">
      
      {/* Tombol Kembali */}
      <div className="w-full max-w-md flex justify-start mb-4">
        <Link to="/login" className="text-white text-3xl">
          <HiOutlineArrowNarrowLeft />
        </Link>
      </div>

      {/* Logo */}
      <img
        src="/presensia_logo.png"
        alt="Presensia Logo"
        className="w-20 h-20"
      />

      {/* Judul */}
      <h1 className="text-white text-3xl font-bold mb-1 text-center">Daftar Akun</h1>

      {/* Link Masuk */}
      <p className="text-white text-sm mb-6 text-center">
        Sudah punya akun?{' '}
        <Link to="/login" className="underline font-semibold">
          Masuk
        </Link>
      </p>

      {/* Kartu Formulir */}
      <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          {/* Nama Depan & Belakang */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-1">
                Nama Panjang
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-1">
                Nama Belakang
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Moriarty"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-1">
              Tanggal Lahir
            </label>
            <div className="relative">
              <input
                type="text"
                id="dob"
                placeholder="HH/BB/TTTT"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg pr-12"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
              />
              <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* No. Telp */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-1">
              No. Telp
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-gray-500 text-lg">
                🇮🇩 (+62)
              </div>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="xxx - XXXX - XXXX"
                className="w-full pl-24 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Masukkan password kamu"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-1">
              Konfirmasi Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Masukkan password kamu"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg pr-12"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 text-lg mt-4"
          >
            Daftar
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="px-4 text-gray-500 text-sm">Atau</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition duration-200"
          >
            <FcGoogle className="text-2xl" />
            Masuk Dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
