import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaRegEnvelope, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'; // Email, Eye, Eye Slash icons
import { FiLock } from 'react-icons/fi'; // Lock icon for password
import { Link, useNavigate } from 'react-router-dom'; // Jika Anda menggunakan React Router

// Pastikan jalur ini benar dan gambar ada
// import bgPattern from '../../assets/bg-pattern.png'; // Ganti dengan path gambar latar belakang Anda
// import illustration from '../../assets/login-illustration.png'; // Ganti dengan path gambar ilustrasi Anda

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Pastikan state ini ada
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Logika login Anda di sini
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Ingat Saya:', rememberMe);
        navigate("/success-login");
        // Contoh: Kirim data ke API
    };

    return (
        <div className="min-h-screen bg-[#0052D4] relative overflow-hidden flex flex-col items-center justify-start py-8 px-6 sm:px-4">
            {/* Background Pattern - SUDAH DIPERBAIKI */}
            <div
                className="absolute inset-0 bg-repeat opacity-20"
                // style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '200px' }} // Sesuaikan ukuran grid jika perlu
            ></div>

            {/* Top Section - Logo & Title */}
            <div className="relative z-10 text-white text-center mt-8 mb-10">
                <div className="flex justify-center mb-4">
            <img
             src="/presensia_logo.png"
             alt="Presensia Logo"
             className="w-20 h-20"
            />
            </div>

            <div className="relative z-10 text-white text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Masuk Ke <br /> akun Kamu</h1>
                <p className="text-sm px-8">
                    Masukkan email dan password kamu untuk Login
                </p>
            </div>
        </div>
            {/* Login Card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm mx-auto flex-shrink-0">
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    {/* Masuk Dengan Google Button */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition duration-200"
                    >
                        <FcGoogle className="text-2xl" />
                        Masuk Dengan Google
                    </button>

                    <div className="flex items-center my-4">
                        <span className="flex-grow border-t border-gray-300"></span>
                        <span className="px-4 text-gray-500 text-sm">Atau login dengan</span>
                        <span className="flex-grow border-t border-gray-300"></span>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <FaRegEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Masukkan email kamu"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan password kamu"
                            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>

                    {/* Remember Me & Lupa Password */}
                    <div className="flex justify-between items-center text-sm mt-1">
                        <label className="flex items-center cursor-pointer text-gray-700">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600 rounded-md focus:ring-blue-500"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="ml-2 text-gray-600">Ingat Saya</span>
                        </label>
                        <Link to="/forgot-password" className="text-blue-600 font-semibold hover:underline">
                            Lupa Password ?
                        </Link>
                    </div>

                    {/* Masuk Button */}
                    <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 text-lg mt-4">
                    Masuk
                    </button>

                    {/* Belum punya akun? Daftar */}
                    <div className="text-center text-sm mt-4">
                        <span className="text-gray-700">Belum punya akun? </span>
                        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                            Daftar
                        </Link>
                    </div>
                </form>
            </div>

            {/* Bottom Illustration - SUDAH DIPERBAIKI */}
            <div className="relative z-10 w-full mt-auto flex justify-center">
                <img
                    // src={illustration} // Pastikan 'illustration' diimpor dan file-nya ada
                    src="/login_animation.png"
                    alt="Login animation"
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg" // Sesuaikan ukuran gambar ilustrasi
                />
            </div>
        </div>
    );
};
export default Login;