import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import logoSrc from "~/assets/images/logo.svg";

export const Logo = component$(() => {
  return (
    <Link href="/">
      <img src={logoSrc} width={150} />
    </Link>
  );
});