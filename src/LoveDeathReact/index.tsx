import { View } from "react-native";
import { useVideoConfig } from "remotion";

import { Button } from 'react-native-paper';

const Comp = () => {
  const { fps } = useVideoConfig();
  const cuts = [2 * fps, fps, fps + 4, 1, 19, 18, 19, 13, 40, 17, 102] as const;
  const from = (index: number) => cuts.slice(0, index).reduce((a, v) => a + v);
  return (
    <View style={{ flex: 1 }}>
      <Button >Hello</Button>
    </View>
  );
};

export default Comp;
