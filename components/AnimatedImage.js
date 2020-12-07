import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Animated } from "react-native";

const AnimatedImage = (props) => {
  const [animProps, setAnimProps] = useState({
    scale: new Animated.Value(0.9),
    y: new Animated.Value(0),
  });

  const upDuration = 100;
  const downDuration = 50;

  useEffect(() => {
    if (props.tossInProgress) {
      Animated.timing(animProps.y, {
        toValue: -500,
        duration: upDuration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animProps.scale, {
        toValue: 1,
        duration: upDuration,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animProps.y, {
        toValue: 0,
        duration: downDuration,
        useNativeDriver: true,
      }).start();
      Animated.timing(animProps.scale, {
        toValue: 0.9,
        duration: downDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [props.tossInProgress]);

  return (
    <Animated.Image
      resizeMode="contain"
      {...props}
      style={[
        {
          opacity: animProps.opacity,
          transform: [{ translateY: animProps.y }, { scale: animProps.scale }],
        },
        props.style,
      ]}
    />
  );
};

const mapStateToProps = (state) => ({
  tossInProgress: state.tossInProgress,
});

export default connect(mapStateToProps)(AnimatedImage);
