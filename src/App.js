import './semantic/dist/semantic.css';
import React, { useState, useEffect } from 'react';
import { Grid, Form, Radio, Button, Input, Segment, Container, Statistic, Image, Popup, Icon } from 'semantic-ui-react'


function App() {
  const submitHandler = (event) => {
    switch(event.target.id) {
      case 'basic-plan':
       setBasicPlan(true);
       break; 
      case 'plus-plan':
        setPlusPlan(true);
        break;
      case 'monthly':
        setMonthlyBilling(true);
        setYearlyBilling(false);
        break;
      case 'annually':
        setYearlyBilling(true);
        setMonthlyBilling(false);
        break;
      default:
    }
   }
   
   const [basicPlan, setBasicPlan] = useState(false)
   const [plusPlan, setPlusPlan] = useState(false)
   const [monthlyBilling, setMonthlyBilling] = useState(false)
   const [yearlyBilling, setYearlyBilling] = useState(true)

  useEffect(() => {
     if (basicPlan === true) {
       setPlusPlan(false)
       document.getElementById('basic-plan').classList.add('button-selected')
       document.getElementById('plus-plan').classList.remove('button-selected')
     }
    },[basicPlan]);
  useEffect(() => {
     if (plusPlan === true) {
       setBasicPlan(false);
       document.getElementById('plus-plan').classList.add('button-selected')
       document.getElementById('basic-plan').classList.remove('button-selected')
     } 
    },[plusPlan]);

  return (
    <Container id="main">
      <Grid className="two column" stackable>
        <Grid.Column>
          <Segment width={8} id="inputSegment" >
            <Form size='large'>
              <Grid container>
                <Grid.Row >
                  <Grid.Column mobile={16} computer={8} >
                    <br/>
                    <label > Subscription plan
                      <Popup content="Copia offers two subscription plan options, Basic and Plus. Determine your potential ROI based on the subscription plan that best serves your needs!" title="Subscription Plan" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column mobile={8} small={8} tablet={6} computer={4} >
                    <Button circular basic size="big" positive id="basic-plan" onClick={submitHandler} >Basic </Button>
                  </Grid.Column>
                  <Grid.Column mobile={8} small={8} tablet={6} computer={4} >
                    <Button circular basic positive size="big" id="plus-plan" onClick={submitHandler}> Plus </Button>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column mobile={16} tablet={16} small={16} computer={8}>
                    <label >Billed monthly or yearly?</label>
                  </Grid.Column>
                  <Grid.Column mobile={8} small={8} tablet={8} computer={3}>
                    <Radio label="Monthly" name="billing-cycle" id="monthly" onClick={submitHandler} checked={monthlyBilling}></Radio>
                  </Grid.Column>
                  <Grid.Column mobile={8} small={8} tablet={8} computer={3}>
                    <Radio label="Annually" name="billing-cycle" id="annually" onClick={submitHandler} checked={yearlyBilling}></Radio>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={9}>
                    <label className="eight wide column" >Number of donations per month 
                    <Popup content="The number of times you expect to be donating on average per month. Once a week? Put 4. Once a day? Put 30." title="Subscription Plan" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Input labelPosition='left' label={{ basic: true, content: "Qty" }}  type='text' id="donations_per_month" onBlur={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={9}>
                    <label className="four wide ">Average pounds in donation
                    <Popup content="The number of times you expect to be donating on average per month. Once a week? Put 4. Once a day? Put 30. " title="lbs per donation" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column width={5} >
                    <Input labelPosition='right' label={{ basic: true, content: "lbs" }} type='text' id="pounds_per_donation" onBlur={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={9}>
                    <label> Average cost basis
                    <Popup content="The cost associated with preparing and serving a menu item. This typically includes ingredients, but can also include labor costs, material costs, equipment costs, utilities, and energy (back of house). Please consult your finance team for accurate numbers." title="avg cost basis" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Input labelPosition='left' label={{ basic: true, content: "$" }} type='text' id="average_cost_basis" onBlur={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={9}>
                    <label>
                      Average fair market value
                      <Popup content="The price you sell the food to your customer (if applicable)." title="avg fmv" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Input labelPosition='left' label={{ basic: true, content: "$" }} type='text' id="average_fmv" onBlur={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={9}>
                    <label> 
                      Corporate tax rate 
                      
                      <Popup content="The corporate tax rate in the United States is currently at a flat rate of 21%. Your tax percentage may vary depending if your business is registered as an S-Corp, Sole Proprietorship, LLC, etc. Please consult your tax advisor for an accurate percentage." title="corp tax rate" trigger={<Icon name="question circle"/>}/>
                    </label>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Input placeholder="21" labelPosition='right' label={{ basic: true, content: "%" }} type='text' id="tax_rate" onBlur={submitHandler} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column >
          <Grid>
            <Segment circular inverted id="resultsSegment">
              <h1 className="ui header" id="savingsStat"> $356
                <div className='sub header'>Total tax savings</div>
                <div className='sub header white'> per month</div>
              </h1>
              <div id='roiDiv'>
                <span id="ROIlabel" > ROI</span> <span id="ROIvalue"> 900% </span>
              </div>
            </Segment>
            <Segment basic id='statsSegment'>
              <Grid >
                <Statistic.Group size="tiny">
                  <Statistic color='green'>
                    <Image src="/images/icon_meals.svg" height="100px" />
                    <Statistic.Value>
                      10249
                    </Statistic.Value>
                    <Statistic.Label>
                      Meals <br />delivered
                    </Statistic.Label>
                  </Statistic>
                  <Statistic color='green'>
                    <Image src="/images/icon_co2.svg" height="100px" />
                    <Statistic.Value> 3000 </Statistic.Value>
                    <Statistic.Label> lbs of CO2 <br />emissions saved </Statistic.Label>
                  </Statistic>
                  <Statistic color='green'>
                    <Image src="/images/icon_water.svg" height="100px" />
                    <Statistic.Value> 500 </Statistic.Value>
                    <Statistic.Label> Gallons of <br /> water saved </Statistic.Label>
                  </Statistic>
                </Statistic.Group>

              </Grid>
            </Segment>


          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
