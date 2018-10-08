"use strict";
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

import * as actions from "../../actions/index";

export class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}> Regsiter </Text>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Mobile Number" />
        <TextInput placeholder="Password" />
        <View style={{ margin: 7 }} />
        <Button title="Regsiter" />
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapDispatchToProps)(RegisterComponent);
