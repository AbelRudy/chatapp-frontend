import Toast from "react-native-root-toast";
import Colors from "./Colors";

export default function(message) {
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM - 20,
        backgroundColor: Colors.secondary,
        textColor: Colors.primary
    })
}