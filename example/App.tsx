import BuyWithTransak from "BuyWithTransak/BuyWithTransak";
import { Button, StyleSheet, View } from "react-native";
import Modal from "Modal/Modal";
import { Fragment, useState } from "react";

export default function App() {
  const [visible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <View style={styles.container}>
        <Button title="Buy with transak" onPress={() => setIsVisible(true)} />
      </View>
      <Modal isVisible={visible} onClose={() => setIsVisible(false)}>
        <BuyWithTransak />
      </Modal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    justifyContent: "center",
    alignContent: "center",
  },
});
