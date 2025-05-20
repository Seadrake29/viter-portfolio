import { FaCogs, FaHandHoldingHeart, FaList } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

export const developerNavigation = [
  {
    name: "Donor",
    code: "donor",
    link: "/donor",
    icon: <FaHandHoldingHeart />,
  },

  {
    name: "Children List",
    code: "children-list",
    link: "/children-list",
    icon: <FaChildren />,
  },

  {
    name: "Reports",
    code: "reports",
    link: "/reports",
    icon: <FaList />,
    isDropDown: true,
    subMenu: [
      {
        name: "donation",
        link: "/donation",
      },
    ],
  },
  {
    name: "settings",
    code: "settings",
    icon: <FaCogs />,
    isDropDown: true,
    subMenu: [
      {
        name: "experience",
        code: "experience",
        link: "/settings/experience",
      },

      {
        name: "service",
        code: "service",
        link: "/settings/service",
      },
    ],
  },
];
