import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        let likesIconName = "thumbs-up-outline"
        let likesIconColor = "black"
        return (
          <View style={[styles.container]}>
            <View style={styles.rect}>
              <View style={styles.ellipseRow}>
                <Svg viewBox="0 0 40 40" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(66,123,210,1)"
                    cx={20}
                    cy={20}
                    rx={20}
                    ry={20}
                  ></Ellipse>
                </Svg>
                <View style={styles.namePlaceholderColumn}>
                  <Text style={styles.namePlaceholder}>Name Placeholder</Text>
                  <Text style={styles.usernamePlaceholder}>Username Placeholder</Text>
                </View>
              </View>
              <Text style={styles.titlePlaceholder}>Title Placeholder</Text>
              <Text style={styles.contentPlaceholder}>Content Placeholder</Text>
              <View style={styles.rect2Row}>
                <View style={styles.rect2}>
                  <Icon style={styles.rect3} name="heart-outline" color={likesIconColor} size={40} />
                </View>
                <Text style={styles.likes0}>Likes: 0</Text>
              </View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 337,
    height: 270,
    backgroundColor: "rgba(243,243,243,1)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000"
  },
  ellipse: {
    width: 40,
    height: 40,
    opacity: 0.5,
    marginTop: 1
  },
  namePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 18
  },
  usernamePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 14,
    marginTop: 4
  },
  namePlaceholderColumn: {
    width: 239,
    marginLeft: 8
  },
  ellipseRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 26,
    marginRight: 24
  },
  titlePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    height: 25,
    width: 287,
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 26
  },
  contentPlaceholder: {
    fontFamily: "System",
    color: "#121212",
    height: 114,
    width: 287,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 26
  },
  rect2: {
    width: 40,
    height: 40,
  },
  rect3: {
    width: 40,
    height: 40,
  },
  likes0: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 16,
    marginLeft: 8,
    marginTop: 11
  },
  rect2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 26,
    marginRight: 209
  }
});

Post.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}