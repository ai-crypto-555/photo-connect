import { View, Image, Text, Pressable, ScrollView, TextInput } from 'react-native'
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

export default function Search() {

    useEffect(() => {
        console.log(`12312`);
    }, [])

    return (
        <View style={{ ...styles.col, ...styles.background0, ...styles.h100 }}>
            <View style={{ ...styles.col, ...styles.p6 }}>
                <View style={{ ...styles.row, ...styles.mt4, ...styles.a_center }}>
                    <View style={{ ...styles.row, ...styles.background0, ...styles.p4, ...styles.br30, ...styles.a_center, borderBottomColor: '#ECECEC', borderBottomWidth: 1 }}>
                        <Icons.LeftArrow />
                        <TextInput style={{ ...styles.ml2, ...styles.w90 }}></TextInput>
                    </View>
                </View>
                <View style={{ ...styles.mt2 }}>
                    <View style={{ ...styles.row, ...styles.a_center, ...styles.p2 }}>
                        <Icons.Zoom />
                        <Text style={{ ...styles.grey, ...styles.ml4 }}>AB1 23B</Text>
                        <Text style={{ ...styles.grey, ...styles.ml3 }}>Ro# 176422</Text>
                    </View>
                    <View style={{ ...styles.row, ...styles.a_center, ...styles.p2 }}>
                        <Icons.Zoom />
                        <Text style={{ ...styles.grey, ...styles.ml4 }}>AB1 23B</Text>
                        <Text style={{ ...styles.grey, ...styles.ml3 }}>Ro# 176422</Text>
                    </View>
                    <View style={{ ...styles.row, ...styles.a_center, ...styles.p2 }}>
                        <Icons.Zoom />
                        <Text style={{ ...styles.grey, ...styles.ml4 }}>AB1 23B</Text>
                        <Text style={{ ...styles.grey, ...styles.ml3 }}>Ro# 176422</Text>
                    </View>
                    <View style={{ ...styles.row, ...styles.a_center, ...styles.p2 }}>
                        <Icons.Zoom />
                        <Text style={{ ...styles.grey, ...styles.ml4 }}>AB1 23B</Text>
                        <Text style={{ ...styles.grey, ...styles.ml3 }}>Ro# 176422</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}