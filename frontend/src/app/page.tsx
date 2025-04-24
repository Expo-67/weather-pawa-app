"use client";

import React, { useState } from "react";
import Header from "./componentz/Header";
import WeatherMainCard from "./componentz/WeatherMainCard";
import StatusCard from "./componentz/StatusCard";
import UnitToggle from "./componentz/UnitToggle";
import ForecastList, { Forecast } from "./componentz/ForecastList";
import axios from "axios";

// Define strict type for weather icon to ensure consistency
type WeatherIcon = "sun" | "cloud" | "rain" | "snow";

export default function Home() {
  // Temperature unit toggle between Celsius and Fahrenheit
  const [unit, setUnit] = useState<"C" | "F">("C");

  // State variables for current weather data
  const [city, setCity] = useState("Nairobi");
  const [temperature, setTemperature] = useState(26);
  const [description, setDescription] = useState("Sunny");
  const [icon, setIcon] = useState<WeatherIcon>("sun");
  const [date, setDate] = useState("Monday, April 22");
  const [humidity, setHumidity] = useState(68);
  const [windSpeed, setWindSpeed] = useState(14);
  const [feelsLike, setFeelsLike] = useState(28);

  // State to hold forecast data
  const [forecastData, setForecastData] = useState<Forecast[]>([]);

  // Toggles unit between C and F
  const toggleUnit = () => setUnit((prev) => (prev === "C" ? "F" : "C"));

  // Fetch weather data by city name
  const handleSearch = async (cityName: string) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Securely using env variable
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const weather = weatherRes.data;
      const iconCode: string = weather.weather[0].main.toLowerCase(); // Normalize for mapping

      // Maps OpenWeather icon names to your local icon set
      const iconMap: Record<string, WeatherIcon> = {
        clouds: "cloud",
        rain: "rain",
        drizzle: "rain",
        snow: "snow",
        clear: "sun",
      };

      const iconKey: WeatherIcon = iconMap[iconCode] ?? "sun"; // Fallback to 'sun'

      // Update state with new weather data
      setCity(weather.name);
      setTemperature(Math.round(weather.main.temp));
      setFeelsLike(Math.round(weather.main.feels_like));
      setDescription(weather.weather[0].description);
      setHumidity(weather.main.humidity);
      setWindSpeed(Math.round(weather.wind.speed));
      setDate(
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
      setIcon(iconKey);

      // Placeholder forecast data for UI testing — replace with real API later
      const forecastMock: Forecast[] = [
        { day: "Tue", temperature: 27, description: "Cloudy", icon: "sun" },
        { day: "Wed", temperature: 23, description: "Rainy", icon: "rain" },
        { day: "Thu", temperature: 19, description: "Snowy", icon: "snow" },
      ];
      setForecastData(forecastMock);
    } catch (err) {
      console.error("Error fetching city weather:", err); // Consider user-facing error display
    }
  };

  // Main component layout
  return (
    <main className="min-h-screen bg-sky-200 text-gray-900">
      <Header onSearch={handleSearch} />
      <WeatherMainCard
        city={city}
        temperature={
          unit === "F" ? Math.round((temperature * 9) / 5 + 32) : temperature
        }
        unit={unit}
        description={description}
        date={date}
        icon={icon}
      />
      <UnitToggle unit={unit} onToggle={toggleUnit} />
      <ForecastList data={forecastData} />
      <StatusCard
        humidity={humidity}
        windSpeed={windSpeed}
        feelsLike={
          unit === "F" ? Math.round((feelsLike * 9) / 5 + 32) : feelsLike
        }
        unit={unit}
      />
    </main>
  );
}
