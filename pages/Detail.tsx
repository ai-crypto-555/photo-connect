import { View, Pressable, Image, Text, ScrollView } from 'react-native';
import styles from '../utils/styles/base';
import Icons from '../utils/assets';

import detailImg from '../assets/img/detail_img.png';
import edit from '../assets/img/edit.png';
import edit1 from '../assets/img/edit1.png';
import camera from '../assets/img/camera.png';

export default function Detail({ navigation }: any) {

    return (
        <ScrollView style={{ ...styles.background1, ...styles.col }}>
            <View style={{ ...styles.col, ...styles.a_center }}>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.w80, ...styles.mt7 }}>
                    <Pressable onPress={() => { }}>
                        <View style={{ ...styles.background0, ...styles.p3, ...styles.br20 }}>
                            <Icons.LeftArrowIcon></Icons.LeftArrowIcon>
                        </View>
                    </Pressable>
                    <Pressable>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Select</Text>
                    </Pressable>
                </View>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.mt4 }}>
                    <Text style={{ ...styles.t5, ...styles.bold6 }}>AB1 23C</Text>
                    <Text style={{ ...styles.t5, ...styles.grey, ...styles.ml2, ...styles.mr2 }}>|</Text>
                    <Text style={{ ...styles.t5, ...styles.bold6 }}>RO# 176423</Text>
                </View>
            </View>

            <View style={{ ...styles.col, ...styles.mt3 }}>
                <Image source={detailImg} style={{ ...styles.w100 }} resizeMode="stretch" />
                <View style={{ ...styles.row, ...styles.j_end, ...styles.w95 }}>
                    <Pressable style={{ marginTop: '-5%' }}>
                        <Image source={edit}></Image>
                    </Pressable>
                </View>
            </View>

            <View style={{ ...styles.col, ...styles.w100, ...styles.p3 }}>

                <View style={{ ...styles.row }}>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>AB1 23C</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>License Plate</Text>

                    </View>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>176423</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>RO#</Text>

                    </View>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>Burnady</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>Location</Text>

                    </View>
                </View>

                <View style={{ ...styles.row }}>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>Aug 18, 2022</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>Created On</Text>

                    </View>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>Aug 29, 2022</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>Updated On</Text>

                    </View>
                    <View style={{ ...styles.flex1, ...styles.p3, ...styles.m1, ...styles.background0, ...styles.br10, ...styles.col, ...styles.a_center }}>
                        <Text style={{ ...styles.t3, ...styles.bold5 }}>13</Text>
                        <Text style={{ ...styles.t2, ...styles.blue }}>Photos</Text>

                    </View>
                </View>

            </View>

            <View style={{ ...styles.row, ...styles.j_center }}>
                <Pressable style={{ ...styles.mt3 }}>
                    <View style={{ ...styles.row, ...styles.background0, ...styles.br20, ...styles.p3, ...styles.pl5, ...styles.pr5 }}>
                        <Image source={edit1}></Image>
                        <Text style={{ ...styles.t3, ...styles.bold6, ...styles.ml1 }}>Edit Details</Text>
                    </View>
                </Pressable>
            </View>

            <View style={{ ...styles.mt5, ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                <View style={{ ...styles.row, ...styles.a_center }}>
                    <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                        <Icons.DollarIcon></Icons.DollarIcon>
                    </View>
                    <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Initial Estimate (5)</Text>
                </View>
                <Icons.DownAngle></Icons.DownAngle>
            </View>
            <View style={{ ...styles.row }}>
                <View style={{ ...styles.flex1 }}>
                    <Image source={camera}></Image>
                </View>
                <View style={{ ...styles.flex1 }}>

                </View>
                <View style={{ ...styles.flex1 }}>

                </View>
            </View>
            <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                <View style={{ ...styles.row, ...styles.a_center }}>
                    <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                        <Icons.PositionIcon></Icons.PositionIcon>
                    </View>
                    <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Drop Off (2)</Text>
                </View>
                <Icons.DownAngle></Icons.DownAngle>
            </View>
            <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                <View style={{ ...styles.row, ...styles.a_center }}>
                    <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                        <Icons.PlusIcon></Icons.PlusIcon>
                    </View>
                    <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Supplement (4)</Text>
                </View>
                <Icons.DownAngle></Icons.DownAngle>
            </View>
            <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                <View style={{ ...styles.row, ...styles.a_center }}>
                    <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                        <Icons.TickIcon></Icons.TickIcon>
                    </View>
                    <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Finished (3)</Text>
                </View>
                <Icons.DownAngle></Icons.DownAngle>
            </View>
            <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                <View style={{ ...styles.row, ...styles.a_center }}>
                    <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                        <Icons.AboutIcon></Icons.AboutIcon>
                    </View>
                    <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Uncategorized (0)</Text>
                </View>
                <Icons.DownAngle></Icons.DownAngle>
            </View>

        </ScrollView>
    );
}