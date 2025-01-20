import type IBillboard from "@/features/billboards/core/types";
import Image from "next/image";

const Billboard = ({ data }: { data: IBillboard | undefined }) => {
  return (
    <div className="p-4 overflow-hidden sm:p-6 lg:p-8">
      <div className="size-full flex flex-col justify-center items-center text-center gap-y-8 ">
        <img
          src={`${data?.imageUrl}`}
          alt="Banner Personafolio"
          className="w-full object-cover h-[150px] lg:h-[220px] sm:h-[250px]"
        />
        <div className="absolute max-w-xs text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl text-black">
          {data?.label}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
