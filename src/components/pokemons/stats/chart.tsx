"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { SkeletonCard } from "../card";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const StatsChart = ({
  data,
  className,
}: {
  data: ChartData<"radar", number[], string>;
  className?: string;
}) => {
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 10,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <Radar
      data={data}
      className={className}
      options={options}
      fallbackContent={<SkeletonCard />}
    />
  );
};

export default StatsChart;
