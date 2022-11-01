import "../styles/Status.scss";
import Header from "./Status/StatusHeader";
import Footer from "./Status/StatusFooter";
import Sidebar from "./Status/StatusSidebar";
import {
  Bar,
  BarChart,
  XAxis,
  Legend,
  CartesianGrid,
  YAxis,
  PieChart,
  Pie,
} from "recharts";
import { Tooltip } from "@mui/material";

const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
];

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

function Status() {
  return (
    <main>
      <div className="blank"></div>
      <div className="Status_container">
        <Header />
        <div className="container_chart">
          <div className="first_chart">
            <h2>연봉</h2>
            <div className="chart1">
              <BarChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={["dataMin-100", "dataMax+100"]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1c13dd" />
              </BarChart>
            </div>
          </div>
          <div className="second_chart">
            <h2>연봉</h2>
            <div className="chart2">
              <BarChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1c13dd" />
              </BarChart>
            </div>
          </div>
          <div className="third_chart">
            <h2>연봉</h2>
            <div className="chart3">
              <PieChart width={500} height={500}>
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="15%"
                  cy="20%"
                  outerRadius={50}
                  fill="#1c13dd"
                />
              </PieChart>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="box">
        <Sidebar />
      </div>
    </main>
  );
}
export default Status;
