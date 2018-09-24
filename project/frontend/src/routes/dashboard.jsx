// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import BubbleChart from "@material-ui/icons/BubbleChart";



// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
//import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Auditlogs from "views/Auditlogs/Auditlogs.jsx";
//import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "Transaction Logs",
    navbarName: "Transaction Logs",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/auditlogs",
    sidebarName: "Audit Logs",
    navbarName: "Audit Logs",
    icon: "book",
    component: Auditlogs
  },
  /*{
    path: "/icons",
    sidebarName: "Visualizer",
    navbarName: "Visualizer",
    icon: BubbleChart,
    component: Icons
  },*/
  {
    path: "/notifications",
    sidebarName: "Users",
    navbarName: "Users",
    icon: Person,
    component: NotificationsPage
  },






  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
