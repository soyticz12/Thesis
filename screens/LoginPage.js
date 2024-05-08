import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginpage}>
      <Image
        style={[styles.loginpageChild, styles.loginpageChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.component1Icon, styles.loginpageChildLayout]}
        contentFit="cover"
        source={require("../assets/component-1.png")}
      />
      <Text style={styles.login}>{`Login
`}</Text>
      <View style={[styles.loginForn, styles.loginFornPosition]}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <View style={[styles.userameWrapper, styles.loginFornPosition]}>
            <Text style={styles.userame}>Userame</Text>
          </View>
        </View>
        <View style={[styles.property1variant2, styles.property1defaultLayout]}>
          <View style={[styles.userameWrapper, styles.loginFornPosition]}>
            <Text style={styles.userame}>{`Password
`}</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.forgotPassword, styles.dontHaveAnTypo]}
      >{`Forgot Password
`}</Text>
      <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
        Dont have an Account? Sign up
      </Text>
      <View style={styles.loginbutton}>
        <Text style={styles.login1}>{`Login
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginpageChildLayout: {
    width: 361,
    position: "absolute",
  },
  loginFornPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  property1defaultLayout: {
    height: 54,
    width: 275,
    borderColor: Color.colorMediumpurple_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
    left: 20,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  dontHaveAnTypo: {
    height: 23,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  loginpageChild: {
    top: 763,
    height: 123,
    left: 0,
  },
  component1Icon: {
    top: -1,
    left: 1,
    height: 254,
  },
  login: {
    top: 288,
    left: 32,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorMediumpurple_400,
    width: 122,
    height: 35,
    textAlign: "left",
    position: "absolute",
  },
  userame: {
    top: 18,
    left: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  userameWrapper: {
    top: 0,
    width: 229,
    height: 37,
    left: 0,
  },
  property1default: {
    top: 20,
  },
  property1variant2: {
    top: 94,
  },
  loginForn: {
    top: 338,
    left: 23,
    borderRadius: Border.br_8xs,
    width: 315,
    height: 168,
  },
  forgotPassword: {
    top: 498,
    left: 199,
    width: 167,
  },
  dontHaveAn: {
    top: 598,
    left: 65,
    width: 231,
  },
  login1: {
    top: 4,
    left: 58,
    color: Color.colorWhite,
    width: 53,
    height: 28,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  loginbutton: {
    top: 536,
    left: 93,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple_200,
    borderColor: Color.colorMediumpurple_400,
    height: 36,
    width: 167,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  loginpage: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoginPage;
