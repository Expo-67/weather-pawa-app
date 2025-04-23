// The status card component
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; //imported from shadcn
import { Wind, Droplet, Thermometer } from "lucide-react"; // weather icons

// the props
type Props = {
  humidity: number; //  humidity
  windSpeed: number; // wind speed in km/h
  feelsLike: number; //  temperature
  unit: "C" | "F"; // temperature unit
};

const StatusCard = ({ humidity, windSpeed, feelsLike, unit }: Props) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Humidity */}
      <Card className="bg-white/80 shadow-md rounded-lg">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Droplet className="text-blue-500" size={28} />
          <p className="font-bold text-lg mt-2">{humidity}%</p>
          <p className="text-sm text-gray-600">Humidity</p>
        </CardContent>
      </Card>

      {/* Wind Speed */}
      <Card className="bg-white/80 shadow-md rounded-lg">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Wind className="text-gray-600" size={28} />
          <p className="font-bold text-lg mt-2">{windSpeed} km/h</p>
          <p className="text-sm text-gray-600">Wind Speed</p>
        </CardContent>
      </Card>

      {/* Feels Like */}
      <Card className="bg-white/80 shadow-md rounded-lg">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Thermometer className="text-red-500" size={28} />
          <p className="font-bold text-lg mt-2">
            {feelsLike}°{unit}
          </p>
          <p className="text-sm text-gray-600">Feels Like</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCard;
