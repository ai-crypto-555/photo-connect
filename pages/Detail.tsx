import { useState } from 'react';
import { View, Pressable, Image, Text, ScrollView } from 'react-native';
import styles from '../utils/styles/base';
import Icons from '../utils/assets';

import detailImg from '../assets/img/detail_img.png';
import edit from '../assets/img/edit.png';
import edit1 from '../assets/img/edit1.png';
import camera from '../assets/img/camera.png';

import detail1 from '../assets/img/detail1.png';
import detail2 from '../assets/img/detail2.png';
import detail3 from '../assets/img/detail3.png';
import detail4 from '../assets/img/detail4.png';
import detail5 from '../assets/img/detail5.png';

import fileTo from '../assets/img/file-to.png';

export default function Detail({ navigation }: any) {

    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);

    const [clickInitial, setClickInitial] = useState(true);

    const InitEstimate = () => {
        navigation.navigate('init_estimate');
    }

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

            <Pressable onPress={() => setClickInitial(!clickInitial)}>
                <View style={{ ...styles.mt5, ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.p4, ...styles.background3, ...styles.bw1, ...styles.bcustome1 }}>
                    <View style={{ ...styles.row, ...styles.a_center }}>
                        <View style={{ ...styles.py1, ...styles.px2, ...styles.background0, ...styles.br8 }}>
                            <Icons.DollarIcon></Icons.DollarIcon>
                        </View>
                        <Text style={{ ...styles.ml2, ...styles.t3, ...styles.bold5 }}>Initial Estimate (5)</Text>
                    </View>
                    <Icons.DownAngle></Icons.DownAngle>
                </View>
            </Pressable>

            {
                clickInitial &&
                <>
                    <View style={{ ...styles.row }}>
                        <View style={{ ...styles.flex1, ...styles.p1 }}>
                            <Image source={camera} style={{ ...styles.w100 }}></Image>
                        </View>
                        <View style={{ ...styles.flex1, ...styles.py1 }}>
                            <Pressable onLongPress={() => setClick1(!click1)} onPress={InitEstimate}>
                                <Image source={detail1} style={{ ...styles.w100, ...styles.relative }}></Image>
                                <Pressable style={{ ...styles.absolute, right: '5%', top: '8%' }}>
                                    <Icons.RefreshIcon></Icons.RefreshIcon>
                                </Pressable>
                                {
                                    click1 &&
                                    <View style={{ ...styles.absolute, right: '5%', bottom: '8%' }}>
                                        <Icons.CheckIcon></Icons.CheckIcon>
                                    </View>
                                }
                            </Pressable>
                        </View>
                        <View style={{ ...styles.flex1, ...styles.p1, ...styles.relative }}>
                            <Pressable onLongPress={() => setClick2(!click2)} onPress={InitEstimate}>
                                <Image source={detail2} style={{ ...styles.w100 }}></Image>
                                <Pressable style={{ ...styles.absolute, right: '5%', top: '8%' }}>
                                    <Icons.CloudIcon></Icons.CloudIcon>
                                </Pressable>
                                {
                                    click2 &&
                                    <View style={{ ...styles.absolute, right: '5%', bottom: '8%' }}>
                                        <Icons.CheckIcon></Icons.CheckIcon>
                                    </View>
                                }
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ ...styles.row, marginTop: '-1%' }}>
                        <View style={{ ...styles.flex1, ...styles.p1, ...styles.relative }}>
                            <Pressable onLongPress={() => setClick3(!click3)} onPress={InitEstimate}>
                                <Image source={detail3} style={{ ...styles.w100 }}></Image>
                                <Pressable style={{ ...styles.absolute, right: '5%', top: '8%' }}>
                                    <Icons.CloudIcon></Icons.CloudIcon>
                                </Pressable>
                                {
                                    click3 &&
                                    <View style={{ ...styles.absolute, right: '5%', bottom: '8%' }}>
                                        <Icons.CheckIcon></Icons.CheckIcon>
                                    </View>
                                }
                            </Pressable>
                        </View>
                        <View style={{ ...styles.flex1, ...styles.py1, ...styles.relative }}>
                            <Pressable onLongPress={() => setClick4(!click4)} onPress={InitEstimate}>
                                <Image source={detail4} style={{ ...styles.w100 }}></Image>
                                <Pressable style={{ ...styles.absolute, right: '5%', top: '8%' }}>
                                    <Icons.CloudIcon></Icons.CloudIcon>
                                </Pressable>
                                {
                                    click4 &&
                                    <View style={{ ...styles.absolute, right: '5%', bottom: '8%' }}>
                                        <Icons.CheckIcon></Icons.CheckIcon>
                                    </View>
                                }
                            </Pressable>
                        </View>
                        <View style={{ ...styles.flex1, ...styles.p1, ...styles.relative }}>
                            <Pressable onLongPress={() => setClick5(!click5)} onPress={InitEstimate}>
                                <Image source={detail5} style={{ ...styles.w100 }}></Image>
                                <Pressable style={{ ...styles.absolute, right: '5%', top: '8%' }}>
                                    <Icons.CloudIcon></Icons.CloudIcon>
                                </Pressable>
                                {
                                    click5 &&
                                    <View style={{ ...styles.absolute, right: '5%', bottom: '8%' }}>
                                        <Icons.CheckIcon></Icons.CheckIcon>
                                    </View>
                                }
                            </Pressable>
                        </View>
                    </View>
                </>
            }

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

            {
                (click1 || click2 || click3 || click4) &&
                <View style={{ ...styles.row, ...styles.j_between, ...styles.a_center, ...styles.background4, ...styles.p6 }}>
                    <View style={{ ...styles.row, ...styles.a_center }}>
                        <Pressable>
                            <Icons.UploadIcon></Icons.UploadIcon>
                        </Pressable>
                        <Pressable>
                            <Image source={fileTo} style={{ ...styles.ml4 }}></Image>
                        </Pressable>
                        <Text style={{ ...styles.ml5, ...styles.bold5, ...styles.t4 }}>4 Photos Selected</Text>
                    </View>
                    <Icons.DeleteIcon></Icons.DeleteIcon>
                </View>
            }

        </ScrollView>
    );
}