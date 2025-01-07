import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { MDXComponentProps } from "@/types/types";
import { FC } from "react";

const sharedComponents = {
  Image,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const MDXContent: FC<MDXComponentProps> = ({ code, components, ...props }) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};

export default MDXContent;
