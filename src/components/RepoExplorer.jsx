import { useState } from "react";
import { searchRepositories } from "../services/githubApi";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";
import RepoCard from "./RepoCard";
import Pagination from "./Pagination";
import RepoFilters from "./RepoFilters";

const RepoExplorer = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");

  const performSearch = async (
    pageNum = 1,
    sortValue = sort,
    orderValue = order,
  ) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setPage(pageNum);

    try {
      const data = await searchRepositories(
        query,
        pageNum,
        30,
        sortValue,
        orderValue,
      );
      setRepos(data.items);
      setTotalCount(data.total_count);
      setHasSearched(true);
    } catch (err) {
      setError(err.message);
      setRepos([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e, pageNum = 1) => {
    if (e?.preventDefault) e.preventDefault();
    await performSearch(pageNum);
  };

  const handleFilterChange = (type, value) => {
    if (type === "sort") setSort(value);
    else setOrder(value);
    if (hasSearched && query.trim())
      performSearch(
        1,
        type === "sort" ? value : sort,
        type === "order" ? value : order,
      );
  };

  const totalPages = Math.ceil(totalCount / 30);

  const containerClass = `bg-gradient-to-br from-gray-900 via-gray-900 py-8 px-4 ${hasSearched ? "min-h-full" : "h-full flex items-center justify-center"}`;

  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          GitHub Repository Explorer
        </h1>
        <p className="text-gray-400">Search and explore GitHub repositories</p>
      </div>
      <SearchForm
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={(e) => handleSearch(e, 1)}
        placeholder="Search repositories (e.g., react, python)..."
        loading={loading}
        buttonText="Search"
      />
      {hasSearched && (
        <RepoFilters
          sort={sort}
          order={order}
          onSortChange={(v) => handleFilterChange("sort", v)}
          onOrderChange={(v) => handleFilterChange("order", v)}
          disabled={loading}
        />
      )}
      <ErrorMessage message={error} className="max-w-3xl" />
      {hasSearched && !loading && (
        <div className="mb-6 text-center">
          <p className="text-gray-400">
            Found{" "}
            <span className="text-white font-semibold">
              {totalCount.toString()}
            </span>{" "}
            repositories
          </p>
        </div>
      )}
      {repos.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                showOwner={true}
                variant="enhanced"
                dateFormat={{ year: "numeric", month: "short", day: "numeric" }}
              />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(pageNum) => performSearch(pageNum)}
            loading={loading}
          />
        </>
      )}

      {hasSearched && repos.length === 0 && !loading && !error && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No repositories found. Try a different search query
          </p>
        </div>
      )}
    </div>
  );
};

export default RepoExplorer;
