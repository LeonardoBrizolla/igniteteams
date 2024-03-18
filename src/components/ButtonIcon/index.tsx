import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
  onRemove?: () => void;
}

export function ButtonIcon({ icon, type = "PRIMARY", onRemove, ...rest }: Props) {
  return (
    <Container {...rest} onPress={onRemove}>
      <Icon name={icon} type={type} />
    </Container>
  )
}