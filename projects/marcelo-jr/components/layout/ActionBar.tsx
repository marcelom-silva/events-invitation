import { ReactNode } from "react";

type ActionBarProps = {
  children: ReactNode;
};

export default function ActionBar({ children }: ActionBarProps) {
  return <div className="grid grid-cols-3 gap-3">{children}</div>;
}
