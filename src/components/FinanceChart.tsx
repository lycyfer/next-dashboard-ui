"use client";

import Image from "next/image";
import MoreDark from "../../svg/126574_more_icon.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3800,
    expense: 2200,
  },
  {
    name: "Mar",
    income: 3600,
    expense: 2000,
  },

  {
    name: "Apr",
    income: 3400,
    expense: 2000,
  },
  {
    name: "May",
    income: 3200,
    expense: 1800,
  },
  {
    name: "Jun",
    income: 3000,
    expense: 1600,
  },

  {
    name: "Jul",
    income: 2800,
    expense: 1400,
  },
  {
    name: "Aug",
    income: 2600,
    expense: 1200,
  },
  {
    name: "Sep",
    income: 2200,
    expense: 1000,
  },
  {
    name: "Oct",
    income: 2000,
    expense: 800,
  },
  {
    name: "Noy",
    income: 1800,
    expense: 600,
  },
  {
    name: "Dec",
    income: 1600,
    expense: 400,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#FAE27C"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
