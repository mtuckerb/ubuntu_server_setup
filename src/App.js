import './semantic/dist/semantic.css';
// eslint-disable-next-line
import { Grid, Form, Radio, Button, Input, Segment, Container } from 'semantic-ui-react'

const submitHandler = (event) => {

}
function App() {
  return (
    <Container centered style={{ marginTop: "2rem" }}>
      <Grid className="two column" stackable>
        <Grid.Column>
          <Segment width={8}>
            <Form size='large' onSubmit={submitHandler}>
              <Grid inline fields container>
                <Grid.Row group>
                  <Grid.Column mobile={16} computer={8} >
                    <label> Subscription Plan</label>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={4} inline>
                    <Button circular basic positive big id="basic-plan" onClick={submitHandler} >Basic </Button>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={4} inline>
                    <Button circular basic positive big id="pro-plan" onClick={submitHandler} >Plus </Button>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column mobile={16} computer={8}>
                    <label >"Billed monthly or yearly?"</label>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={4}>
                    <Radio four wide column label="Monthly" name="billing_monthly" id="monthly" onChange={submitHandler} ></Radio>
                  </Grid.Column>
                  <Grid.Column mobile={8} computer={4}>
                    <Radio four wide column label="Anually" name="billing_anually" id="anually" onChange={submitHandler} ></Radio>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <label className="eight wide column" >Number of Donations per month</label>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Input labelPosition='left' label={{ basic: true, bordered: false, content: "Qty" }} className="two wide column" type='text' id="donations_per_month" onChange={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <label className="four wide ">Average pounds in Donation</label>
                  </Grid.Column>
                  <Grid.Column width={6} >
                    <Input labelPosition='right' label={{ basic: true, bordered: false, content: "lbs" }} type='text' id="pounds_per_donation" onChange={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <label> Average cost basis</label>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Input labelPosition='left' label={{ basic: true, bordered: false, content: "$" }} type='text' id="average_cost_basis" onChange={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <label>Average fair market value</label>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Input labelPosition='left' label={{ basic: true, bordered: false, content: "$" }} type='text' id="average_fmv" onChange={submitHandler} />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <label> Corporate tax rate </label>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Input labelPosition='right' label={{ basic: true, bordered: false, content: "%" }} type='text' id="tax_rate" onChange={submitHandler} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column >
          <Segment circular inverted aligned style={{ backgroundColor: "#479F7C", height: "27em", width: "27em" }}>
            <h1 className="ui header" style={{ fontSize: "6rem" }}>$356
              <div className='sub header' style={{ fontSize: "1.5rem", color: '#FCF154' }}>Total tax savings</div>
              <div className='sub header'> per month</div>
            </h1>
              <Segment circular style={{ backgroundColor: "#E8F6F2" }}>
                <h2> ROI 900%</h2>
              </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
