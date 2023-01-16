import "./Button.scss";
import classnames from "classnames";
import { PropsWithChildren } from "react";

type IButtonProps<TTag extends "a" | "button"> = {
  className?: string;
  tag?: TTag;
} & PropsWithChildren;

function Button<TTag extends "a" | "button" = "button">(
  props: IButtonProps<TTag>
) {
  const Tag = props.tag ?? "button";
  return (
    <Tag className={classnames("button", props.className)} role="button">
      {props.children}
    </Tag>
  );
}

export default Button;
