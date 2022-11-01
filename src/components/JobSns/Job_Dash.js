import "../../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Bar,BarChart,XAxis,Legend,CartesianGrid,YAxis, PieChart,Pie } from "recharts";
import { Tooltip } from "@mui/material";
import '../../styles/Jobsns/Job_chart.scss'

const data = [
  {
    name: "IT서비스",
    pv: 3940,
  },
  {
    name: "게임SW",
    pv: 4311,
  },
  {
    name: "인터넷SW",
    pv: 4281,
  },
  {
    name: "패키지SW",
    pv: 4348,
  },
];
const data01 = [
  {
    name: "IT서비스",
    pv: 70,
  },
  {
    name: "게임SW",
    pv: 72.8,
  },
  {
    name: "인터넷SW",
    pv: 72.37,
  },
  {
    name: "패키지SW",
    pv: 71.32,
  },
];
const data02 = [
  {
    name: "3년이하",
    value: 92.9,
  },
  {
    name: "3~5년",
    value: 111,
  },
  {
    name: "5~10년",
    value: 73,
  },
  {
    name: "10~15년",
    value: 72,
  },
  {
    name: "15년 이상",
    value: 24,
  },
];




function Job_Dash() {
  return (
    <>
    <div className="Dash_App">
      <Header />
      <main className="chart_main">
      <div className="chart1">
        <h2>연봉</h2>
        <BarChart width={500} height={250} data={data}  >
           <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis type="number" domain={['dataMin-100', 'dataMax+100']}/>
                <Tooltip/>
               <Legend />
              <Bar dataKey="pv" fill="#1c13dd" />
          </BarChart>
          </div>
          
          <div className="chart2">
          <h2>연봉</h2>
          <BarChart width={500} height={250} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
                <Tooltip />
               <Legend />
              <Bar dataKey="pv" fill="#1c13dd" />
          </BarChart>
          </div>
          
          <div className="chart3">
          <h2>연봉</h2>
            <PieChart width={1000} height={500}>
             <Pie data={data02} dataKey="value" nameKey="name" cx="15%" cy="20%" outerRadius={50} fill="#1c13dd" />
            </PieChart>
           </div>
          
       </main>
      <Footer />
    </div>
    </>
  );
}
export default Job_Dash;
