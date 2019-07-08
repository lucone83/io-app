import I18n from "i18n-js";
import { Container, Content, Text, View } from "native-base";
import * as React from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import customVariables from "../theme/variables";
import FooterWithButtons from "./ui/FooterWithButtons";

type Props = {
  items: ReadonlyArray<any>;
  keyExtractor: (item: any, index: number) => string;
  renderItem: ListRenderItem<any>;
  onCancel: () => void;
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    alignSelf: "stretch",
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  itemSeparator: {
    height: 1,
    marginLeft: customVariables.contentPadding,
    marginRight: customVariables.contentPadding,
    backgroundColor: customVariables.brandLightGray
  }
});

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export class ChooserListComponent extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  private onPressCancel = () => {
    this.props.onCancel();
  };

  private onPressSave = () => {
    this.onPressCancel();
  };

  /**
   * Footer
   */
  private renderFooterButtons() {
    const cancelButtonProps = {
      block: true,
      light: true,
      bordered: true,
      onPress: this.onPressCancel,
      title: I18n.t("global.buttons.cancel")
    };
    const saveButtonProps = {
      block: true,
      primary: true,
      onPress: this.onPressSave,
      title: I18n.t("global.buttons.saveSelection")
    };

    return (
      <FooterWithButtons
        type="TwoButtonsInlineThird"
        leftButton={cancelButtonProps}
        rightButton={saveButtonProps}
      />
    );
  }

  /**
   * Empty list
   */

  private renderListEmptyComponent() {
    return (
      <View>
        <Text>Nessun elemento</Text>
      </View>
    );
  }

  public render() {
    const { items, keyExtractor, renderItem } = this.props;

    return (
      <Container style={styles.container}>
        <Content
          noPadded={true}
          keyboardShouldPersistTaps="always"
          style={styles.scrollView}
        >
          <View>
            {items.length > 0 ? (
              <FlatList
                keyboardShouldPersistTaps="always"
                removeClippedSubviews={false}
                data={items}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
              />
            ) : (
              this.renderListEmptyComponent()
            )}
          </View>
        </Content>
        {this.renderFooterButtons()}
      </Container>
    );
  }
}