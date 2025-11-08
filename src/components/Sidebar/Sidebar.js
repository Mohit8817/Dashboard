import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Person as PersonIcon,
  LocalShipping as TrolleyIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  CreditCard as CreditCardIcon,
  Settings as SettingsIcon,
  
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },

  {
    id: 15,
    type: "Form",
    link: "/app/Form",
    icon: <TypographyIcon />,
    label: "Forms",
  },

  {
    id: 16,
    type: "User",
    icon: <PersonIcon />,
    label: "User",
    children: [
      { label: "Add User", link: "/app/AddUser" },
      { label: "View User", link: "/app/Userlist" },
    ],
  },

  {
    id: 17,
    type: "Product",
    icon: <CollectionsBookmarkIcon />,
    label: "Products",
    children: [
      { label: "Add Product", link: "/app/AddProduct" },
      { label: "Product List", link: "/app/ProductList" },
      { label: "Add Adjustment", link: "/app/AddAdjustment" },
      { label: "View Adjustment", link: "/app/ViewdAdjustment" },
    ],
  },

  {
    id: 18,
    type: "Dispatch",
    icon: <TrolleyIcon />,
    label: "Dispatch",
    children: [
      { label: "Add Dispatch", link: "/app/AddDispatch" },
      { label: "View Dispatch", link: "/app/ViewDispatch" },
      { label: "Filter Dispatch", link: "/app/FilterDispatch" },
    ],
  },

  {
    id: 19,
    type: "Request",
    icon: <ShoppingCartOutlinedIcon />,
    label: "Request",
    children: [
      { label: "Add Request", link: "/app/AddRequest" },
      { label: "View Request", link: "/app/ViewRequest" },
    ],
  },
  {
    id: 20,
    type: "Purchase",
    icon: <ReceiptOutlinedIcon />,
    label: "Purchase",
    children: [
      { label: "Add Purchase", link: "/app/AddPurchase" },
      { label: "View Purchase", link: "/app/ViewPurchase" },
    ],
  },

  {
    id: 21,
    type: "Expense",
    icon: <CreditCardIcon />,
    label: "Expense",
    children: [
      { label: "Add Expense", link: "/app/AddExpenseCategory" },
      { label: "View Expense", link: "/app/ViewExpenses" },
    ],
  },

  {
    id: 22,
    type: "Settings",
    icon: <SettingsIcon />,
    label: "Settings",
    children: [{ label: "Role Management", link: "/app/RoleManagement" }],
  },


    {
    id: 23,
    type: "New Dashboard",
    icon: <HomeIcon />,
    label: "New Dashboard",  
    link: "/app/NewDashboard",
  },


    {
    id: 24,
    type: "New Dashboard",
    icon: <HomeIcon />,
    label: "New Login",  
    link: "/app/Newlogin",
  },



  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "HELP" },
  { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "PROJECTS" },
  {
    id: 12,
    label: "My recent",
    link: "",
    icon: <Dot size="large" color="warning" />,
  },
  {
    id: 13,
    label: "Starred",
    link: "",
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 14,
    label: "Background",
    link: "",
    icon: <Dot size="large" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
