"use strict";
/**
 * @author RajaBose
 * @description Login component and its element.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

//feature/login-panel
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Button
} from "react-native";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import actions from "../../actions/index";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: "",
      password: ""
    };
    //this.onLogin = this.onLogin.bind(this);
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}> Login </Text>
        <TextInput
          placeholder="Username"
          onChangeText={value => this.setState({ username: value })}
          value={this.state.username}
        />
        <TextInput
          placeholder="Password"
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
        />
        <View style={{ margin: 7 }} />
        <Button
          title="Login"
          onPress={() =>
            this.props.loginClick({
              email: this.state.username,
              password: this.state.password
            })
          }
        />
      </ScrollView>
    );
  }
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators(actions, dispatch);
//}

//export default connect(mapDispatchToProps)(LoginComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
