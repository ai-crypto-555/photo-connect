import { ImageBackground, View, Text, Pressable, Image, TextInput } from 'react-native';
import styles from '../utils/styles/base';

import Icons from '../utils/assets';

import background from '../assets/img/back.png';
import close1 from '../assets/img/close1.png';
import scan from '../assets/img/scan.png';

export default function RepairNewGallery({ navigation }: any) {

    const createGallery = () => {
        navigation.navigate('detail');
    }

    return (
        <ImageBackground source={background} resizeMode="cover" style={{ ...styles.w100, ...styles.h100 }}>
            <View style={{ ...styles.col, ...styles.a_center, ...styles.p6 }}>
                <View style={{ ...styles.w100, ...styles.row, ...styles.j_end, ...styles.mt6 }}>
                    <Pressable onPress={() => navigation.navigate('main')}>
                        <Image source={close1}></Image>
                    </Pressable>
                </View>
                <Text style={{ ...styles.textcenter, ...styles.mt8, ...styles.t6, ...styles.bold6 }}>New Repair Gallery</Text>
                <View style={{ ...styles.mt8, ...styles.w90, ...styles.row, ...styles.j_between, ...styles.bbw2, ...styles.bcustome, ...styles.p1 }}>
                    <TextInput style={{ ...styles.black }} placeholderTextColor="black" placeholder="License Plate"></TextInput>
                    <Pressable>
                        <Image source={scan}></Image>
                    </Pressable>
                </View>
                <View style={{ ...styles.mt4, ...styles.w90, ...styles.row, ...styles.j_between, ...styles.bbw2, ...styles.bcustome, ...styles.p1 }}>
                    <TextInput style={{ ...styles.black }} placeholderTextColor="black" placeholder="Repair #Order"></TextInput>
                    <Pressable>
                        <Image source={scan}></Image>
                    </Pressable>
                </View>
                <Pressable style={{ ...styles.mt10, ...styles.w95 }} onPress={createGallery}>
                    <View style={{ ...styles.background2, ...styles.br20, ...styles.row, ...styles.j_center, ...styles.a_center, ...styles.p2 }}>
                        <Text style={{ ...styles.white, ...styles.t6 }}>+</Text>
                        <Text style={{ ...styles.white, ...styles.t3, ...styles.ml2 }}>Create Repair Gallery</Text>
                    </View>
                </Pressable>
            </View>
        </ImageBackground>
    );
}