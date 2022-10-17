import { View, Image, Text, Pressable, ScrollView, TextInput, ImageBackground } from 'react-native'
import styles from '../utils/styles/base';
import assets from '../utils/assets';
import { cloneElement, useEffect } from 'react';
import Icons from '../utils/assets';

import bolt1 from '../assets/img/bolt1.png';
import zoom from '../assets/img/zoom.png';
import plus from '../assets/img/plus.png';


export default function Setting({ navigation }: any) {

    const pressSearch = () => {
        navigation.navigate('main');
    }

    return (
        <View style={{ ...styles.background1 }}>
            <View style={{ ...styles.col, ...styles.a_center, ...styles.h85 }}>
                <Text style={{ ...styles.t6, ...styles.bold5, ...styles.mt14 }}>Settings</Text>
                <View style={{ ...styles.br30, ...styles.background0, ...styles.row, ...styles.j_between, ...styles.a_center, ...styles.p4, ...styles.w85, ...styles.pl6, ...styles.pr6, ...styles.mt5 }}>
                    <Text>Photo Connect Tutorial</Text>
                    <Icons.RightAngle />
                </View>
                <View style={{ ...styles.br30, ...styles.background0, ...styles.row, ...styles.j_between, ...styles.a_center, ...styles.p4, ...styles.w85, ...styles.pl6, ...styles.pr6, ...styles.mt2 }}>
                    <Text>Contact Support</Text>
                    <Icons.RightAngle />
                </View>
            </View>


            <View style={{ ...styles.h10, ...styles.ml3, ...styles.mr3, ...styles.background0, ...styles.br40, ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p6, ...styles.mt3, ...styles.pl10, ...styles.pr10 }}>
                <Pressable style={{ ...styles.row, ...styles.flex1 }} onPress={pressSearch}>
                    <Image source={zoom}></Image>
                </Pressable>
                <Pressable style={{ marginTop: '-17%' }} onPress={() => navigation.navigate('repair_new_gallery')}>
                    <View style={{ ...styles.row, ...styles.flex1, }}>
                        <Image source={plus}></Image>
                    </View>
                </Pressable>
                <Pressable style={{ ...styles.row, ...styles.flex1, ...styles.j_end }}>
                    <Image source={bolt1}></Image>
                </Pressable>
            </View>
        </View>
    );
}