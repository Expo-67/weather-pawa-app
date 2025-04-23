"use client";
import React, { useState } from "react";
import Header from "./componentz/Header";
import WeatherMainCard from "./componentz/WeatherMainCard";
import StatusCard from "./componentz/StatusCard";
import UnitToggle from "./componentz/UnitToggle";
import ForecastList from "./componentz/ForecastList";
import { Forecast } from "./componentz/ForecastList";

export default function Home() {
  // State for temperature unit
  const [unit, setUnit] = useState<"C" | "F">("C");

  // Toggle handler
  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  //mock data for forecast
  const forecastData: Forecast[] = [
    { day: "Tue", temperature: 27, description: "Cloudy", icon: "sun" },
    { day: "Wed", temperature: 23, description: "Rainy", icon: "rain" },
    { day: "Thu", temperature: 19, description: "Snowy", icon: "snow" },
  ];
  return (
    <main className="min-h-screen bg-sky-200 text-gray-900">
      {/* The header component */}
      <Header />
      {/* Main weather card component */}
      <WeatherMainCard
        city="Nairobi"
        temperature={26}
        unit="C"
        description="Sunny"
        date="Monday, April 22"
        icon="sun"
      />
      {/* Unit toggle component for Celcius and Ferenheit */}
      <UnitToggle unit={unit} onToggle={toggleUnit} />
      {/* Forecast for 3 days component */}
      <ForecastList data={forecastData} />
      {/* Status card component */}
      <StatusCard humidity={68} windSpeed={14} feelsLike={28} unit={unit} />
    </main>
  );
}
