import { useState } from 'react';
import { View, Pressable, Text, Image, TextInput, } from 'react-native';
import Icons from '../utils/assets';
import styles from '../utils/styles/base';
import Modal from 'react-native-modal';

export default function EditDetail({ navigation }: any) {

    const [visible, setVisible] = useState(false);

    const goBack = () => {

    }

    const save = () => {

    }

    const onCancel = () => {
        setVisible(false);
        navigation.navigate('detail')
    }

    const onDelete = () => {
        setVisible(false);
        navigation.navigate('detail')
    }

    return (
        <View style={{ ...styles.col }}>
            <View style={{ ...styles.col, ...styles.a_center, ...styles.h90 }}>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.j_between, ...styles.w80, ...styles.mt8 }}>
                    <Pressable onPress={goBack}>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={save}>
                        <Text style={{ ...styles.t3, ...styles.blue, ...styles.bold5 }}>Save</Text>
                    </Pressable>
                </View>
                <Text style={{ ...styles.bold5, ...styles.t6, ...styles.mt8 }}>Edit Details</Text>
                <View style={{ ...styles.mt14, ...styles.w80, ...styles.row, ...styles.j_between, ...styles.bbw2, ...styles.bcustome, ...styles.p1 }}>
                    <TextInput style={{ ...styles.black }} placeholderTextColor="black" placeholder="License Plate"></TextInput>
                </View>
                <View style={{ ...styles.mt4, ...styles.w80, ...styles.row, ...styles.j_between, ...styles.bbw2, ...styles.bcustome, ...styles.p1 }}>
                    <TextInput style={{ ...styles.black }} placeholderTextColor="black" placeholder="Repair #Order"></TextInput>
                </View>
            </View>
            <Pressable onPress={() => setVisible(!visible)}>
                <View style={{ ...styles.row, ...styles.a_center, ...styles.j_center }}>
                    <Icons.DeleteIcon color="rgba(0, 65, 196, 1)"></Icons.DeleteIcon>
                    <Text style={{ ...styles.blue, ...styles.ml2 }}>Delete Repair Gallery</Text>
                </View>
            </Pressable>
            <View>
                <Modal isVisible={visible}>
                    <View style={{ ...styles.col, ...styles.a_center, ...styles.w80, ...styles.ml6, ...styles.br10, backgroundColor: 'rgba(244, 246, 248, 0.8)' }}>
                        <View style={{ ...styles.col, ...styles.a_center, ...styles.p5, ...styles.bbw1, ...styles.bgrey }}>
                            <Text style={{ ...styles.t4, ...styles.bold5, ...styles.mt2, ...styles.mb3 }}>Confirmation</Text>
                            <Text style={{ ...styles.t3, ...styles.bold4, ...styles.textcenter }}>Are you sure want to delete permanently this repair order gallery?</Text>
                        </View>
                        <View style={{ ...styles.row }}>
                            <Pressable style={{ ...styles.flex1 }} onPress={onCancel}>
                                <View style={{ ...styles.p3 }}>
                                    <Text style={{ ...styles.textcenter }}>Cancel</Text>
                                </View>
                            </Pressable>
                            <View style={{ ...styles.bw1, ...styles.bgrey }}></View>
                            <Pressable style={{ ...styles.flex1 }} onPress={onDelete}>
                                <View style={{ ...styles.p3 }}>
                                    <Text style={{ ...styles.textcenter, ...styles.blue }}>Delete</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}