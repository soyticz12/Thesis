import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AllSet = () => {
  return (
    <View style={styles.allSet}>
      <View style={[styles.rectangleParent, styles.allSetChildPosition]}>
        <View style={[styles.instanceChild, styles.instanceLayout]} />
        <View style={[styles.instanceItem, styles.instanceLayout]} />
        <View style={[styles.instanceInner, styles.instanceLayout]} />
        <Text style={[styles.register, styles.verifyTypo]}>{`Register
`}</Text>
        <Text style={[styles.verify, styles.verifyTypo]}>{`Verify
`}</Text>
        <Text style={[styles.finish, styles.verifyTypo]}>Finish</Text>
      </View>
      <Text style={[styles.youreAllSet, styles.youreAllSetTypo]}>
        You’re all set!
      </Text>
      <Text style={[styles.backToLogin, styles.youreAllSetTypo]}>
        Back to Login Page
      </Text>
      <Image
        style={[styles.allSetChild, styles.allSetChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={styles.verifybutton}>
        <Text style={styles.clickHere}>Click Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allSetChildPosition: {
    left: 0,
    position: "absolute",
  },
  instanceLayout: {
    height: 7,
    width: 105,
    backgroundColor: Color.colorThistle,
    borderRadius: Border.br_81xl,
    top: 45,
    position: "absolute",
  },
  verifyTypo: {
    height: 20,
    width: 94,
    color: Color.colorThistle,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: 22,
    textAlign: "left",
    position: "absolute",
  },
  youreAllSetTypo: {
    color: Color.colorMediumpurple_400,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  instanceChild: {
    left: 13,
  },
  instanceItem: {
    left: 131,
  },
  instanceInner: {
    left: 248,
  },
  register: {
    left: 33,
  },
  verify: {
    left: 158,
  },
  finish: {
    left: 272,
  },
  rectangleParent: {
    top: 0,
    backgroundColor: Color.colorMediumpurple_300,
    width: 360,
    height: 63,
    overflow: "hidden",
  },
  youreAllSet: {
    top: 252,
    left: 21,
    fontSize: 50,
    width: 368,
    height: 73,
  },
  backToLogin: {
    top: 358,
    left: 41,
    fontSize: FontSize.size_11xl,
    width: 290,
    height: 29,
  },
  allSetChild: {
    top: 753,
    width: 361,
    height: 123,
  },
  clickHere: {
    top: 6,
    left: 36,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    width: 150,
    height: 14,
    textAlign: "left",
    position: "absolute",
  },
  verifybutton: {
    top: 441,
    left: 96,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple_200,
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple_400,
    borderWidth: 1,
    width: 167,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  allSet: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AllSet;
