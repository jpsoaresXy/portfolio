"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Starting the engine",
  },
  {
    text: "Checking the oil",
  },
  {
    text: "Checking the brakes",
  },
  {
    text: "Checking the lights",
  },
  {
    text: "Checking the nuclear fuel",
  },
  {
    text: "Checking the multiverse bridge",
  },
  {
    text: "Checking the flux capacitor",
  },
  {
    text: "Welcome to the future",
  },
];

export function Preloader({ isLoading }: { isLoading: boolean }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader
        loadingStates={loadingStates}
        loading={isLoading}
        duration={1000}
      />
    </div>
  );
}
