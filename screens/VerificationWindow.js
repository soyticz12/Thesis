import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const VerificationWindow = () => {
  return (
    <View style={styles.verificationWindow}>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.instanceChild, styles.instanceLayout]} />
        <View style={[styles.instanceItem, styles.instanceLayout]} />
        <View style={[styles.instanceInner, styles.instanceInnerBg]} />
        <Text style={[styles.register, styles.verifyTypo]}>{`Register
`}</Text>
        <Text style={[styles.verify, styles.verifyTypo]}>{`Verify
`}</Text>
        <Text style={styles.finish}>Finish</Text>
      </View>
      <View
        style={[
          styles.property1defaultWrapper,
          styles.property1defaultWrapperPosition,
        ]}
      >
        <View style={[styles.property1default, styles.verifybuttonBorder]}>
          <View
            style={[styles.enterCodeWrapper, styles.rectangleParentPosition]}
          >
            <Text style={[styles.enterCode, styles.codeTypo]}>Enter Code</Text>
          </View>
        </View>
      </View>
      <Text style={styles.verify1}>Verify</Text>
      <Image
        style={[
          styles.verificationWindowChild,
          styles.property1defaultWrapperPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.verifybutton, styles.resendCodeLayout]}>
        <Text style={styles.verify2}>Verify</Text>
      </View>
      <Text style={[styles.resendCode, styles.resendCodeLayout]}>{`Resend Code
`}</Text>
      <Image
        style={[styles.verificationWindowItem, styles.rectangleParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    left: 0,
    position: "absolute",
  },
  instanceLayout: {
    height: 7,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
  },
  instanceInnerBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  verifyTypo: {
    height: 20,
    width: 94,
    color: Color.colorThistle,
    top: 22,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  property1defaultWrapperPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  verifybuttonBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  codeTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  resendCodeLayout: {
    width: 167,
    position: "absolute",
  },
  instanceChild: {
    left: 13,
    backgroundColor: Color.colorThistle,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
    position: "absolute",
  },
  instanceItem: {
    left: 131,
    backgroundColor: Color.colorThistle,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
    position: "absolute",
  },
  instanceInner: {
    left: 248,
    height: 7,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
    backgroundColor: Color.colorWhite,
  },
  register: {
    left: 33,
  },
  verify: {
    left: 158,
  },
  finish: {
    left: 272,
    color: Color.colorWhite,
    height: 20,
    width: 94,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: 22,
    position: "absolute",
  },
  rectangleParent: {
    backgroundColor: Color.colorMediumpurple_300,
    width: 360,
    height: 63,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  enterCode: {
    top: 18,
    left: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  enterCodeWrapper: {
    width: 229,
    height: 37,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  property1default: {
    top: 20,
    left: 20,
    borderRadius: Border.br_mini,
    borderColor: Color.colorMediumpurple_100,
    width: 275,
    height: 54,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  property1defaultWrapper: {
    top: 333,
    left: 26,
    borderRadius: Border.br_8xs,
    width: 315,
    height: 94,
  },
  verify1: {
    top: 298,
    left: 39,
    fontSize: FontSize.size_11xl,
    color: Color.colorMediumpurple_400,
    width: 122,
    height: 35,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  verificationWindowChild: {
    height: "18.13%",
    width: "44.44%",
    top: "13.5%",
    right: "27.78%",
    bottom: "68.38%",
    left: "27.78%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  verify2: {
    top: 4,
    left: 57,
    width: 78,
    height: 28,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  verifybutton: {
    top: 461,
    left: 96,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple_200,
    borderColor: Color.colorMediumpurple_400,
    height: 36,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  resendCode: {
    top: 413,
    left: 199,
    height: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    width: 167,
  },
  verificationWindowItem: {
    top: 758,
    width: 361,
    height: 123,
  },
  verificationWindow: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default VerificationWindow;
