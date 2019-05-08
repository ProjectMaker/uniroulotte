import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-flexbox-grid';

import ShippingFormContainer from './shipping-form/shipping-form-container'
import SimulatorForm from './simulator-form/simulator-form'
import Summary from './summary/summary'
import styles from './quotation-styles'

const Quotation = ({classes,
                     area,
                     equipments,
                     door,
                     windows,
                     roofing,
                     onChange,
                     onSubmit,
                     submissionInProgress,
                     submissionError}) => (
  <Grid className={classes.grid}>
    <Row around={"md"}>
      <Col xs={12} md={9}>
        <Row>
          <Col xs={12} md={9}>
            <SimulatorForm
              area={area}
              onChangeArea={(area) => onChange('area', area)}
              equipments={equipments}
              onChangeEquipments={(equipments) => onChange('equipments', equipments)}
              windows={windows}
              onChangeWindows={(windows) => onChange('windows', windows)}
              door={door}
              onChangeDoor={(door) => onChange('door', door)}
              roofing={roofing}
              onChangeRoofing={(roofing) => onChange('roofing', roofing)}/>
            <div className={classes.validation}>
              <div style={{width: '100%'}}>
                <ShippingFormContainer
                  onSubmit={onSubmit}
                  submissionInProgress={submissionInProgress}
                  submissionError={submissionError}
                />
              </div>
            </div>
          </Col>
          <Col md={3} className={classes.sidebar}>
            <Summary
              area={area}
              equipments={equipments}
              door={door}
              windows={windows}
              roofing={roofing}/>
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default withStyles(styles)(Quotation)
