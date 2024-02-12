import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from "react";

const Welcome = ({ navigation }: any) => {

    const ring1 = useSharedValue(0)
    const ring2 = useSharedValue(0)
    const ring3 = useSharedValue(0)

    const imageWidth = useSharedValue(0)
    const imageHeight = useSharedValue(0)

    useEffect(() => {
        ring1.value = 0
        ring2.value = 0
        ring3.value = 0

        imageWidth.value = 0
        imageHeight.value = 0

        setTimeout(() => ring1.value = withSpring(ring1.value + hp(2)), 1000)
        setTimeout(() => ring2.value = withSpring(ring2.value + hp(4)), 1200)
        setTimeout(() => ring3.value = withSpring(ring3.value + hp(6)), 1500)

        setTimeout(() => imageWidth.value = withSpring(imageWidth.value + wp(40)), 800)
        setTimeout(() => imageHeight.value = withSpring(imageHeight.value + hp(18)), 800)

        // setTimeout(() => navigation.navigate('Home'), 3000)

    }, [])

    return (
        <View className="flex-1 bg-blue-200 justify-center items-center space-y-10">
            <StatusBar style="light" />

            {/* Donation image */}
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring3 }}>
                <Animated.View className="bg-white/30 rounded-full" style={{ padding: ring2 }}>
                    <Animated.View className="bg-white/40 rounded-full" style={{ padding: ring1 }}>
                        <Animated.Image source={require('../../assets/charity.jpeg')} style={{ width: imageWidth, height: imageHeight, borderRadius: 100, objectFit: 'cover' }} />
                    </Animated.View>
                </Animated.View>
            </Animated.View>

            {/* Donation title */}
            <View className="space-y-4 items-center">
                <Text className="font-semibold text-blue-950 tracking-wider" style={{ fontSize: hp(5) }}>Charity</Text>
                <Text className="font-normal text-blue-950 tracking-wider" style={{ fontSize: hp(1.5) }}>Share And Send Smiles</Text>
            </View>
        </View>
    )
}

export default Welcome;
