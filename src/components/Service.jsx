import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

export default function Service() {
  return (
    <div>
      <h1 className="text-[#441355] text-[100px] leading-[120px] font-bold roboto text-center">
        Our Service
      </h1>
      <p className="text-[#4A4A4B] alata text-3xl text-center">
        Smart Vision for Consultancy and Development was incorporated in 2011 in
        Somalia. We
        <br />
        focus majorly on monitoring, evaluation, research and learning (MERL).
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={44}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper p-[88px]"
      >
        <SwiperSlide>
          <div className="w-[440px] h-[518px] bg-white shadow-custom flex items-center justify-center flex-col gap-[25px] rounded-[20px]">
            <div className="p-px bg-gradient-to-b from-[#6f3baf00] to-[#441355] w-[144px] h-[144px] rounded-full flex items-center justify-center">
              <div className="w-[139px] h-[139px] rounded-full bg-white flex items-center justify-center">
                <HiOutlineComputerDesktop className="text-[51px]" />
              </div>
            </div>
            <h1 className="text-[#441355] roboto text-[50px] leading-[59px] font-bold text-center">
              Third Party Monitoring
            </h1>
            <p className="alata text-3xl leading-[45px] text-center underline cursor-pointer">
              See More
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[440px] h-[518px] bg-white shadow-custom flex items-center justify-center flex-col gap-[25px] rounded-[20px]">
            <div className="p-px bg-gradient-to-b from-[#6f3baf00] to-[#441355] w-[144px] h-[144px] rounded-full flex items-center justify-center">
              <div className="w-[139px] h-[139px] rounded-full bg-white flex items-center justify-center">
                <FaFileCircleCheck className="text-[51px]" />
              </div>
            </div>
            <h1 className="text-[#441355] roboto text-[50px] leading-[59px] font-bold text-center">
              Midterm and endline Evaluations
            </h1>
            <p className="alata text-3xl leading-[45px] text-center underline cursor-pointer">
              See More
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[440px] h-[518px] bg-white shadow-custom flex items-center justify-center flex-col gap-[25px] rounded-[20px]">
            <div className="p-px bg-gradient-to-b from-[#6f3baf00] to-[#441355] w-[144px] h-[144px] rounded-full flex items-center justify-center">
              <div className="w-[139px] h-[139px] rounded-full bg-white flex items-center justify-center">
                <FaUserFriends className="text-[51px]" />
              </div>
            </div>
            <h1 className="text-[#441355] roboto text-[50px] leading-[59px] font-bold text-center">
              Baseline surveys
            </h1>
            <p className="alata text-3xl leading-[45px] text-center underline cursor-pointer">
              See More
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[440px] h-[518px] bg-white shadow-custom flex items-center justify-center flex-col gap-[25px] rounded-[20px]">
            <div className="p-px bg-gradient-to-b from-[#6f3baf00] to-[#441355] w-[144px] h-[144px] rounded-full flex items-center justify-center">
              <div className="w-[139px] h-[139px] rounded-full bg-white flex items-center justify-center">
                <HiOutlineComputerDesktop className="text-[51px]" />
              </div>
            </div>
            <h1 className="text-[#441355] roboto text-[50px] leading-[59px] font-bold text-center">
              Third Party Monitoring
            </h1>
            <p className="alata text-3xl leading-[45px] text-center underline cursor-pointer">
              See More
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
