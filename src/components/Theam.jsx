import img from "../assets/01_Phone_Mockup 1.png";
import { TbRibbonHealth } from "react-icons/tb";

export default function Theam() {
  return (
    <div className="px-10">
      <h1 className="text-[#441355] text-[100px] leading-[120px] font-bold roboto text-center">
        Thematic Areas
      </h1>
      <p className="text-[#4A4A4B] alata text-3xl text-center">
        Smart Vision for Consultancy and Development was incorporated in 2011 in
        Somalia.
      </p>
      <div className="flex items-center justify-between">
        <div className="space-y-[25px]">
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Health
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Nutrition
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Education
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Food Security
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Quality Infrastructure
            </p>
          </div>
        </div>
        <div className="h-[1019px] w-[490px]">
          <img src={img} alt="" className="h-full w-full" />
        </div>
        <div className="space-y-[25px]">
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Health
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Nutrition
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Education
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Food Security
            </p>
          </div>
          <div className="w-[469px] h-[121px] rounded-[100px] bg-[#441355] flex items-center p-3 gap-4">
            <p className="bg-[#FB4738] w-[94px] h-[97px] rounded-full flex items-center justify-center">
              <TbRibbonHealth className="text-[50px] text-white" />
            </p>
            <p className="roboto font-medium text-[40px] text-center text-white">
              Quality Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
