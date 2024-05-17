import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import img1 from "../assets/Ellipse 50.png";

export default function Team() {
  return (
    <div className="px-10">
      <h1 className="text-[#441355] text-[100px] leading-[120px] font-bold roboto text-center">
        Our Team
      </h1>
      <p className="text-[#4A4A4B] alata text-3xl text-center">
        Smart Vision for Consultancy and Development was incorporated in
        <br /> 2011 in Somalia.
      </p>
      <div className="mt-[175px] flex items-center justify-between gap-[36px]">
        <div className="relative flex items-center justify-center">
          <div className="w-[228px] h-[228px] bg-[#FB4738] rounded-full absolute -top-[100px] -z-10 flex items-center justify-center">
            <img src={img1} alt="" className="mx-auto" />
          </div>
          <div className="shadow-custom2 w-[403px] h-[290px] rounded-[9px] flex items-end justify-center">
            <div className="pb-[24px]">
              <h1 className="text-[35px] leading-[52px] font-bold text-center text-[#441355]">
                Ismail Aden Haibe
                <span className="block text-xl font-normal text-center">
                  Cheif Executive Officer
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mt-[25px]">
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaFacebookF className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaXTwitter className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaLinkedinIn className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-[228px] h-[228px] bg-[#FB4738] rounded-full absolute -top-[100px] -z-10 flex items-center justify-center">
            <img src={img1} alt="" className="mx-auto" />
          </div>
          <div className="shadow-custom2 w-[403px] h-[290px] rounded-[9px] flex items-end justify-center">
            <div className="pb-[24px]">
              <h1 className="text-[35px] leading-[52px] font-bold text-center text-[#441355]">
                Ismail Aden Haibe
                <span className="block text-xl font-normal text-center">
                  Cheif Executive Officer
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mt-[25px]">
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaFacebookF className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaXTwitter className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaLinkedinIn className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-[228px] h-[228px] bg-[#FB4738] rounded-full absolute -top-[100px] -z-10 flex items-center justify-center">
            <img src={img1} alt="" className="mx-auto" />
          </div>
          <div className="shadow-custom2 w-[403px] h-[290px] rounded-[9px] flex items-end justify-center">
            <div className="pb-[24px]">
              <h1 className="text-[35px] leading-[52px] font-bold text-center text-[#441355]">
                Ismail Aden Haibe
                <span className="block text-xl font-normal text-center">
                  Cheif Executive Officer
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mt-[25px]">
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaFacebookF className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaXTwitter className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaLinkedinIn className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-[228px] h-[228px] bg-[#FB4738] rounded-full absolute -top-[100px] -z-10 flex items-center justify-center">
            <img src={img1} alt="" className="mx-auto" />
          </div>
          <div className="shadow-custom2 w-[403px] h-[290px] rounded-[9px] flex items-end justify-center">
            <div className="pb-[24px]">
              <h1 className="text-[35px] leading-[52px] font-bold text-center text-[#441355]">
                Ismail Aden Haibe
                <span className="block text-xl font-normal text-center">
                  Cheif Executive Officer
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mt-[25px]">
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaFacebookF className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaXTwitter className="text-white text-[20px]" />
                </p>
                <p className="w-[37px] h-[37px] bg-[#441355] flex items-center justify-center rounded-full">
                  <FaLinkedinIn className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
