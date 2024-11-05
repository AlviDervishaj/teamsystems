import { GithubResponse } from "@/types/Github";
import { useCallback, useEffect, useState } from "react";

const GH_API_URL =
  "https://api.github.com/search/repositories";

const itemsPerPage = 10;

// filter by => language, date created, page,

export const useApi = () => {
  const [data, setData] = useState<GithubResponse | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<Map<string, string>>(new Map());
  const [sortBy, setSortBy] = useState<Map<string, string>>(new Map());
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("desc");

  const toggleOrderBy = useCallback(() => {
    setOrderBy(prev => prev === "asc" ? "desc" : "asc");
  }, []);

  const addOrderBy = useCallback((order: "asc" | "desc") => {
    setOrderBy(order);
  }, []);

  const addSortBy = useCallback((key: string, value: string) => {
    setSortBy(prev => new Map(prev.set(key, value)));
  }, []);

  const addFilterBy = useCallback((key: string, value: string) => {
    setFilterBy(prev => new Map(prev.set(key, value)));
  }, []);

  const nextPage = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);


  const prevPage = useCallback(() => {
    setPage(prev => prev - 1);
  }, []);

  const goToPage = useCallback((pageNumber: number) => {
    setPage(pageNumber);
  }, []);

  const resetPage = useCallback(() => {
    setPage(1);
  }, []);

  const makeRequest = useCallback(async () => {
    console.log("Making Request");
    setIsLoading(true);
    const url = new URL(GH_API_URL);
    const query = url.searchParams.get("q");
    if (!filterBy.has("language") && (query || !query?.includes("language:"))) url.searchParams.set("q", "language:Javascript");
    filterBy.forEach((value, key) => {
      url.searchParams.set("q", `${key}:${value}`);
    });
    url.searchParams.set("sort", sortBy.get("sort") || "stars");
    url.searchParams.set("page", page.toString());
    url.searchParams.set("per_page", itemsPerPage.toString());
    url.searchParams.set("order", orderBy);
    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        setError(data.errors[0].message);
        setData(null);
        return;
      }
      setData(data);
    } catch (error: unknown) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [filterBy, orderBy, page, sortBy]);

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);


  return { data, isLoading, error, page, toggleOrderBy, addSortBy, addFilterBy, nextPage, prevPage, resetPage, goToPage, makeRequest, addOrderBy };
}
