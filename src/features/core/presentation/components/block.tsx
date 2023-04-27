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
  if (size! == BlockSize.normal) {
    return (
      <div className="block-normal">{children}</div>
    );
  }

  return (
    <div className="block-normal">{children}</div>
  );
}
