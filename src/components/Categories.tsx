import { Text, Image, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DCategories } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import axiosInstance from "../lib/index";
import { useEffect, useState } from "react";
import { ICategories } from "../interface";

const Categories = ({ activeCategory, setActiveCategory }: any) => {

    const [allCategories, setAllCategories] = useState<ICategories[]>([])

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/categories.php')
            setAllCategories(response.data.categories)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 5 }} className="space-x-2">
                {allCategories && allCategories.map((item, index) => {

                    let isActive = item.strCategory == activeCategory
                    let activeBtn = isActive ? ' bg-blue-200' : ' bg-white';

                    return (
                        <TouchableOpacity key={index}
                            onPress={() => setActiveCategory(item.strCategory)}
                            style={{ borderRadius: 100, alignItems: 'center', padding: hp(1) }}
                        >

                            <View className={"p-2 rounded-full" + activeBtn}>
                                <Image source={{ uri: item.strCategoryThumb }} style={{ width: wp(13), height: hp(6), borderRadius: 100, objectFit: 'cover' }} />
                            </View>
                            <Text style={{ fontSize: hp(1.5), fontWeight: '300' }} >{item.strCategory}</Text>
                        </TouchableOpacity>
                    )
                }
                )
                }
            </ScrollView>
        </Animated.View>
    )

}

export default Categories;