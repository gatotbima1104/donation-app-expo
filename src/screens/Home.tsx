import { Text, View, StatusBar } from "react-native";

const Home = ({navigation}: any) => {
    return (
        <View className="flex-1 bg-white items-center justify-center">
            <Text>Coming Soon</Text>
            <StatusBar barStyle={"default"} />
        </View>
    )
}

export default Home;