import { View, Pressable, Text, Image } from 'react-native';
import Icons from '../utils/assets';
import styles from '../utils/styles/base';

import detail6 from '../assets/img/detail6.png';
import fileTo from '../assets/img/file-to.png';

export default function InitEstimate({ navigation }: any) {

    const goBack = () => {
        navigation.navigate('detail');
    }

    return (
        <View style={{ ...styles.col }}>
            <View style={{ ...styles.col, ...styles.a_center, ...styles.h90 }}>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.w80, ...styles.mt7 }}>
                    <Pressable onPress={goBack}>
                        <View style={{ ...styles.background0, ...styles.p3, ...styles.br20 }}>
                            <Icons.LeftArrowIcon></Icons.LeftArrowIcon>
                        </View>
                    </Pressable>
                    <Pressable>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Edit</Text>
                    </Pressable>
                </View>
                <Text style={{ ...styles.bold5, ...styles.t6, ...styles.mt5 }}>Initial Estimate</Text>
                <Image source={detail6} style={{ ...styles.w100, ...styles.mt3 }}></Image>
            </View>
            <View style={{ ...styles.row, ...styles.j_between, ...styles.a_center, ...styles.background0, ...styles.p4, ...styles.mt2 }}>
                <Icons.UploadIcon></Icons.UploadIcon>
                <Image source={fileTo}></Image>
                <Icons.DeleteIcon></Icons.DeleteIcon>
            </View>
        </View>
    );
}