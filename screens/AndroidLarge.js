import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge = () => {
  return (
    <View style={styles.androidLarge1}>
      <Image
        style={styles.androidLarge1Child}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={styles.androidLarge1Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.androidLarge1Inner}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.property1default, styles.property1defaultBorder]}>
          <View style={styles.enterUsernameWrapper}>
            <Text style={styles.enterUsername}>{`Enter Username
`}</Text>
          </View>
        </View>
        <View style={[styles.property1variant2, styles.property1defaultBorder]}>
          <View style={styles.enterUsernameWrapper}>
            <Text style={styles.enterUsername}>Enter Password</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.login, styles.loginLayout]}>Login</Text>
      <View style={[styles.button, styles.inputLayout]}>
        <Text style={[styles.login1, styles.loginLayout]}>{`Login
`}</Text>
      </View>
      <Text style={[styles.signup, styles.signupLayout]}>SignUp</Text>
      <Text
        style={[styles.forgotPassword, styles.signupLayout]}
      >{`Forgot Password
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  property1defaultBorder: {
    width: 230,
    borderWidth: 2,
    borderColor: Color.colorDarkorchid_200,
    borderStyle: "solid",
    left: 20,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  loginLayout: {
    height: 34,
    textAlign: "left",
    position: "absolute",
  },
  signupLayout: {
    height: 17,
    width: 120,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge1Child: {
    top: 0,
    left: -8,
    width: 369,
    height: 257,
    position: "absolute",
  },
  androidLarge1Item: {
    top: 138,
    left: 107,
    width: 179,
    height: 151,
    position: "absolute",
  },
  androidLarge1Inner: {
    top: 670,
    width: 360,
    height: 143,
    left: 0,
    position: "absolute",
  },
  enterUsername: {
    top: 8,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  enterUsernameWrapper: {
    top: 4,
    left: 12,
    width: 196,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  property1default: {
    top: 20,
    height: 42,
  },
  property1variant2: {
    top: 74,
    height: 41,
  },
  input: {
    top: 389,
    left: 36,
    width: 277,
    height: 123,
    overflow: "hidden",
  },
  login: {
    top: 355,
    left: 39,
    fontSize: 35,
    lineHeight: 14,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDarkorchid_100,
    width: 135,
  },
  login1: {
    top: 9,
    left: 58,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    width: 105,
    fontSize: FontSize.size_xl,
  },
  button: {
    top: 561,
    left: 83,
    backgroundColor: Color.colorDarkorchid_100,
    width: 182,
    height: 43,
  },
  signup: {
    top: 620,
    left: 140,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    fontSize: FontSize.size_xl,
  },
  forgotPassword: {
    top: 528,
    left: 207,
    fontSize: 15,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge;
