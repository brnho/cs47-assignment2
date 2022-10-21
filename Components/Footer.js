import { StyleSheet, Text, View, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Header() {
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/Icons/discover_light.png')}
                    style={styles.icon}
                /> 
                <Text style={styles.iconText}>
                    Discover
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/Icons/heart_light.png')}
                    style={styles.icon}
                /> 
                <Text style={styles.iconText}>
                    Matches
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/Icons/messages_light.png')}
                    style={styles.icon}
                /> 
                <Text style={styles.iconText}>
                    DMs
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '0%',
        backgroundColor: Themes.light.navigation,
        height: '11%',
        width: '120%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '15%',
        paddingVertical: 10,
    },
    iconContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        width: '100%',
        height: '45%',
        marginBottom: 5,
    },
    iconText: {
        color: Themes.light.textSecondary,
        fontSize: 16,
        fontFamily: 'Sydney',
    }
});

