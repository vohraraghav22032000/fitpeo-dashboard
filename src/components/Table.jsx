const Table = () => {
  const columns = ["Product Name", "Stock", "Price", "Total Sales"];
  const data = [
    {
      name: {
        image: "/assets/image.jpg",
        title: "Abstract 3D",
        sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      stock: 32,
      price: 45.99,
      sales: 20,
    },
    {
      name: {
        image: "/assets/image.jpg",
        title: "Sarphens Illustrations",
        sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      stock: 32,
      price: 45.99,
      sales: 20,
    },
  ];

  return (
    <section className="table-container">
      <div className="header">
        <h3>Product Sell</h3>
        <div className="right-section">
          <input placeholder="Search" />
          <select>
            <option>Last 1 day</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 100 days</option>
            <option>Last 1 year</option>
          </select>
        </div>
      </div>
      <div className="table">
        <tr className="table-head">
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
        {data.map((row, i) => (
          <tr key={i} className="table-row">
            <td>
              <img src={row.name.image} />
              <div>
                <h5>{row.name.title}</h5>
                <p>{row.name.sub}</p>
              </div>
            </td>
            <td>{row.stock} in stock</td>
            <td>${row.price}</td>
            <td>{row.sales}</td>
          </tr>
        ))}
      </div>
    </section>
  );
};

export default Table;
