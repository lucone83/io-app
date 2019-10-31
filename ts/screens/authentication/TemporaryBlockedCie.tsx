import { Option } from "fp-ts/lib/Option";
import { Button, Container, H1, Text, View } from "native-base";
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { connect } from "react-redux";
import BaseScreenComponent from "../../components/screens/BaseScreenComponent";
import FooterWithButtons from "../../components/ui/FooterWithButtons";
import IconFont from "../../components/ui/IconFont";
import I18n from "../../i18n";
import customVariables from "../../theme/variables";

type OwnProps = Readonly<{
  navigation: NavigationScreenProp<NavigationState>;
}>;
type Props = OwnProps;
type State = Readonly<{
  securityCode: Option<string>;
  holder: Option<string>;
}>;
const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: customVariables.contentPadding
  },
  text: {
    fontSize: customVariables.fontSizeBase
  }
});

class TemporaryBlockedCie extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): React.ReactNode {
    const cancelButtonProps = {
      block: true,
      cancel: true,
      onPress: (): boolean => this.props.navigation.goBack(),
      title: I18n.t("global.buttons.cancel")
    };
    const retryButtonProps = {
      block: true,
      primary: true,
      onPress: () => undefined,
      title: I18n.t("authentication.cie.temporaryBlockedCieDoneButton")
    };

    return (
      <Container>
        <BaseScreenComponent goBack={true}>
          <View style={styles.contentContainerStyle}>
            <H1>{I18n.t("authentication.cie.temporaryBlockedCieTitle")}</H1>
            <View spacer={true} />
            <Text style={styles.text}>
              {I18n.t("authentication.cie.temporaryBlockedCieContent1")}
            </Text>
            <Text style={styles.text}>
              {I18n.t("authentication.cie.temporaryBlockedCieContent2")}
              <Text style={styles.text} bold={true}>
                {I18n.t("authentication.cie.temporaryBlockedCieContent2-bold")}
              </Text>
              <Text style={styles.text}>
                {I18n.t("authentication.cie.temporaryBlockedCieContent3")}
              </Text>
            </Text>
            <Text style={styles.text}>
              {I18n.t("authentication.cie.temporaryBlockedCieContent4")}
              <Text style={styles.text} bold={true}>
                {I18n.t("authentication.cie.temporaryBlockedCieContent4-bold")}
              </Text>
              <Text style={styles.text}>
                {I18n.t("authentication.cie.temporaryBlockedCieContent5")}
                <Text style={styles.text} bold={true}>
                  {I18n.t(
                    "authentication.cie.temporaryBlockedCieContent5-bold"
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.text}>
              {I18n.t("authentication.cie.temporaryBlockedCieContent6")}
            </Text>
            <View spacer={true} />
            <Button
              block={true}
              primary={true}
              iconLeft={true}
              onPress={undefined}
              testID="landing-button-login-cie"
            >
              <IconFont name="io-cie" color={customVariables.colorWhite} />
              <Text>
                {I18n.t("authentication.cie.temporaryBlockedCieOpenCieID")}
              </Text>
            </Button>
          </View>
        </BaseScreenComponent>
        <FooterWithButtons
          type="TwoButtonsInlineThird"
          rightButton={retryButtonProps}
          leftButton={cancelButtonProps}
        />
      </Container>
    );
  }
}
export default connect()(TemporaryBlockedCie);
