import img from "../assets/Group 883.png";

export default function Client() {
  return (
    <div className="px-10">
      <h1 className="text-[#441355] text-[100px] leading-[120px] font-bold roboto text-center">
        Our Clients
      </h1>
      <img src={img} alt="" className="mt-[50px]" />
    </div>
  );
}
