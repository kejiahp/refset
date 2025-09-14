import {
  View,
  StyleSheet,
  ScrollView,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "./theme/type.theme";

type Props = {
  isScrollable?: boolean;
  outerViewStyle?: StyleProp<ViewStyle>;
  innerViewStyle?: StyleProp<ViewStyle>;
};

export default function Container({
  children,
  isScrollable,
  outerViewStyle,
  innerViewStyle,
}: React.PropsWithChildren<Props>) {
  return (
    <SafeAreaView style={[styles.outerView, outerViewStyle]}>
      {isScrollable ? (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <View style={[styles.innerView, innerViewStyle]}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.innerView, innerViewStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: SIZES.small,
  },
});
