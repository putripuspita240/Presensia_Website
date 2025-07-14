import ListOfCompany from "../../element/ListOfCompany"

export default function Company() {
  const pathCompany = [
    {
      path: "trusted-company/astrom.png",
      aosDirect: "left",
    },
    {
      path: "trusted-company/cicio.png",
      aosDirect: "left",
    },
    {
      path: "trusted-company/weavy.png",
      aosDirect: "left",
    },
    {
      path: "trusted-company/vrokets.png",
      aosDirect: "right",
    },
    {
      path: "trusted-company/viewio.png",
      aosDirect: "right",
    },
    {
      path: "trusted-company/metablu.png",
      aosDirect: "left",
    },
    {
      path: "trusted-company/builda.png",
      aosDirect: "left",
    },
    {
      path: "trusted-company/hapi.png",
      aosDirect: "right",
    },
    {
      path: "trusted-company/logo-ipsum.png",
      aosDirect: "right",
    },
    {
      path: "trusted-company/virtua.png",
      aosDirect: "right",
    },
  ]

  return (
    <>
      <div className="flex gap-[max(7vw,1vh)] ">
        {pathCompany.slice(0, 5).map((item, index) => (
          <ListOfCompany
            key={index}
            path={item.path}
            aosDirect={item.aosDirect}
          />
        ))}
      </div>
      <div className="flex gap-[max(5vw,1vw)] ">
        {pathCompany.slice(5, 10).map((item, index) => (
          <ListOfCompany
            key={index}
            path={item.path}
            aosDirect={item.aosDirect}
          />
        ))}
      </div>
    </>
  )
}
