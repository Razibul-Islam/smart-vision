import img from "../assets/Group 518.png";
import img1 from "../assets/Ellipse 55.png";
import img2 from "../assets/Ellipse 58.png";
import img3 from "../assets/Ellipse 54.png";
import img4 from "../assets/Ellipse 53.png";
import img5 from "../assets/Ellipse 51.png";
import img6 from "../assets/Ellipse 52.png";
import img7 from "../assets/Ellipse 57.png";
import img8 from "../assets/Ellipse 59.png";
import img9 from "../assets/Ellipse 56.png";

export default function Testimonial() {
  return (
    <div>
      <h1 className="text-[#441355] text-[100px] leading-[120px] font-bold roboto text-center mb-[50px]">
        Testimonial
      </h1>
      <div className="border-b border-[#BFBFBF]">
        <div className="flex items-center justify-center gap-[25px]">
          <span className="border border-[#BFBFBF] w-full block"></span>
          <img
            src={img}
            alt=""
            className="relative w-[106px] h-[77px] mx-auto"
          />
          <span className="border border-[#BFBFBF] w-full block"></span>
        </div>
        <p className="text-black mt-[50px] alata text-3xl text-center">
          Kindly do not hesitate to enter into collaboration with Smart Vision
          for
          <br />
          similar activities, as UNICEF was very pleased and satisfied by their
          work
        </p>
        <div className="flex items-center justify-center gap-[54px] mt-[100px]">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <h1 className="roboto text-3xl text-black font-bold text-center">
          Hanna{" "}
          <span className="roboto text-[25px] font-normal text-center block">
            Yoshimoto UNICEF
          </span>
        </h1>
      </div>
    </div>
  );
}
