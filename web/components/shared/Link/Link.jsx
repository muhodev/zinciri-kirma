import NextLink from "next/link";

export function Link(props) {
  return (
    <NextLink href={props.href}>
      <a className={props.className}>{props.children}</a>
    </NextLink>
  );
}
