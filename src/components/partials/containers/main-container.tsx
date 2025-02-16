import type TPropsWithChildren from "@/core/types";

const MainContainer = ({ children }: TPropsWithChildren) => {
  return <div className="mx-auto max-w-7xl max-[1024px]:px-5">{children}</div>;
};

export default MainContainer;
