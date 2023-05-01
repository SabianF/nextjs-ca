import { ReactNode } from "react";

enum BlockSize {
  normal,
}

type BlockProps = {
  children?: ReactNode,
  size?: BlockSize,
}

export const Block = (
  {
    children,
    size,
  }: BlockProps,
) => {
  const baseClasses = "block-normal ";

  if (size! == BlockSize.normal) {
    return (
      <div className={baseClasses}>{children}</div>
    );
  }

  return (
    <div className={baseClasses}>{children}</div>
  );
}
