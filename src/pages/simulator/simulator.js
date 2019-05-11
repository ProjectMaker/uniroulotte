import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Hidden from "@material-ui/core/Hidden/Hidden"

import ShippingFormContainer from './shipping-form'
import SimulatorForm from './simulator-form'
import Basket from '../../components/basket'
import styles from './simulator-styles'

const Simulator = ({classes,
                     area,
                     equipments,
                     door,
                     windows,
                     roofing,
                     onChange,
                     onSubmit,
                     submissionInProgress}) => (
  <Grid className={classes.grid}>
    <Row around={"md"}>
      <Col xs={12} md={9}>
        <Row>
          <Col xs={12} md={9}>
            <SimulatorForm />
            <div className={classes.validation}>
              <div style={{width: '100%'}}>
                <ShippingFormContainer
                  onSubmit={onSubmit}
                  submissionInProgress={submissionInProgress}
                />
              </div>
            </div>
          </Col>
          <Col md={3} className={classes.sidebar}>
            <Hidden only={'xs'}>
              <Basket
                area={area}
                equipments={equipments}
                door={door}
                windows={windows}
                roofing={roofing}/>
            </Hidden>
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default withStyles(styles)(Simulator)
