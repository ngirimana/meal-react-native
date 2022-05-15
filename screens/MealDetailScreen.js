import { View, Text } from "react-native";

const MealDetailItem = ({ route }) => {
  const mealId=route.params.mealId
  return (
    <View>
      <Text>This is the Meal Detail Screen ({mealId}) </Text>
    </View>
  );
};

export default MealDetailItem;
