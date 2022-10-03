import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProjectView from "../components/ProjectView";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "Projects">;

export default function Projects({ navigation }: Props) {
  return <ProjectView navigation={navigation} />;
}
