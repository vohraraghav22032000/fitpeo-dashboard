// import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarOptions } from "../utils/options";

const Sidebar = () => {
  return (
    <aside
    // style={{
    //   display: show ? "block" : "none",
    // }}
    >
      <h2>Dashboard</h2>
      {/* <GiHamburgerMenu onClick={() => setShow(false)} /> */}
      <ul>
        {SidebarOptions.map((option, i) => (
          <li key={i} className={`${i === 0 ? "active" : ""}`}>
            {option.icon}
            {option.text}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
