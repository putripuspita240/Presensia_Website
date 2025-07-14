import Company from "../fragments/trusted-company/Company"

function TrustedCompany() {
  return (
    <div className=" w-screen h-max p-5 pt-10 pb-10  flex flex-col items-center justify-center gap-10 bg-[#D1EFFF] z-30 relative">
      <h1
        className="albert-sans  font-semibold text-center text-[max(3vw,3.5vh)]"
        data-aos="fade-up"
      >
        Trusted 1000+ companies
      </h1>
      <Company />
    </div>
  )
}

export default TrustedCompany
