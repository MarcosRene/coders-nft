import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"section"> & {
  children: ReactNode;
};

export default function Container({ children, ...attrs }: ContainerProps) {
  return (
    <section className={twMerge("px-4 md:px-20 lg:px-24", attrs.className)}>
      {children}
    </section>
  );
}
