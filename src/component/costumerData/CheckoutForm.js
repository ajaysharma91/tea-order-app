import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import checkout from "../../action/costumerCheckout";
import { Form, Row, Col } from "react-bootstrap";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      contact: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.checkoutData(this.state);
  };
  render() {
    const { costomer } = this.props;
    //console.log(this.props.checkout.);
    if (costomer.checkout) {
      console.log("hi");
      this.props.history.push("/");

     // return <Redirect to="/" />;
    }
    return (
      <>
        {/* <form onSubmit={this.submitForm}>
          <div className="row">
            <div className="col">
              <label>FullName</label>
              <input
                type="text"
                name="fullName"
                value={this.state.value}
                onChange={this.changeHandler}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={this.state.value}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="submit" value="CheckOut" />
            </div>
          </div>
        </form> */}
        
        <Row>
            <Col col col-sm-6 col-lg-6></Col>
          <Col className="col col-sm-6 col-lg-6 ">
              <h2>Checkout Form</h2>
            <Form onSubmit={this.submitForm}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  value={this.state.value}
                  onChange={this.changeHandler}
                  required
                />{" "}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contact</Form.Label>
                <input
                  className="form-control"
                  type="text"
                  name="contact"
                  value={this.state.value}
                  onChange={this.changeHandler}
                  required
                />{" "}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <input
                  className="form-control"
                  type="email"
                  name="contact"
                  value={this.state.value}
                  onChange={this.changeHandler}
                  required
                />{" "}
              </Form.Group>
              <input
                type="submit"
                className="btn btn-primary"
                value="CheckOut"
              />
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

const mapsStateToProps = (state) => {
  console.log("Checkout");
  console.log(state);
  return {
    costomer: state.costomer,
    tea:state.tea
  };
};
const mapsDispatchToProps = (dispatch) => {
  console.log("dispatch");

  return {
    checkoutData: (data) => dispatch(checkout(data)),
  };
};
export default connect(mapsStateToProps, mapsDispatchToProps)(CheckoutForm);
