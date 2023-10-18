import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Widget = ({ title, amount, status, percent, icon }) => {
  return (
    <article className="widget">
      <span className="icon">{icon}</span>
      <div>
        <p>{title}</p>
        <h4>${amount}</h4>
        {status === "profit" ? (
          <div>
            <span style={{ color: "green" }}>
              <HiTrendingUp /> {percent}%
            </span>{" "}
            this month
          </div>
        ) : (
          <div>
            <span style={{ color: "red" }}>
              <HiTrendingDown /> {percent}%
            </span>{" "}
            this month
          </div>
        )}
      </div>
    </article>
  );
};

export default Widget;
