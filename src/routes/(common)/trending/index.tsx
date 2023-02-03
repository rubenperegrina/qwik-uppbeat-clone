import { component$ } from "@builder.io/qwik";
import { HeadInfo } from "~/components/head-info/head-info";

export default component$(() => {
    return (
        <div>
          <HeadInfo title="Trending 📈" />
        </div>
    );
});