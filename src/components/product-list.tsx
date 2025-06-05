import { ReactNode } from "react";

interface IProductListProps {
  title: string;
  children: ReactNode;
}

export default function ProductList({ title, children }: IProductListProps) {
  return (
    <div className="space-y-4" id="product">
      <h3 className="font-bold text-3xl">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}
