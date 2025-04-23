// the component for UnitToggle
"use client";
import React from "react";

// The props for the toggle
type Props = {
  unit: "C" | "F"; // unit to be displayed
  onToggle: () => void; // switch between C and F
};

const UnitToggle = ({ unit, onToggle }: Props) => {
  return (
    <div className="flex justify-center mt-4">
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="bg-sky-200 text-sky-900 font-medium px-4 py-2 rounded-full shadow hover:bg-sky-300 transition"
      >
        Switch to °{unit === "C" ? "F" : "C"}
      </button>
    </div>
  );
};

export default UnitToggle;
