import { Text, Image, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DCategories } from "../constants";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }} className="space-x-5">
            {DCategories && DCategories.map((item, index) =>
                <TouchableOpacity key={index} className="border">
                    {/* <View className="border">
                        <Image source={item.image} style={{ width: 50, height: 40}} className="rounded-full"/>
                    </View> */}
                    {/* <Text style={{ fontSize: hp(1.5) }}>{item.name}</Text> */}
                </TouchableOpacity>

            )}
        </ScrollView>
    )

}

export default Categories;