import { View, Image, Text, Pressable, ScrollView, TextInput, Button } from 'react-native'
import styles from '../utils/styles/base';
import assets from '../utils/assets';
import { cloneElement, useEffect, useState } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from 'react-native-date-picker';

import Icons from '../utils/assets';


import close from '../assets/img/close.png';

export default function Filter({ navigation }: any) {

    const [locationOpen, setlocationOpen] = useState(false);
    const [location, setlocation] = useState([
        { label: "Automind Burnady", value: "auto" },
        { label: "Los Angeles", value: "los" },
        { label: "HongKong", value: "hk" },
    ]);
    const [locationValue, setlocationValue] = useState(null);
    const onlocationOpen = () => {

    }

    const onChange = (evt: any) => {
        console.log(`evt::`, evt);
    }

    const [dateOpen, setdateOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const onClose = () => {
        navigation.navigate('main');
    }

    return (
        <View style={{ ...styles.background0, ...styles.h100 }}>
            <View style={{ ...styles.col, ...styles.p5 }}>

                <Pressable onPress={onClose}>
                    <View style={{ ...styles.row, ...styles.w100, ...styles.j_end, ...styles.mt5 }}>
                        <Image source={close}></Image>
                    </View>
                </Pressable>
                <Text style={{ ...styles.t6, ...styles.mt3, ...styles.bold7, ...styles.textcenter }}>Filter</Text>
                <Text style={{ ...styles.mt4, ...styles.grey, ...styles.t4, ...styles.ml2 }}>Store Location</Text>
                <DropDownPicker
                    style={{ ...styles.background1, ...styles.br30, ...styles.bw0, ...styles.mt2 }}
                    dropDownContainerStyle={{ ...styles.bw0, ...styles.mt2 }}
                    placeholderStyle={{ ...styles.t3, ...styles.bold5, ...styles.ml2 }}
                    labelStyle={{ ...styles.t3, ...styles.bold5, ...styles.ml2 }}
                    listItemLabelStyle={{ ...styles.t3, ...styles.bold5, ...styles.ml2 }}
                    open={locationOpen}
                    value={locationValue} //locationValue
                    items={location}
                    setOpen={setlocationOpen}
                    setValue={setlocationValue}
                    setItems={setlocation}
                    placeholder="Select Location"
                    // placeholderStyle={styles.placeholderStyles}
                    onOpen={onlocationOpen}
                    onChangeValue={onChange}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
                <Text style={{ ...styles.mt4, ...styles.grey, ...styles.t4, ...styles.ml2 }}>Date Range</Text>
                {/* <Button title="Open" onPress={() => setdateOpen(true)} /> */}
                {/* <DatePicker
                    modal
                    open={dateOpen}
                    date={date}
                    onConfirm={(date) => {
                        setdateOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setdateOpen(false)
                    }}
                /> */}
            </View>
        </View>
    );
}
