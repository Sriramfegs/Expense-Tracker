import React, { useEffect, useState } from "react";
import CustomBarChart from "../Charts/CustomBarChart"
import {prepareExpenseBarChartData} from "../../utils/helper"
import { XAxis } from "recharts";

const Last30DaysExpenses = ({data}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("Received Data:", data);
    const result = prepareExpenseBarChartData(data);
    console.log("Chart Data:", result);
    setChartData(result);
    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>

      <CustomBarChart data={chartData} 
                  xAxisKey="category"/>
    </div>
  );
};

export default Last30DaysExpenses;
