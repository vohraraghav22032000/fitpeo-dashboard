import { TfiWallet } from "react-icons/tfi";
import { BsCashCoin, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiSolidBasket, BiHelpCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineFileText } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";

export const SidebarOptions = [
  {
    icon: <RxDashboard />,
    text: "Dashboard",
  },
  {
    icon: <HiOutlineShoppingBag />,
    text: "Product",
  },
  {
    icon: <HiOutlineUsers />,
    text: "Customers",
  },
  {
    icon: <AiOutlineFileText />,
    text: "Income",
  },
  {
    icon: <AiOutlineDashboard />,
    text: "Promote",
  },
  {
    icon: <BiHelpCircle />,
    text: "Help",
  },
];

export const WidgetOptions = [
  {
    title: "Earning",
    icon: <BsCashCoin />,
    amount: "198k",
    status: "profit",
    percent: "37.8",
  },
  {
    title: "Orders",
    icon: <BsFillFileEarmarkTextFill />,
    amount: "2.4k",
    status: "loss",
    percent: "2",
  },
  {
    title: "Balance",
    icon: <TfiWallet />,
    amount: "2.4k",
    status: "loss",
    percent: "2",
  },
  {
    title: "Total Sales",
    icon: <BiSolidBasket />,
    amount: "89k",
    status: "profit",
    percent: "11",
  },
];
