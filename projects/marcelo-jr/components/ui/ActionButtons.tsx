import { ReactNode } from "react";

type ActionButtonsProps = {
  children: ReactNode;
};

export default function ActionButtons({ children }: ActionButtonsProps) {
  return <div className="grid grid-cols-3 gap-3">{children}</div>;
}
