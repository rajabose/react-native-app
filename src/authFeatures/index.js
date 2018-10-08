"use strict";
/**
 * @author RajaBose
 * @description Home component.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

//Home panel
import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Button
} from "react-native";

//import * as Actions from "../actions/index";
import { login, logout, register, swipeComponent } from "../actions/index";
import { LoginComponent } from "./LoginComponent/index";
import { RegisterComponent } from "./RegisterComponent/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.swipeClick = this.swipeClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.beforeRenderChecks = this.beforeRenderChecks.bind(this);
  }

  //Swipe between register component and login component when token is not set
  swipeClick() {
    this.props.swipeComponent();
  }

  onLoginClick(userDetails) {
    this.props.login(userDetails);
  }

  beforeRenderChecks() {}

  render() {
    // this.beforeRenderChecks();

    if (this.props.userData.token) {
      return (
        <View>
          <Text>Home Page</Text>
        </View>
      );
    } else {
      return (
        <View>
          <LoginComponent loginClick={this.onLoginClick} />
        </View>
      );
    }
  }
}

//Map the userReducer to Home Component
const mapStateToProps = state => {
  return {
    userData: state.userReducer
  };
};

//Map the Actions creator to Home Component event
const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, logout, register, swipeComponent }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
