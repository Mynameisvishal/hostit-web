import React, { Component } from "react";
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message,
  Icon,
} from "semantic-ui-react";
import "./Register.css";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet" textAlign="center">
            <img src={logo} className="reg__img" />
            Login to Hostit
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="violet" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Not a user?<Link to="./Register">Register here.</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
