import NextHead from "next/head";

export function Head(props) {
  return (
    <NextHead>
      <title>Zinciri Kırma {props.title && ` | ${props.title}`}</title>
    </NextHead>
  );
}
