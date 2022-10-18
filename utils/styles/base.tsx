import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const colors = {
    blue: '#0041C4',
    lightGrey: '#E9ECF1',
    grey: '#ABABAB',
    black: '#000000',
    white: '#FFFFFF'
}

const styles = StyleSheet.create({

    background0: { backgroundColor: colors.white },
    background1: { backgroundColor: colors.lightGrey },
    background2: { backgroundColor: '#1A1726' },
    background3: { backgroundColor: 'rgba(150, 150, 150, 0.05)' },
    background4: { backgroundColor: 'rgba(255, 255, 255, 0.3)' },

    white: { color: colors.white },
    grey: { color: colors.grey },
    black: { color: colors.black },
    blue: { color: colors.blue },

    bold1: { fontWeight: '100' },
    bold2: { fontWeight: '200' },
    bold3: { fontWeight: '300' },
    bold4: { fontWeight: '400' },
    bold5: { fontWeight: '500' },
    bold6: { fontWeight: '600' },
    bold7: { fontWeight: '700' },
    bold8: { fontWeight: '800' },
    bold9: { fontWeight: '900' },
    bold10: { fontWeight: 'bold' },

    lightdark: { color: 'rgba(0,0,0,0.3)' },

    t1: { fontSize: hp('1%') },
    t2: { fontSize: hp('1.5%') },
    t3: { fontSize: hp('2%') },
    t4: { fontSize: hp('2.5%') },
    t5: { fontSize: hp('3%') },
    t6: { fontSize: hp('3.5%') },
    t7: { fontSize: hp('4%') },

    textcenter: { textAlign: 'center' },
    textleft: { textAlign: 'left' },
    textright: { textAlign: 'right' },

    j_center: { justifyContent: 'center' },
    j_start: { justifyContent: 'flex-start' },
    j_end: { justifyContent: 'flex-end' },
    j_between: { justifyContent: 'space-between' },

    a_center: { alignItems: 'center' },
    a_start: { alignItems: 'flex-start' },
    a_end: { alignItems: 'flex-end' },

    m1: { margin: hp('1%') },
    m2: { margin: hp('2%') },
    m3: { margin: hp('3%') },
    m4: { margin: hp('4%') },
    m5: { margin: hp('5%') },
    m6: { margin: hp('6%') },
    m7: { margin: hp('7%') },
    m8: { margin: hp('8%') },
    m9: { margin: hp('9%') },
    m10: { margin: hp('10%') },
    m12: { margin: hp('12%') },
    m14: { margin: hp('14%') },
    m16: { margin: hp('16%') },
    m18: { margin: hp('18%') },
    m20: { margin: hp('20%') },
    m25: { margin: hp('25%') },
    m30: { margin: hp('30%') },
    m35: { margin: hp('35%') },
    m40: { margin: hp('40%') },
    m45: { margin: hp('45%') },
    m50: { margin: hp('50%') },

    ml1: { marginLeft: hp('1%') },
    ml2: { marginLeft: hp('2%') },
    ml3: { marginLeft: hp('3%') },
    ml4: { marginLeft: hp('4%') },
    ml5: { marginLeft: hp('5%') },
    ml6: { marginLeft: hp('6%') },
    ml7: { marginLeft: hp('7%') },
    ml8: { marginLeft: hp('8%') },
    ml9: { marginLeft: hp('9%') },
    ml10: { marginLeft: hp('10%') },
    ml12: { marginLeft: hp('12%') },
    ml14: { marginLeft: hp('14%') },
    ml16: { marginLeft: hp('16%') },
    ml18: { marginLeft: hp('18%') },
    ml20: { marginLeft: hp('20%') },
    ml25: { marginLeft: hp('25%') },
    ml30: { marginLeft: hp('30%') },
    ml35: { marginLeft: hp('35%') },
    ml40: { marginLeft: hp('40%') },
    ml45: { marginLeft: hp('45%') },
    ml50: { marginLeft: hp('50%') },

    mr1: { marginRight: hp('1%') },
    mr2: { marginRight: hp('2%') },
    mr3: { marginRight: hp('3%') },
    mr4: { marginRight: hp('4%') },
    mr5: { marginRight: hp('5%') },
    mr6: { marginRight: hp('6%') },
    mr7: { marginRight: hp('7%') },
    mr8: { marginRight: hp('8%') },
    mr9: { marginRight: hp('9%') },
    mr10: { marginRight: hp('10%') },
    mr12: { marginRight: hp('12%') },
    mr14: { marginRight: hp('14%') },
    mr16: { marginRight: hp('16%') },
    mr18: { marginRight: hp('18%') },
    mr20: { marginRight: hp('20%') },
    mr25: { marginRight: hp('25%') },
    mr30: { marginRight: hp('30%') },
    mr35: { marginRight: hp('35%') },
    mr40: { marginRight: hp('40%') },
    mr45: { marginRight: hp('45%') },
    mr50: { marginRight: hp('50%') },

    mt1: { marginTop: hp('1%') },
    mt2: { marginTop: hp('2%') },
    mt3: { marginTop: hp('3%') },
    mt4: { marginTop: hp('4%') },
    mt5: { marginTop: hp('5%') },
    mt6: { marginTop: hp('6%') },
    mt7: { marginTop: hp('7%') },
    mt8: { marginTop: hp('8%') },
    mt9: { marginTop: hp('9%') },
    mt10: { marginTop: hp('10%') },
    mt12: { marginTop: hp('12%') },
    mt14: { marginTop: hp('14%') },
    mt16: { marginTop: hp('16%') },
    mt18: { marginTop: hp('18%') },
    mt20: { marginTop: hp('20%') },
    mt25: { marginTop: hp('25%') },
    mt30: { marginTop: hp('30%') },
    mt35: { marginTop: hp('35%') },
    mt40: { marginTop: hp('40%') },
    mt45: { marginTop: hp('45%') },
    mt50: { marginTop: hp('50%') },

    mb1: { marginBottom: hp('1%') },
    mb2: { marginBottom: hp('2%') },
    mb3: { marginBottom: hp('3%') },
    mb4: { marginBottom: hp('4%') },
    mb5: { marginBottom: hp('5%') },
    mb6: { marginBottom: hp('6%') },
    mb7: { marginBottom: hp('7%') },
    mb8: { marginBottom: hp('8%') },
    mb9: { marginBottom: hp('9%') },
    mb10: { marginBottom: hp('10%') },
    mb12: { marginBottom: hp('12%') },
    mb14: { marginBottom: hp('14%') },
    mb16: { marginBottom: hp('16%') },
    mb18: { marginBottom: hp('18%') },
    mb20: { marginBottom: hp('20%') },
    mb25: { marginBottom: hp('25%') },
    mb30: { marginBottom: hp('30%') },
    mb35: { marginBottom: hp('35%') },
    mb40: { marginBottom: hp('40%') },
    mb45: { marginBottom: hp('45%') },
    mb50: { marginBottom: hp('50%') },

    p1: { padding: wp('1%') },
    p2: { padding: wp('2%') },
    p3: { padding: wp('3%') },
    p4: { padding: wp('4%') },
    p5: { padding: wp('5%') },
    p6: { padding: wp('6%') },
    p7: { padding: wp('7%') },
    p8: { padding: wp('8%') },
    p9: { padding: wp('9%') },
    p10: { padding: wp('10%') },
    p12: { padding: wp('12%') },
    p14: { padding: wp('14%') },
    p16: { padding: wp('16%') },
    p18: { padding: wp('18%') },
    p20: { padding: wp('20%') },
    p25: { padding: wp('25%') },
    p30: { padding: wp('30%') },
    p35: { padding: wp('35%') },
    p40: { padding: wp('40%') },
    p45: { padding: wp('45%') },
    p50: { padding: wp('50%') },

    px1: { paddingLeft: wp('1%'), paddingRight: wp('1%') },
    px2: { paddingLeft: wp('2%'), paddingRight: wp('2%') },
    px3: { paddingLeft: wp('3%'), paddingRight: wp('3%') },
    px4: { paddingLeft: wp('4%'), paddingRight: wp('4%') },
    px5: { paddingLeft: wp('5%'), paddingRight: wp('5%') },
    px6: { paddingLeft: wp('6%'), paddingRight: wp('6%') },
    px7: { paddingLeft: wp('7%'), paddingRight: wp('7%') },
    px8: { paddingLeft: wp('8%'), paddingRight: wp('8%') },
    px9: { paddingLeft: wp('9%'), paddingRight: wp('9%') },
    px10: { paddingLeft: wp('10%'), paddingRight: wp('10%') },
    px12: { paddingLeft: wp('12%'), paddingRight: wp('12%') },
    px14: { paddingLeft: wp('14%'), paddingRight: wp('14%') },
    px16: { paddingLeft: wp('16%'), paddingRight: wp('16%') },
    px18: { paddingLeft: wp('18%'), paddingRight: wp('18%') },
    px20: { paddingLeft: wp('20%'), paddingRight: wp('20%') },
    px25: { paddingLeft: wp('25%'), paddingRight: wp('25%') },
    px30: { paddingLeft: wp('30%'), paddingRight: wp('30%') },
    px35: { paddingLeft: wp('35%'), paddingRight: wp('35%') },
    px40: { paddingLeft: wp('40%'), paddingRight: wp('40%') },
    px45: { paddingLeft: wp('45%'), paddingRight: wp('45%') },
    px50: { paddingLeft: wp('50%'), paddingRight: wp('50%') },

    py1: { paddingTop: wp('1%'), paddingBottom: wp('1%') },
    py2: { paddingTop: wp('2%'), paddingBottom: wp('2%') },
    py3: { paddingTop: wp('3%'), paddingBottom: wp('3%') },
    py4: { paddingTop: wp('4%'), paddingBottom: wp('4%') },
    py5: { paddingTop: wp('5%'), paddingBottom: wp('5%') },
    py6: { paddingTop: wp('6%'), paddingBottom: wp('6%') },
    py7: { paddingTop: wp('7%'), paddingBottom: wp('7%') },
    py8: { paddingTop: wp('8%'), paddingBottom: wp('8%') },
    py9: { paddingTop: wp('9%'), paddingBottom: wp('9%') },
    py10: { paddingTop: wp('10%'), paddingBottom: wp('10%') },
    py12: { paddingTop: wp('12%'), paddingBottom: wp('12%') },
    py14: { paddingTop: wp('14%'), paddingBottom: wp('14%') },
    py16: { paddingTop: wp('16%'), paddingBottom: wp('16%') },
    py18: { paddingTop: wp('18%'), paddingBottom: wp('18%') },
    py20: { paddingTop: wp('20%'), paddingBottom: wp('20%') },
    py25: { paddingTop: wp('25%'), paddingBottom: wp('25%') },
    py30: { paddingTop: wp('30%'), paddingBottom: wp('30%') },
    py35: { paddingTop: wp('35%'), paddingBottom: wp('35%') },
    py40: { paddingTop: wp('40%'), paddingBottom: wp('40%') },
    py45: { paddingTop: wp('45%'), paddingBottom: wp('45%') },
    py50: { paddingTop: wp('50%'), paddingBottom: wp('50%') },

    pl1: { paddingLeft: wp('1%') },
    pl2: { paddingLeft: wp('2%') },
    pl3: { paddingLeft: wp('3%') },
    pl4: { paddingLeft: wp('4%') },
    pl5: { paddingLeft: wp('5%') },
    pl6: { paddingLeft: wp('6%') },
    pl7: { paddingLeft: wp('7%') },
    pl8: { paddingLeft: wp('8%') },
    pl9: { paddingLeft: wp('9%') },
    pl10: { paddingLeft: wp('10%') },
    pl12: { paddingLeft: wp('12%') },
    pl14: { paddingLeft: wp('14%') },
    pl16: { paddingLeft: wp('16%') },
    pl18: { paddingLeft: wp('18%') },
    pl20: { paddingLeft: wp('20%') },
    pl25: { paddingLeft: wp('25%') },
    pl30: { paddingLeft: wp('30%') },
    pl35: { paddingLeft: wp('35%') },
    pl40: { paddingLeft: wp('40%') },
    pl45: { paddingLeft: wp('45%') },
    pl50: { paddingLeft: wp('50%') },

    pr1: { paddingRight: wp('1%') },
    pr2: { paddingRight: wp('2%') },
    pr3: { paddingRight: wp('3%') },
    pr4: { paddingRight: wp('4%') },
    pr5: { paddingRight: wp('5%') },
    pr6: { paddingRight: wp('6%') },
    pr7: { paddingRight: wp('7%') },
    pr8: { paddingRight: wp('8%') },
    pr9: { paddingRight: wp('9%') },
    pr10: { paddingRight: wp('10%') },
    pr12: { paddingRight: wp('12%') },
    pr14: { paddingRight: wp('14%') },
    pr16: { paddingRight: wp('16%') },
    pr18: { paddingRight: wp('18%') },
    pr20: { paddingRight: wp('20%') },
    pr25: { paddingRight: wp('25%') },
    pr30: { paddingRight: wp('30%') },
    pr35: { paddingRight: wp('35%') },
    pr40: { paddingRight: wp('40%') },
    pr45: { paddingRight: wp('45%') },
    pr50: { paddingRight: wp('50%') },

    pt1: { paddingTop: wp('1%') },
    pt2: { paddingTop: wp('2%') },
    pt3: { paddingTop: wp('3%') },
    pt4: { paddingTop: wp('4%') },
    pt5: { paddingTop: wp('5%') },
    pt6: { paddingTop: wp('6%') },
    pt7: { paddingTop: wp('7%') },
    pt8: { paddingTop: wp('8%') },
    pt9: { paddingTop: wp('9%') },
    pt10: { paddingTop: wp('10%') },
    pt12: { paddingTop: wp('12%') },
    pt14: { paddingTop: wp('14%') },
    pt16: { paddingTop: wp('16%') },
    pt18: { paddingTop: wp('18%') },
    pt20: { paddingTop: wp('20%') },
    pt25: { paddingTop: wp('25%') },
    pt30: { paddingTop: wp('30%') },
    pt35: { paddingTop: wp('35%') },
    pt40: { paddingTop: wp('40%') },
    pt45: { paddingTop: wp('45%') },
    pt50: { paddingTop: wp('50%') },

    pb1: { paddingBottom: wp('1%') },
    pb2: { paddingBottom: wp('2%') },
    pb3: { paddingBottom: wp('3%') },
    pb4: { paddingBottom: wp('4%') },
    pb5: { paddingBottom: wp('5%') },
    pb6: { paddingBottom: wp('6%') },
    pb7: { paddingBottom: wp('7%') },
    pb8: { paddingBottom: wp('8%') },
    pb9: { paddingBottom: wp('9%') },
    pb10: { paddingBottom: wp('10%') },
    pb12: { paddingBottom: wp('12%') },
    pb14: { paddingBottom: wp('14%') },
    pb16: { paddingBottom: wp('16%') },
    pb18: { paddingBottom: wp('18%') },
    pb20: { paddingBottom: wp('20%') },
    pb25: { paddingBottom: wp('25%') },
    pb30: { paddingBottom: wp('30%') },
    pb35: { paddingBottom: wp('35%') },
    pb40: { paddingBottom: wp('40%') },
    pb45: { paddingBottom: wp('45%') },
    pb50: { paddingBottom: wp('50%') },

    w5: { width: '5%' },
    w10: { width: '10%' },
    w15: { width: '15%' },
    w20: { width: '20%' },
    w25: { width: '25%' },
    w30: { width: '30%' },
    w35: { width: '35%' },
    w40: { width: '40%' },
    w45: { width: '45%' },
    w50: { width: '50%' },
    w55: { width: '55%' },
    w60: { width: '60%' },
    w65: { width: '65%' },
    w70: { width: '70%' },
    w75: { width: '75%' },
    w80: { width: '80%' },
    w85: { width: '85%' },
    w90: { width: '90%' },
    w95: { width: '95%' },
    w100: { width: '100%' },
    wauto: { width: 'auto' },

    h5: { height: '5%' },
    h10: { height: '10%' },
    h15: { height: '15%' },
    h20: { height: '20%' },
    h25: { height: '25%' },
    h30: { height: '30%' },
    h35: { height: '35%' },
    h40: { height: '40%' },
    h45: { height: '45%' },
    h50: { height: '50%' },
    h55: { height: '55%' },
    h60: { height: '60%' },
    h65: { height: '65%' },
    h70: { height: '70%' },
    h75: { height: '75%' },
    h80: { height: '80%' },
    h85: { height: '85%' },
    h90: { height: '90%' },
    h95: { height: '95%' },
    h100: { height: '100%' },
    hauto: { height: 'auto' },

    top0: { top: 0 },
    left0: { left: 0 },
    right0: { right: 0 },
    bottom0: { bottom: 0 },

    flex: { display: 'flex' },
    hide: { display: 'none' },
    row: { display: 'flex', flexDirection: 'row' },
    col: { display: 'flex', flexDirection: 'column' },

    wrap: { flexWrap: 'wrap' },

    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },
    flex6: { flex: 6 },
    flex7: { flex: 7 },
    flex8: { flex: 8 },
    flex9: { flex: 9 },
    flex10: { flex: 10 },
    flex11: { flex: 11 },

    relative: { position: 'relative' },
    absolute: { position: 'absolute' },

    br1: { borderRadius: wp('0.2%') },
    br2: { borderRadius: wp('0.4%') },
    br3: { borderRadius: wp('0.6%') },
    br4: { borderRadius: wp('0.8%') },
    br5: { borderRadius: wp('1%') },
    br6: { borderRadius: wp('1.2%') },
    br7: { borderRadius: wp('1.4%') },
    br8: { borderRadius: wp('1.6%') },
    br9: { borderRadius: wp('1.8%') },
    br10: { borderRadius: wp('2%') },
    br11: { borderRadius: wp('2.2%') },
    br12: { borderRadius: wp('2.4%') },
    br13: { borderRadius: wp('2.6%') },
    br14: { borderRadius: wp('2.8%') },
    br15: { borderRadius: wp('3%') },
    br16: { borderRadius: wp('3.2%') },
    br17: { borderRadius: wp('3.4%') },
    br18: { borderRadius: wp('3.6%') },
    br19: { borderRadius: wp('3.8%') },
    br20: { borderRadius: wp('4%') },
    br30: { borderRadius: wp('5%') },
    br40: { borderRadius: wp('6%') },

    bw1: { borderWidth: 1 },
    bw2: { borderWidth: 2 },
    bw3: { borderWidth: 3 },
    bw4: { borderWidth: 4 },
    bw5: { borderWidth: 5 },
    bw0: { borderWidth: 0 },

    bbw1: { borderBottomWidth: 1 },
    bbw2: { borderBottomWidth: 2 },
    bbw3: { borderBottomWidth: 3 },
    bbw4: { borderBottomWidth: 4 },
    bbw5: { borderBottomWidth: 5 },
    bbw0: { borderBottomWidth: 0 },

    bwhite: { borderColor: 'white' },
    bblack: { borderColor: 'black' },
    bgrey: { borderColor: 'grey' },
    bcustome: { borderColor: '#D3DBEA' },
    bcustome1: { borderColor: 'rgba(129, 129, 129, 0.1)' },

    solid: { borderStyle: 'solid' },
    dotted: { borderStyle: 'dotted' },
    dashed: { borderStyle: 'dashed' },
})

export default styles;