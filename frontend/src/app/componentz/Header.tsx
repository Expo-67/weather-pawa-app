// componentz/Header.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md rounded-b-xl">
      {/* title */}
      <h1 className="text-2xl font-bold tracking-tight">Weather Pawa-app</h1>
      {/* /search  */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search city..."
          className="bg-white text-black placeholder:text-gray-500 max-w-xs"
        />

        <Button
          variant="secondary"
          className="bg-white text-black hover:bg-gray-100"
        >
          <Search size={20} />
        </Button>
      </div>
    </header>
  );
};
export default Header;
