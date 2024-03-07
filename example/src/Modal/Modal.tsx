import { Button, View } from "react-native";
import ReactNativeModal, { ModalProps } from "react-native-modal";

export default function Modal({ children, onClose, ...props }: Partial<ModalProps> & { onClose: () => void }) {
  return (
    <ReactNativeModal hasBackdrop={false} style={{ padding: 0, margin: 0 }} {...props}>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <Button title="Close" onPress={onClose} />
        {children}
      </View>
    </ReactNativeModal>
  );
}
