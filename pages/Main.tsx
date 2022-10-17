import { View, Image, Text, Pressable, ScrollView } from 'react-native'
import styles from '../utils/styles/base';
import assets from '../utils/assets';
import { cloneElement, useEffect } from 'react';
import Icons from '../utils/assets';
import Scan from '../assets/img/scan.png';

import car1 from '../assets/img/car1.png';
import car2 from '../assets/img/car2.png';
import car3 from '../assets/img/car3.png';

import bolt from '../assets/img/bolt.png';
import zoom1 from '../assets/img/zoom1.png';
import plus from '../assets/img/plus.png';

/**
 * mock datas...
 */
const datas = [
    {
        image: car1,
        name: `AB1 23C`,
        code: `RO# 174423`
    },
    {
        image: car2,
        name: `AB1 23D`,
        code: `RO# 174424`
    },
    // {
    //     image: car3,
    //     name: `AB1 23E`,
    //     code: `RO# 174425`
    // },
]

const datas1 = [
    {
        image: car1,
        name: `AB1 23F`,
        code: `RO# 174426`
    },
    {
        image: car2,
        name: `AB1 23G`,
        code: `RO# 174427`
    },
    // {
    //     image: car3,
    //     name: `AB1 23H`,
    //     code: `RO# 174428`
    // },
]

export default function Main({ navigation }: any) {

    useEffect(() => {
        console.log(`12312`);
    }, [])

    const pressSetting = () => {
        navigation?.navigate('setting');
    }

    const pressSearch = () => {
        navigation?.navigate('search');
    }

    return (
        <View style={{ ...styles.col, ...styles.background1, ...styles.h100 }}>
            <View style={{ ...styles.col, ...styles.p6 }}>
                <View style={{ ...styles.row, ...styles.mt4, ...styles.a_center, ...styles.j_between }}>
                    <View style={{ ...styles.row, ...styles.background0, ...styles.p4, ...styles.br30, ...styles.a_center }}>
                        <Icons.Zoom />
                        <Text style={{ ...styles.ml2, ...styles.mr3, ...styles.grey, ...styles.t3 }}>Search by RO# or license plate</Text>
                        <Image source={Scan}></Image>
                    </View>
                    <Pressable onPress={() => { navigation?.navigate('filter') }}>
                        <View style={{ ...styles.background0, ...styles.br20, ...styles.p4, }}>
                            <Icons.Tool />
                        </View>
                    </Pressable>
                </View>

                <ScrollView style={{ ...styles.h70 }}>
                    <Text style={{ ...styles.lightdark, ...styles.t4, ...styles.ml3, ...styles.mt5, ...styles.mb2 }}>Latest Search</Text>
                    {
                        datas.map((item, key) => (
                            <View key={key} style={{ ...styles.row, ...styles.a_center, ...styles.background0, ...styles.p3, ...styles.br30, ...styles.j_between, ...styles.mt1, ...styles.mb1 }}>
                                <View style={{ ...styles.row, ...styles.a_center }}>
                                    <Image source={item.image} style={{ ...styles.ml1 }}></Image>
                                    <Text style={{ ...styles.black, ...styles.bold7, ...styles.ml3 }}>{item.name}</Text>
                                    {/* <View style={{ width: '2', ...styles.background1, ...styles.h100 }}></View> */}
                                    <Text style={{ ...styles.black, ...styles.bold7, ...styles.ml3 }}>{item.code}</Text>
                                </View>
                                <Icons.RightAngle />
                            </View>
                        ))
                    }

                    <Text style={{ ...styles.lightdark, ...styles.t4, ...styles.ml3, ...styles.mt5, ...styles.mb2 }}>Recent Repairs</Text>

                    {
                        datas1.map((item, key) => (
                            <View key={key} style={{ ...styles.row, ...styles.a_center, ...styles.background0, ...styles.p3, ...styles.br30, ...styles.j_between, ...styles.mt1, ...styles.mb1 }}>
                                <View style={{ ...styles.row, ...styles.a_center }}>
                                    <Image source={item.image} style={{ ...styles.ml1 }}></Image>
                                    <Text style={{ ...styles.black, ...styles.bold7, ...styles.ml3 }}>{item.name}</Text>
                                    {/* <View style={{ width: '2', ...styles.background1, ...styles.h100 }}></View> */}
                                    <Text style={{ ...styles.black, ...styles.bold7, ...styles.ml3 }}>{item.code}</Text>
                                </View>
                                <Icons.RightAngle />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>


            <View style={{ ...styles.h10, ...styles.ml3, ...styles.mr3, ...styles.background0, ...styles.br40, ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p6, ...styles.mt4, ...styles.pl10, ...styles.pr10 }}>
                <Pressable style={{ ...styles.row, ...styles.flex1 }} onPress={pressSearch}>
                    <Image source={zoom1}></Image>
                </Pressable>
                <Pressable style={{ marginTop: '-17%' }} onPress={() => navigation.navigate('repair_new_gallery')}>
                    <View style={{ ...styles.row, ...styles.flex1 }}>
                        <Image source={plus}></Image>
                    </View>
                </Pressable>
                <Pressable style={{ ...styles.row, ...styles.flex1, ...styles.j_end }} onPress={pressSetting}>
                    <Image source={bolt}></Image>
                </Pressable>
            </View>

        </View>
    );
}