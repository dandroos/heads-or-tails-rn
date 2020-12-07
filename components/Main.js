import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";
import Heads from "../assets/heads.png";
import Tails from "../assets/tails.png";
import AnimatedImage from "./AnimatedImage";
import { setTossInProgress, setIsHeads } from "../state/actions";

const Main = ({ dispatch, isHeads, tossInProgress }) => {
  const playCoinFlipSound = async () => {
    const sound = new Audio.Sound();
    await sound.loadAsync(require("../assets/coinflip1.mp3"));

    dispatch(setTossInProgress(true));
    sound.playAsync();
    sound._onPlaybackStatusUpdate = (y) => {
      if (y.didJustFinish) {
        sound.unloadAsync();
        dispatch(setTossInProgress(false));
      }
    };
  };

  const tossCoin = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    dispatch(setIsHeads(randomNumber === 0));
  };

  useEffect(() => {
    if (tossInProgress) {
      tossCoin();
    }
  }, [tossInProgress]);

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatedImage
        source={isHeads ? Heads : Tails}
        style={{ marginBottom: 10, width: 250 }}
      />
      <Button
        disabled={tossInProgress}
        onPress={playCoinFlipSound}
        mode="contained"
        contentStyle={{ padding: 15 }}
      >
        {tossInProgress ? "Tossing" : "Toss coin"}
      </Button>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isHeads: state.isHeads,
  tossInProgress: state.tossInProgress,
});

export default connect(mapStateToProps)(Main);
