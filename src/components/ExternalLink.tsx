import { forwardRef, HTMLProps, PropsWithChildren } from "react";

const ExternalLink = forwardRef<
  HTMLAnchorElement,
  HTMLProps<HTMLAnchorElement> & PropsWithChildren
>((props, ref) => {
  return (
    <a {...props} target="_blank" referrerPolicy="no-referrer" ref={ref}>
      {props.children}
    </a>
  );
});

export default ExternalLink;
