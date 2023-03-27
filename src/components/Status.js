import "../styles/Status.scss";
import coin from "../images/coin.png";
import sandclock from "../images/sandclock.png";
import Header from "./Status/StatusHeader";
import Footer from "./Status/StatusFooter";
import SideHeader from "./Status/StatusSideHeader";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  {
    name: "IT서비스",
    연봉: 3940,
    만족도: 70,
    amt: 2400,
  },
  {
    name: "게임SW",
    연봉: 4311,
    만족도: 72.8,
    amt: 2210,
  },
  {
    name: "인터넷SW",
    연봉: 4281,
    만족도: 72.37,
    amt: 2290,
  },
  {
    name: "패키지SW",
    연봉: 4348,
    만족도: 71.32,
    amt: 2000,
  },
];
const pieData = [
  { name: " 3년 이하", value: 92.9 },
  { name: " 3 ~ 5년", value: 111 },
  { name: " 5 ~ 10년", value: 73 },
  { name: " 10 ~ 15년", value: 72 },
  { name: " 15년 이상", value: 24 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
function Status() {
  return (
    <main>
      <div className="Stblank"></div>
      <div className="Status_container">
        <Header />
        <div className="container_chart">
          <div className="Text_con1">
            <span>IT 직업군 상세 현황</span>
          </div>
          <div className="set1">
            <div className="blank_text1">
              <div class="image_con1">
                <img class="image1" src={coin} />
              </div>
              <span>연봉 / 만족도</span>
            </div>
            <div className="first_chart">
              <BarChart
                width={670}
                height={500}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  stroke="#8884d8"
                  domain={[3900, 4350]}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#82ca9d"
                  domain={[68, 74]}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="연봉" fill="#8D8DAA" />
                <Bar yAxisId="right" dataKey="만족도" fill="#66BFBF" />
              </BarChart>
            </div>
            <div className="Update_text1">
              <span>Last Upadated : 2022-11-07</span>
            </div>
          </div>
          <div className="set2">
            <div className="blank_text2">
              <div class="image_con2">
                <img class="image3" src={sandclock} />
              </div>
              <span>근속 연차</span>
            </div>
            <div className="second_chart">
              <PieChart width={670} height={500}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={200}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="Update_text2">
              <span>Last Upadated : 2022-11-07</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="status_box">
        <SideHeader />
      </div>
    </main>
  );
}
export default Status;
