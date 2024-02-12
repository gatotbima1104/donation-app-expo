import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BellAlertIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from "../components/Categories";

const Home = ({ navigation }: any) => {
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }} className="border pt-14 space-y-6">

                {/* Avatar */}
                <View className="flex-row justify-between mx-4 items-center mb-4">
                    <Image source={require('../../assets/profile.jpg')} style={{ width: wp(15), height: hp(7), borderRadius: 100 }} />
                    <BellAlertIcon color={'black'} size={hp(3)} />
                </View>

                {/* Title Home  */}
                <View className="mx-4 space-y-2">
                    <Text style={{ fontSize: hp(1.5) }}>Hi, Gatot</Text>
                    <Text style={{ fontSize: hp(3) }}>
                        Sharing is <Text className="text-blue-600">Everything</Text>
                    </Text>
                </View>

                {/* Search Bar */}
                <View className="mx-4 flex-row items-center bg-slate-200 rounded-full">
                    <TextInput
                        placeholder="Seach your donation"
                        className="p-4 flex-1 tracking-wider pl-3"
                        placeholderTextColor={'grey'}
                        style={{ fontSize: hp(1.5) }}
                    />

                    <TouchableOpacity className="bg-white p-2 rounded-full mr-1">
                        <MagnifyingGlassIcon color={'black'} strokeWidth={2} size={hp(2)} />
                    </TouchableOpacity>
                </View>

                {/* list donation */}
                <View className="mx-4">
                    <Categories />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;