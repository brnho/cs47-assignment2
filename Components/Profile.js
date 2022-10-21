import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from '../assets/Themes';

const Quip = () => {
    return(
        <View style={styles.quipContainer}>
            <Text style={styles.quipText}>My hottest take</Text>
            <View style={styles.imgContainer}>
                <Image
                    source={require('../assets/Icons/player_light.png')}
                    style={styles.playerImg}
                />
                <Image
                    source={require('../assets/Icons/audio_waveform_light.png')}
                    style={styles.waveformImg}
                />
            </View>
        </View>
    );
}

export default function Profile() {
    return(
        <View style={styles.profileContainer}>
            <View style={styles.profilePicContainer}>
                <Image 
                    source={require('../assets/Profiles/mtl.jpg')} 
                    style={styles.profilePic}
                />
                <Text style={styles.profilePicText}>
                    MTL
                </Text>
                <Text style={styles.locationText}>
                    2 miles away
                </Text>
            </View>
            <Quip />
        </View>
    );
}



const styles = StyleSheet.create({
    profileContainer: {  // top level container
        alignItems: 'center',
        width: '100%',
        height: '70%',
        //paddingHorizontal: 20,
        //backgroundColor: 'green',
    },
    profilePicContainer: {
        width: '100%',
        height: '70%',
        marginBottom: 20,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    profilePic: { // goes inside profilePicContainer
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    profilePicText: {
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
        fontSize: 40,
        position: 'absolute',
        top: '3%',
        left: '5%',
    },
    locationText: {
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
        fontSize: 18,
        position: 'absolute',
        bottom: '3%',
        left: '5%',
    },
    quipContainer: {
        width: '100%',
        height: '22%',
        backgroundColor: Themes.light.bgSecondary,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        borderRadius: 10,
        padding: 15,
    },
    quipText: { // goes inside quipContainer
        color: Themes.light.text,
        fontSize: 32,
        fontFamily: 'Sydney',
    },
    imgContainer: { // goes inside quipContainer
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '70%'
    },
    playerImg: {
        resizeMode: 'contain',
        width: '19%',
        height: '100%',
        marginRight: 2,
    },
    waveformImg: {
        resizeMode: 'contain',
        width: '79%',
        height: '100%',
    }
});