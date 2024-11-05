import { Table } from "./Table";
import { SortBy } from "./SortOptions";
import { useApi } from "../hooks/useApi";
import { useRef } from "react";

export const App = () => {
  const { data, isLoading, error, addFilterBy, makeRequest, addSortBy } = useApi();
  const languageFilterRef = useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    const language = languageFilterRef.current?.value;
    if (!language || language.trim() === "") return;
    addFilterBy("language", language);
    makeRequest();
  }

  const handleSortSelection = (filter: string) => {
    if (filter === "") return;
    console.log({ filter });
    addSortBy("sort", filter);
  }

  return (
    <section className="w-dvw h-dvh overflow-y-auto bg-slate-800 space-y-4">
      <h2 className="text-2xl text-center text-slate-200 tracking-wide">App Component</h2>
      <div className="w-dvw flex flex-row items-center content-center justify-center">
        <SortBy
          sortBy={{ created: "Created", stars: "Stars" }}
          handleSortSelection={(filter) => handleSortSelection(filter)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Filter by language..."
          ref={languageFilterRef}
        />
        <button
          className="py-2 px-4 mx-auto bg-slate-300 rounded-md hover:bg-slate-300/80 transition-colors duration-300 ease-in-out"
          onClick={handleFilter}>
          Filter
        </button>
      </div>
      {isLoading && <p className="text-4xl text-center text-slate-200">Loading...</p>}
      {error && <p>{error}</p>}
      {data && <Table data={data} />}
    </section>
  );
};
