import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Form from "../../pages/Form/Form";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import AddUserPage from "../../pages/users/AddUserPage";
import UserListPage from "../../pages/users/UserListPage";
import AddProduct from "../../pages/Products/AddProduct";
import ViewProduct from "../../pages/Products/ViewProduct";
import AddAdjustment from "../../pages/Products/AddAdjustment";
import ViewAdjustment from "../../pages/Products/ViewAdjustment";

// context
import { useLayoutState } from "../../context/LayoutContext";
import AddDispatch from "../../pages/Dispatch/AddDispatch";
import ViewDispatch from "../../pages/Dispatch/ViewDispatch";
import ProductDispatch from "../../pages/Dispatch/ProductDispatch";
import AddProductRequest from "../../pages/RequestDetails/AddProductRequest";
import ViewRequest from "../../pages/RequestDetails/ViewRequest";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
          {/* pages */}
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route path="/app/Form" component={Form} />
              <Route path="/app/AddUser" component={AddUserPage} />
              <Route path="/app/Userlist" component={UserListPage} />
              <Route path="/app/AddProduct" component={AddProduct} />
              <Route path="/app/ProductList" component={ViewProduct} />
              <Route path="/app/AddAdjustment" component={AddAdjustment} />
              <Route path="/app/ViewdAdjustment" component={ViewAdjustment} />
              <Route path="/app/AddDispatch" component={AddDispatch} />
              <Route path="/app/ViewDispatch" component={ViewDispatch} />
              <Route path="/app/FilterDispatch" component={ProductDispatch} />
              <Route path="/app/AddRequest" component={AddProductRequest} />
              <Route path="/app/ViewRequest" component={ViewRequest} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
