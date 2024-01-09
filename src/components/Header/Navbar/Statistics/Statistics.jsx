import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip,} from "recharts";
import { getDataLS } from "../../../../LocalStoragedata";

const Statistics = () => {
  const data = useLoaderData();
  const COLORS = ["#FF444A", "#00C49F"];
  const donate = getDataLS();
  const dLength = data.length;
  const Dlength = donate.length;

  // const total = parseInt(data.length) - parseInt(donate.length)
  const main = [
    { name: "Total donation", value: dLength },
    { name: "Your donation", value: Dlength },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }; 
  return (
    <div className="md:w-[800px] md:h-[600px] mx-auto">
     <div className="w-[500px] mx-auto">
     <PieChart width={400} height={400}>
        <Pie
          data={main}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#00C49F"
          dataKey="value"
          nameKey="name"
        >
          {main.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>
      <div className="flex gap-10 mx-auto"><h2 className="flex gap-2 justify-items-center items-center" >Total Donation <p className="bg-[#FF444A] w-[100px] h-[12px] rounded-lg"></p></h2>
      <h2 className="flex gap-2 justify-items-center items-center "> Your Donation <p className="bg-[#00C49F] w-[100px] h-[12px] rounded-lg"></p></h2>
      </div>
     </div>
    </div>
  );
};

export default Statistics;
