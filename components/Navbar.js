import React from "react";
import { connect } from "react-redux";
import { setAboutDialog } from "../state/actions";
import { Appbar } from "react-native-paper";

const Navbar = ({ dispatch }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Coin Toss" />
      <Appbar.Action
        icon="information"
        onPress={() => dispatch(setAboutDialog(true))}
      />
    </Appbar.Header>
  );
};

export default connect()(Navbar);
