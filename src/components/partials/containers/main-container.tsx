import type TPropsWithChildren from "@/core/types";

const MainContainer = ({ children }: TPropsWithChildren) => {
  return (
    <div className="mx-auto max-w-7xl max-[1024px]:px-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50 z-[-1]"
      >
        <div className="blur-[106px] h-52 bg-gradient-to-r from-personaPurple to-personaPri"></div>
        <div className="blur-[106px] h-56 bg-gradient-to-br from-personaSec to-personaBlue"></div>
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
