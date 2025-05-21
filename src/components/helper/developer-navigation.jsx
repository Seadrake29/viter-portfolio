import {
  FaCogs,
  FaHandHoldingHeart,
  FaList,
  FaQuoteRight,
  FaTools,
} from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

export const developerNavigation = [
  {
    name: "Dashboard",
    code: "dashboard",
    link: "/dashboard",
    icon: <FaHandHoldingHeart />,
  },

  {
    name: "About",
    code: "about",
    link: "/about",
    icon: <FaChildren />,
  },

  {
    name: "Testimonial",
    code: "testimonial",
    link: "/testimonial",
    icon: <FaQuoteRight />,
  },
  {
    name: "Experience",
    code: "experience",
    link: "/experience",
    icon: <MdWork />,
  },
  {
    name: "Service",
    code: "service",
    link: "/service",
    icon: <FaTools />,
  },
  {
    name: "settings",
    code: "settings",
    icon: <FaCogs />,
    isDropDown: true,
    subMenu: [
      {
        name: "My Experience",
        code: "my-experience",
        link: "/settings/myexperience",
      },

      {
        name: "My Service",
        code: "my-service",
        link: "/settings/myservice",
      },
    ],
  },
];
