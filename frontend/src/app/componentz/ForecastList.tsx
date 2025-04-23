// componentz/ForecastList.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CloudRain, Snowflake, Sun } from "lucide-react";

// Forecast type
export type Forecast = {
  day: string;
  temperature: number;
  description: string;
  icon?: "sun" | "rain" | "snow";
};

// Props type
type Props = {
  data?: Forecast[]; // marked optional to prevent crashing if not passed
};

const ForecastList = ({ data }: Props) => {
  // Guard clause to prevent mapping undefined
  if (!data || !Array.isArray(data)) {
    return (
      <p className="text-center text-gray-500">No forecast data available.</p>
    );
  }

  // helper to pick icon
  const renderIcon = (icon?: string) => {
    switch (icon) {
      case "rain":
        return <CloudRain size={28} className="text-blue-500" />;
      case "snow":
        return <Snowflake size={28} className="text-blue-300" />;
      case "sun":
      default:
        return <Sun size={28} className="text-yellow-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((forecast, index) => (
        <Card key={index} className="bg-white/80 shadow-md rounded-lg">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <p className="text-md font-semibold text-gray-700">
              {forecast.day}
            </p>
            <div className="my-2">{renderIcon(forecast.icon)}</div>
            <p className="text-lg font-bold">{forecast.temperature}°</p>
            <p className="text-sm capitalize text-gray-500">
              {forecast.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ForecastList;
