import { FC } from 'react';

interface SortByOptions {
  sortBy: { [key: string]: string };
  handleSortSelection: (filter: string) => void;
  placeholder?: string,
}

export const SortBy: FC<SortByOptions> = ({ sortBy, handleSortSelection, placeholder }) => {
  return (
    <section className="!w-fit h-fit m-2">
      <select id="filter-select" className="p-2" onChange={(e) => handleSortSelection(e.target.value)}>
        <option value="">{placeholder || "Sort By"}</option>
        {Object.keys(sortBy).map((key, index) => (
          <option key={index} value={key}>
            {sortBy[key]}
          </option>
        ))}
      </select>
    </section>
  );
};
