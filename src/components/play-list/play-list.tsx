import {
    component$,
    createContext,
    Resource,
    useContextProvider,
    useResource$,
    useStore,
  } from "@builder.io/qwik";
  import { getData } from "~/api/data";
  import { PlayFilter } from "../play-filter/play-filter";
  import { PlayFilterOptions } from "../play-filter/play-filter-options";
  import { PlayListItem } from "./play-list-item";
  
  export interface PlayListContextProp {
    openFilter: boolean;
    options: { label: string; value: string }[];
  }
  
  export const PlayListContext =
    createContext<PlayListContextProp>("play-list-context");
  
  export const PlayList = component$(() => {
    const state = useStore({
      openFilter: false,
    });
  
    const resourceData = useResource$(() => {
      return getData()
    })
  
    useContextProvider(PlayListContext, state);
  
    return (
      <div
        class={"pl-14  min-h-[calc(100vh_-_206px_-_76px)] flex flex-col gap-2"}
      >
        <div class={"flex gap-5"}>
          <PlayFilter
            values={[
              { label: "Moderate", value: "Moderate" },
              { label: "Calm", value: "Moderate" },
              { label: "Energetic", value: "Moderate" },
              { label: "Internse", value: "Moderate" },
              { label: "Very Calm", value: "Moderate" },
            ]}
            label="Energy"
          />
          <PlayFilter values={[]} label="Vocals" />
          <PlayFilter values={[]} label="Duration" />
        </div>
        {state.openFilter ? (
          <div class={"flex pb-3"}>
            <PlayFilterOptions />
          </div>
        ) : null}
        <div class={" bg-gray-100 rounded-t-2xl "}>
          <div class={"p-6 py-4  border-gray-200"}></div>
          <div class={"p-6 flex flex-col gap-2"}>
            <Resource value={resourceData} 
            onPending={() => <>Cargando...</>} 
            onRejected={() => <>Error!</>}
            onResolved={(data) => data.map((i:any) => <PlayListItem {...i} />)}
             />
          </div>
        </div>
      </div>
    );
  });