import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function SearchBar({ placeholder = "Search shoes, brands..." }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      <Button type="submit" size="lg">
        Search
      </Button>
    </form>
  );
}
