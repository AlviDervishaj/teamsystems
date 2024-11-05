import React, { memo, useMemo } from 'react';
import { GithubResponse } from '../types/Github';

import dayjs from "dayjs";


type TableProps = {
  data: GithubResponse;
}
const availableColumns: string[] = ["id", "name", "full_name", "owner", "description", "watchers", "created_at", "visibility"];

const TableElement: React.FC<TableProps> = ({ data }) => {
  const tableHeader = useMemo(() => Object.keys(data.items[0]), [Object.keys(data.items[0]).join("-")]);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption>Hello hehehe</caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {tableHeader.map((key) =>
            availableColumns.includes(key) ?
              <th key={key} scope="col" className="px-6 py-3 capitalize">
                {key}
              </th>
              : null)}
        </tr>
      </thead >
      <tbody>
        {data.items.map((item) => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {tableHeader.map((key) =>
              availableColumns.includes(key) ?
                <td key={key} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                  {key === "created_at" ? dayjs(item[key as keyof typeof item]).format("DD-MM-YYYY") : typeof item[key as keyof typeof item] === "object" ? item[key as keyof typeof item]["login"] : item[key as keyof typeof item]}
                </td>
                : null)}
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export const Table = memo(TableElement, (prevProps, nextProps) => {
  return prevProps.data.total_count === nextProps.data.total_count;
});
