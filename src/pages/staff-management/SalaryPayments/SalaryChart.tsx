import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";
import { ApexOptions } from "apexcharts";

// components
import Loader from "../../../components/Loader";

// types
import { ApexLinearChartData } from "../../charts/data";

interface ColumnChartProps {
  basicColumnChartData: ApexLinearChartData;
  showLoader?: boolean;
}

const SalaryChart = ({
  basicColumnChartData,
  showLoader,
}: ColumnChartProps) => {
  const options: ApexOptions = {
    chart: {
      height: 200,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      offsetY: 5,
    },
    yaxis: {
      title: {
        text: "Rs (Lacs)", // Change the y-axis title
      },
      min: 0, // Set the minimum value of the y-axis
      max: 1500000, // Set the maximum value of the y-axis
      tickAmount: 3, // Set the number of ticks on the y-axis
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return "Rs " + val + " thousands";
        },
      },
    },
  };

  const series = [
    // {
    //   name: "Net Profit",
    //   data: basicColumnChartData.data1 || [],
    // },
    {
      name: "Salary",
      data: basicColumnChartData.data2 || [],
    },
    // {
    //   name: "Free Cash Flow",
    //   data: basicColumnChartData.data3 || [],
    // },
  ];

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-3">Salary Chart (G for Grade)</h4>
        {showLoader ? (
          <div style={{ height: 200, position: "relative" }}>
            <Loader />
          </div>
        ) : (
          <Chart
            options={options}
            series={series}
            type="bar"
            height={200}
            className="apex-charts"
            dir="ltr"
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default SalaryChart;