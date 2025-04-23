// component for WeatherMainCard
"use client";

import React from "react";

// imported from shadcn/ui
import { Card, CardContent } from "@/components/ui/card";

// weather icons from lucide-react
import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

// props expected to be passed to the component
type Props = {
  city: string; // city name
  temperature: number; // temperature value
  unit: "C" | "F"; // temperature unit (Celsius or Fahrenheit)
  description: string; // weather condition description
  date: string; // date string
  icon?: "sun" | "cloud" | "rain" | "snow"; // optional weather icon
};

// WeatherMainCard functional component
const WeatherMainCard = ({
  city,
  temperature,
  unit,
  description,
  date,
  icon = "sun", // the default icon is sun when rendered
}: Props) => {
  //  function to render the appropriate weather icon
  const renderIcon = () => {
    switch (icon) {
      case "cloud":
        return <Cloud size={64} className="text-blue-400" />;
      case "rain":
        return <CloudRain size={64} className="text-blue-500" />;
      case "snow":
        return <Snowflake size={64} className="text-blue-300" />;
      case "sun":
      default:
        return <Sun size={64} className="text-yellow-400" />;
    }
  };

  return (
    // The main weather card goes here
    <Card className="max-w-xl mx-auto mt-6 bg-white/80 shadow-xl rounded-xl">
      <CardContent className="flex flex-col items-center text-center py-6 gap-4">
        {/* Icon section at the top */}
        {renderIcon()}

        {/* Temperature display (large and bold) */}
        <div className="flex items-center text-5xl font-bold">
          <span>{temperature}</span>
          <span className="text-2xl ml-1">°{unit}</span>
        </div>

        {/* Weather description ( */}
        <p className="capitalize text-lg text-gray-600">{description}</p>

        {/* City name and  date */}
        <p className="text-sm text-gray-500">
          {city} • {date}
        </p>
      </CardContent>
    </Card>
  );
};

export default WeatherMainCard;
