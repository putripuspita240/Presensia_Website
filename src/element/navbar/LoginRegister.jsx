import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


function LoginResgister({ containerClass }) {
  const navigate = useNavigate();

  return (
    <div
      className={`text-[max(1vw,1.3vh)] ${containerClass}`}
      data-aos="fade-down"
    >
      
      <button
        onClick={() => navigate("/login")}
        className="bg-white rounded-lg text-[#0057D6] px-[max(2.1vw,3vh)] py-[max(.8vw,.8vh)] hover:shadow-[2px_2px_10px_black] transition-all duration-300"
      >
        Masuk
      </button>

      <button
        onClick={() => navigate("/register")}
        className="bg-[#1D61E7] rounded-lg text-white px-[max(2.1vw,3vh)] py-[max(.8vw,.8vh)] hover:shadow-[2px_2px_10px_black] transition-all duration-300"
      >
        Daftar
      </button>
    </div>
  );
}

LoginResgister.propTypes = {
  containerClass: PropTypes.any,
};

export default LoginResgister;
