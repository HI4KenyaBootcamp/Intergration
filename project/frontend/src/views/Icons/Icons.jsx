import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <p>The visualizer gives a pictorial perspective of how transactions are being routed through this middleware.</p>
        <Card plain>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Visualizers</h4>
            <p className={classes.cardCategoryWhite}>

            </p>
          </CardHeader>
        </Card>
      </GridItem>
      {/*<CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
            <p className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{" "}
              <a
                href="https://design.google.com/icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe
                className={classes.iframe}
                src="https://material.io/icons/"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The icons are visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. Check the
                  <a
                    href="https://design.google.com/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material Icons
                  </a>
                </h5>
              </GridItem>
            </Hidden>
  </CardBody>*/}




      <GridItem xs={3}>
        <Card plain >
          <CardHeader color="warning">

            <h4 className={classes.cardTitleWhite}><br />Facility Check </h4>
            <p className={classes.cardCategoryWhite}></p>
            <br />
          </CardHeader>

        </Card>

      </GridItem>


      <GridItem xs={3}>
        <Card plain >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}><br />Registration</h4>
            <br />
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={3}>
        <Card plain >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}><br />Subscription</h4>
            <br />
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={3}>
        <Card plain >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}><br />Help Desk</h4>
            <br />
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card plain >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}><br />Health Information Mediator</h4>
            <br />
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer >

  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
