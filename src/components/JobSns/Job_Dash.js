import "../../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Bar,BarChart,XAxis,Legend,CartesianGrid,YAxis, PieChart,Pie } from "recharts";
import { Tooltip } from "@mui/material";
import '../../styles/Jobsns/Job_chart.scss'

const data = [
  {
    "name": "Page A",
    "pv": 2400
  },
  {
    "name": "Page B",
    "pv": 1398
  },
  {
    "name": "Page C",
    "pv": 9800
  },
  {
    "name": "Page D",
    "pv": 3908
  }
]

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  }
 
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];




function Job_Dash() {
  return (
    <div className="App">
      <Header />
      <main className="chart_main">
      <div className="chart1">
        <BarChart width={500} height={250} data={data} >
           <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
                <Tooltip />
               <Legend />
              <Bar dataKey="pv" fill="#1c13dd" />
          </BarChart>
          </div>
          
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
          
          <div className="chart3">
            <PieChart width={1000} height={500}>
             <Pie data={data02} dataKey="value" nameKey="name" cx="15%" cy="20%" outerRadius={50} fill="#1c13dd" label="dd" />
            </PieChart>
           </div>
          
       </main>
      <Footer />
    </div>
  );
}
export default Job_Dash;
