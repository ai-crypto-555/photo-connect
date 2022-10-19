import { View, Pressable, Text, Image } from 'react-native';
import Icons from '../utils/assets';
import styles from '../utils/styles/base';

import trans from '../assets/img/trans.png';
import msg from '../assets/img/msg.png';
import write from '../assets/img/write.png';

import detail6 from '../assets/img/detail6.png';

export default function EditEstimate({ navigation }: any) {

    const goBack = () => {
        navigation.navigate('init_estimate');
    }

    const save = () => {
        navigation.navigate('detail');
    }

    return (
        <View style={{ ...styles.col }}>
            <View style={{ ...styles.col, ...styles.a_center, ...styles.h85 }}>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.w80, ...styles.mt8 }}>
                    <Pressable onPress={goBack}>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={save}>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Save Copy</Text>
                    </Pressable>
                </View>
                <Text style={{ ...styles.bold5, ...styles.t6, ...styles.mt5 }}>Initial Estimate</Text>
                <Image source={detail6} style={{ ...styles.w100, ...styles.mt3 }}></Image>
            </View>
            <View style={{ ...styles.row, ...styles.j_between, ...styles.a_center, ...styles.background0, ...styles.py2, ...styles.px4, ...styles.mt6 }}>
                <Image source={trans}></Image>
                <Image source={msg}></Image>
                <Image source={write}></Image>
            </View>
        </View>
    );
}