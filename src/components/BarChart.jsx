const BarChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = [40, 50, 70, 50, 40, 80, 70, 60, 70, 90, 50, 60];

  return (
    <div className="bar-chart">
      <div className="header">
        <div className="left-section">
          <h3>Overview</h3>
          <p>Monthly Earning</p>
        </div>
        <select>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="bar-container">
        {data.map((val, i) => (
          <div
            key={i}
            className={`bar ${i === 9 ? "active" : ""}`}
            style={{ height: `${val}%` }}
          ></div>
        ))}
      </div>
      <div className="labels">
        {labels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
