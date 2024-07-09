import {
  IconBoxMultiple, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconCircleDot,
    href: "/reports",
  },
  {
    id: uniqueId(),
    title: "Debts",
    icon: IconTable,
    href: "/debts",
  },
  {
    id: uniqueId(),
    title: "Incomes",
    icon: IconInfoCircle,
    href: "/incomes",
  },
  {
    id: uniqueId(),
    title: "Expenses",
    icon: IconStar,
    href: "/expenses",
  },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/ui-components/images",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/ui-components/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tables",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/table",
  // },
];

export default Menuitems;
