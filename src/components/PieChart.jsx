const PieChart = () => {
  return (
    <div className="pie-chart">
      <h2>Customers</h2>
      <p>Customers that buy products</p>
      <div className="pie-container">
        <p>
          65% <br />
          <span>Total new customers</span>
        </p>
        <div className="thin"></div>
        <div className="medium"></div>
        <div className="fat"></div>
      </div>
    </div>
  );
};

export default PieChart;
