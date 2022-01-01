import React from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import Table from "../../Components/Tables/Table";

import StatusCards from "../../Components/StatusCard/StatusCards";

import statusCards from "../../Assets/Data/statusCard.json";

import Badge from "../../Components/Badges/Badge.jsx";

import "./Dashboard.css";

const chartOptions = {
  series: [
    {
      name: "Local transcript request",
      data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "Foreign transcript request",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    chart: {
      background: "transparent"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "bottom"
    },
    grid: {
      show: true
    }
  }
};

const topCustomers = {
  head: ["faculty", "population size"],
  body: [
    {
      id: "#OD1711",
      faculty: "engineering",
      date: "17 Jun 2021",
      population_size: "900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      faculty: "sciense",
      date: "1 Jun 2021",
      population_size: "400",
      status: "paid"
    },
    {
      id: "#OD1713",
      faculty: "art & culture",
      date: "27 Jun 2021",
      population_size: "200",
      status: "pending"
    },
    {
      id: "#OD1712",
      faculty: "commerce",
      date: "1 Jun 2021",
      population_size: "400",
      status: "paid"
    },
    {
      id: "#OD1713",
      faculty: "environmental studies",
      date: "27 Jun 2021",
      population_size: "200",
      status: "refund"
    }
  ]
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.faculty}</td>
    <td>{item.population_size}</td>
  </tr>
);

const latestOrders = {
  header: ["department", "population size", "date of est", "status"],
  body: [
    {
      id: "#OD1711",
      department: "electrical engineering",
      date_of_est: "17 Jun 2021",
      population_size: "900",
      status: "accredited"
    },
    {
      id: "#OD1712",
      department: "mathematics",
      date_of_est: "1 Jun 2021",
      population_size: "400",
      status: "accredited"
    },
    {
      id: "#OD1713",
      department: "sculpture",
      date_of_est: "27 Jun 2021",
      population_size: "200",
      status: "pending"
    },
    {
      id: "#OD1712",
      department: "physics",
      date_of_est: "1 Jun 2021",
      population_size: "400",
      status: "accredited"
    },
    {
      id: "#OD1713",
      department: "banking & finance",
      date_of_est: "27 Jun 2021",
      population_size: "200",
      status: "accredited"
    }
  ]
};

const orderStatus = {
  // shipping: "primary",
  pending: "warning",
  accredited: "success",
  // refund: "danger"
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr>
    <td>{item.department}</td>
    <td>{item.population_size}</td>
    <td>{item.date_of_est}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="pageHeader">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                {/*statuscard data*/}

                <StatusCards
                  title={item.title}
                  count={item.count}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card fullHeight">
            {/* graphic area */}
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
              className="grafik"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="cardHeader tableCardHeader">
              <h3>Faculties</h3>
            </div>
            <div className="cardBody">
              {/* table area */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="cardFooter">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="cardHeader">
              <h3>Departments</h3>
            </div>
            <div className="cardBody">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="cardFooter">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
