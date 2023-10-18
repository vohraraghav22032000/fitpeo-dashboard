import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { WidgetOptions } from "../utils/options";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import Table from "../components/Table";
// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  // const [show, setShow] = useState(false);

  return (
    <div
      className="admin-container"
      // style={{
      //   gridTemplateColumns: show ? "1fr 4fr" : "1fr",
      //   paddingLeft: "2rem",
      // }}
    >
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          {/* {show ? <></> : <GiHamburgerMenu onClick={() => setShow(true)} />} */}
          <h3>Hello Ram 👋,</h3>
          <input placeholder="Search" />
        </div>
        <div className="widget-container">
          {WidgetOptions.map((widget, i) => (
            <Widget key={i} {...widget} />
          ))}
        </div>
        <section className="graph-container">
          <BarChart />
          <PieChart />
        </section>
        <Table />
      </main>
    </div>
  );
};

export default Dashboard;
