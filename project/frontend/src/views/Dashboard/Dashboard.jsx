import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import classNames from "classnames";
// @material-ui/core

import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.jsx";
import buttonStyle from "assets/jss/material-dashboard-react/components/buttonStyle.jsx";
//import KnbsData from "components/KnbsData/KnbsData.jsx";


import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ListItem from '@material-ui/core/ListItem';
// import Table from "components/Table/Table.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FileUpload from "components/FileUpload/FileUpload.jsx";
import FromSystem from "components/RadioControl/FromSystem.jsx";
import ToSystem from "components/RadioControl/ToSystem.jsx";
//import { bugs, website, server } from "variables/general";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import KnbsData from "../../components/KnbsData/KnbsData";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class Dashboard extends React.Component {
    state = {
        value: 0
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes } = this.props;
        return (

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={3} md={3}>

                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>From:</h4>
                                <p className={classes.cardCategoryWhite}>

                                </p>
                            </CardHeader>
                            <CardBody>
                                <FromSystem />
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={3} md={3}>

                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>To</h4>
                                <p className={classes.cardCategoryWhite}>

                                </p>
                            </CardHeader>
                            <CardBody>
                                <ToSystem />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={3} md={3}>

                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>Source Elements</h4>
                                <p className={classes.cardCategoryWhite}>

                                </p>
                            </CardHeader>
                            <CardBody>
                                <ListItem>
                                    iHRIS Clinical Officer
                                </ListItem>
                                <ListItem>
                                    iHRIS Clinical Officer
                                </ListItem>
                                <ListItem>
                                    iHRIS Clinical Officer
                                </ListItem>

                            </CardBody>
                        </Card>
                    </GridItem>
                    <p><br /><br /><br /><br /><br /><br /><b>MAPS TO</b><br /><br /></p>
                    <GridItem xs={12} sm={3} md={3}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>Destination Elements</h4>
                                <p className={classes.cardCategoryWhite}>

                                </p>
                            </CardHeader>
                            <CardBody>
                                <ListItem>
                                    CLinical Office
                                </ListItem>
                                <ListItem>
                                    Clinical officer
                                </ListItem>
                                <ListItem>
                                    Clinical Officer
                                </ListItem>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card>
                            <CardHeader color="danger" stats icon>
                                <p className={classes.cardCategory}>Upload CSV File<br /></p>
                            </CardHeader>
                            <FileUpload />
                            <CardBody >
                                {/* <Button color="warning">
                                    Upload File...
                                    </Button>*/}
                            </CardBody>

                        </Card>

                    </GridItem>

                </GridContainer>
            </div >

        );

    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
