import { component$ } from "@builder.io/qwik";
import { HeadInfo } from "~/components/head-info/head-info";
import { PlayList } from "~/components/play-list/play-list";

export default component$(() => {
  return (
    <div>
      <HeadInfo title="My favorites songs ❤️" />
      <PlayList />
    </div>
  );
});