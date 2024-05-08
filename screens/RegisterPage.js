import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const RegisterPage = () => {
  return (
    <View style={styles.registerPage}>
      <View style={[styles.rectangleParent, styles.userameWrapperPosition]}>
        <View style={styles.componentChild} />
        <View style={[styles.componentItem, styles.componentLayout]} />
        <View style={[styles.componentInner, styles.componentLayout]} />
        <Text style={[styles.register, styles.verifyTypo]}>{`Register
`}</Text>
        <Text style={[styles.verify, styles.verifyTypo]}>{`Verify
`}</Text>
        <Text style={[styles.finish, styles.verifyTypo]}>Finish</Text>
      </View>
      <View style={[styles.registerForm, styles.registerPosition]}>
        <View style={[styles.property1default, styles.property1variantLayout]}>
          <View style={[styles.userameWrapper, styles.userameWrapperPosition]}>
            <Text style={[styles.userame, styles.userameTypo]}>Userame</Text>
          </View>
        </View>
        <View style={[styles.property1variant2, styles.property1variantLayout]}>
          <View style={[styles.userameWrapper, styles.userameWrapperPosition]}>
            <Text style={[styles.userame, styles.userameTypo]}>Email</Text>
          </View>
        </View>
        <View style={[styles.property1variant3, styles.property1variantLayout]}>
          <View style={[styles.userameWrapper, styles.userameWrapperPosition]}>
            <Text style={[styles.userame, styles.userameTypo]}>
              Phone Number
            </Text>
          </View>
        </View>
        <View style={[styles.property1variant4, styles.property1variantLayout]}>
          <View style={[styles.userameWrapper, styles.userameWrapperPosition]}>
            <Text style={[styles.userame, styles.userameTypo]}>Password</Text>
          </View>
        </View>
      </View>
      <Text style={styles.register1}>Register</Text>
      <Image
        style={[styles.registerPageChild, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.registerbutton}>
        <Text style={[styles.register2, styles.userameTypo]}>Register</Text>
      </View>
      <Image
        style={[styles.registerPageItem, styles.userameWrapperPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userameWrapperPosition: {
    left: 0,
    position: "absolute",
  },
  componentLayout: {
    backgroundColor: Color.colorWhite,
    height: 7,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
    position: "absolute",
  },
  verifyTypo: {
    height: 20,
    width: 94,
    fontSize: FontSize.size_mini,
    top: 22,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  registerPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  property1variantLayout: {
    height: 54,
    width: 275,
    borderColor: Color.colorMediumpurple_100,
    borderRadius: Border.br_mini,
    left: 20,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
  },
  userameTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  componentChild: {
    left: 13,
    backgroundColor: Color.colorThistle,
    height: 7,
    width: 105,
    borderRadius: Border.br_81xl,
    top: 45,
    position: "absolute",
  },
  componentItem: {
    left: 131,
  },
  componentInner: {
    left: 248,
  },
  register: {
    color: Color.colorThistle,
    left: 33,
    width: 94,
    fontSize: FontSize.size_mini,
    top: 22,
  },
  verify: {
    left: 158,
    color: Color.colorWhite,
    width: 94,
    fontSize: FontSize.size_mini,
    top: 22,
  },
  finish: {
    left: 272,
    color: Color.colorWhite,
    width: 94,
    fontSize: FontSize.size_mini,
    top: 22,
  },
  rectangleParent: {
    backgroundColor: Color.colorMediumpurple_300,
    width: 360,
    height: 63,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  userame: {
    top: 18,
    left: 27,
    color: Color.colorBlack,
  },
  userameWrapper: {
    width: 229,
    height: 37,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  property1default: {
    top: 20,
  },
  property1variant2: {
    top: 94,
  },
  property1variant3: {
    top: 168,
  },
  property1variant4: {
    top: 242,
  },
  registerForm: {
    top: 335,
    left: 18,
    borderRadius: Border.br_8xs,
    width: 315,
    height: 316,
  },
  register1: {
    top: 299,
    fontSize: FontSize.size_11xl,
    color: Color.colorMediumpurple_400,
    width: 169,
    height: 35,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 33,
    position: "absolute",
  },
  registerPageChild: {
    height: "18.13%",
    width: "44.44%",
    top: "13.63%",
    right: "27.78%",
    bottom: "68.25%",
    left: "27.78%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  register2: {
    top: 4,
    left: 45,
    width: 78,
    height: 28,
    color: Color.colorWhite,
  },
  registerbutton: {
    top: 663,
    left: 96,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple_200,
    borderColor: Color.colorMediumpurple_400,
    width: 167,
    height: 36,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  registerPageItem: {
    top: 760,
    width: 361,
    height: 123,
  },
  registerPage: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default RegisterPage;
