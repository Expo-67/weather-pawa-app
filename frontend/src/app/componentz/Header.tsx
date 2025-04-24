"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  onSearch: (city: string) => void;
};

const Header = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) onSearch(city);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="flex justify-center gap-2 p-4 w-full">
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city..."
        className="max-w-xs"
      />
      <Button onClick={handleSearch} variant="default">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </header>
  );
};

export default Header;
